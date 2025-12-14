import axios, {
  AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";
import { authCookie } from "./cookies";

export interface ApiError {
  message: string;
  response?: {
    status: number;
    data?: {
      message?: string;
      data: unknown;
    };
  };
  config?: {
    url: string;
  };
}

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:4000/api/v1",
  withCredentials: true,
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = authCookie.getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await api.get("/auth/refresh-token");

        const { data } = response.data;

        authCookie.setAccessToken(data.tokens.access_token);

        originalRequest.headers.Authorization = `Bearer ${data.tokens.access_token}`;
        return api(originalRequest);
      } catch (error) {
        console.error("Token refresh failed:", error);
        authCookie.clearAll();
        return Promise.reject(error);
      }
    } else {
      authCookie.clearAll();
    }

    return Promise.reject(error);
  }
);
