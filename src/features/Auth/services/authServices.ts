import { api } from "@/lib/axios";
import type { AuthResponse, LoginRequest, RegisterRequest } from "@/types/user";

export const authService = {
  async profile(): Promise<AuthResponse> {
    const response = await api.get("/auth/profile");
    return response.data;
  },

  async login(credentials: LoginRequest): Promise<AuthResponse> {
    const response = await api.post("/auth/signin", credentials);
    return response.data;
  },

  async register(userData: RegisterRequest): Promise<AuthResponse> {
    const response = await api.post("/auth/signup", userData);
    return response.data;
  },

  async verifyEmail(data: { code: string }): Promise<AuthResponse> {
    const response = await api.post("/auth/verify-email", data);
    return response.data;
  },

  async resendCode(): Promise<AuthResponse> {
    return await api.post("/auth/resend-code");
  },

  async signOut(): Promise<void> {
    return await api.post("/auth/signout");
  },

  async refreshToken(): Promise<AuthResponse> {
    const response = await api.get("/auth/refresh-token");
    return response.data;
  },
};
