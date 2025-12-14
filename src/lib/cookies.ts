import Cookies from "js-cookie";
import { Environments } from "@/constants/enums";
import type { User } from "@/types/user";

const COOKIE_OPTIONS = {
  expires: 7, // 7 days
  secure: process.env.NODE_ENV === Environments.PROD, // HTTPS only in production
  sameSite: "strict" as const,
  path: "/",
};

const ACCESS_TOKEN_KEY = "access_token";
const USER_DATA_KEY = "user_data";

export const authCookie = {
  setAccessToken: (token: string) => {
    Cookies.set(ACCESS_TOKEN_KEY, token, COOKIE_OPTIONS);
  },

  getAccessToken: (): string | null => {
    return Cookies.get(ACCESS_TOKEN_KEY) || null;
  },

  removeAccessToken: () => {
    Cookies.remove(ACCESS_TOKEN_KEY, { path: "/" });
  },

  setUser: (user: User) => {
    try {
      const userData = JSON.stringify(user);
      Cookies.set(USER_DATA_KEY, userData, COOKIE_OPTIONS);
    } catch (error) {
      console.error("Failed to store user data in cookies:", error);
    }
  },

  getUser: (): User | null => {
    try {
      const userData = Cookies.get(USER_DATA_KEY);
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error("Failed to parse user data from cookies:", error);
      // Clear invalid cookie data
      Cookies.remove(USER_DATA_KEY, { path: "/" });
      return null;
    }
  },

  removeUser: () => {
    Cookies.remove(USER_DATA_KEY, { path: "/" });
  },

  clearAll: () => {
    Cookies.remove(ACCESS_TOKEN_KEY, { path: "/" });
    Cookies.remove(USER_DATA_KEY, { path: "/" });
  },
};
