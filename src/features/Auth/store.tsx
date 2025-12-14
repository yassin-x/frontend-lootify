import { create } from "zustand";
import { authCookie } from "@/lib/cookies";
import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
  User,
} from "@/types/user";
import { authService } from "./services/authServices";
import { Role, RoutesNav } from "@/constants/enums";

interface AuthState {
  // state
  user: User | null;
  accessToken: string | null;
  loading: boolean;
  isAuth: boolean;

  // actions
  loadUser: () => void;
  setLoading: (loading: boolean) => void;
  login: (credentials: LoginRequest) => Promise<AuthResponse>;
  register: (userData: RegisterRequest) => Promise<AuthResponse>;
  logout: () => Promise<void>;
  verifyEmail: ({ code }: { code: string }) => Promise<AuthResponse>;
  resendCode: () => Promise<AuthResponse>;
  isUser: () => boolean;
  isAdmin: () => boolean;
  isPremium: () => boolean;
  clearAuth: () => void;
}

const initalizeAuthState = () => {
  const user = authCookie.getUser();
  return {
    user,
    accessToken: null,
    loading: false,
    isAuth: Boolean(user),
  };
};

export const useAuthStore = create<AuthState>()((set, get) => ({
  ...initalizeAuthState(),

  loadUser: async () => {
    const user = await authService.profile();
    set(() => ({
      user: user.data?.user,
    }));

    // Update user data in cookies
    authCookie.setUser(user.data?.user as User);
  },

  setLoading: (loading) =>
    set(() => ({
      loading,
    })),

  login: async (credentials) => {
    set(() => ({ loading: true }));
    try {
      const res = await authService.login(credentials);

      set(() => ({
        user: res.data?.user,
        accessToken: res.data?.tokens?.access_token,
        isAuth: true,
        loading: false,
      }));

      authCookie.setAccessToken(res.data?.tokens?.access_token as string);
      authCookie.setUser(res.data?.user as User);
      return res;
    } catch (error) {
      set(() => ({ loading: false }));
      throw error;
    }
  },

  register: async (userData) => {
    set(() => ({ loading: true }));
    try {
      const res = await authService.register(userData);

      set(() => ({
        user: res.data?.user,
        accessToken: res.data?.tokens?.access_token,
        isAuth: true,
        loading: false,
      }));
      authCookie.setAccessToken(res.data?.tokens?.access_token as string);
      authCookie.setUser(res.data?.user as User);
      return res;
    } catch (error) {
      set(() => ({ loading: false }));
      throw error;
    }
  },

  verifyEmail: async (data) => {
    set(() => ({ loading: true }));
    try {
      const res = await authService.verifyEmail(data);
      return res;
    } catch (error) {
      set(() => ({ loading: false }));
      throw error;
    }
  },

  resendCode: async () => {
    set(() => ({ loading: true }));

    try {
      const response = await authService.resendCode();
      set(() => ({ loading: false }));
      return response;
    } catch (error) {
      set(() => ({ loading: false }));
      throw error;
    }
  },

  logout: async () => {
    try {
      await authService.signOut();
    } catch (error) {
      console.error("Logout API call failed:", error);
    } finally {
      set(() => ({
        user: null,
        isAuth: false,
        loading: false,
      }));

      authCookie.clearAll();

      window.location.href = RoutesNav.ROOT;
    }
  },

  clearAuth: () => {
    set(() => ({
      user: null,
      isAuth: false,
      loading: false,
    }));

    // Clear cookies
    authCookie.clearAll();
  },

  isUser: () => {
    const { user } = get();
    return user?.role === Role.USER;
  },

  isPremium: () => {
    const { user } = get();
    return user?.role === Role.PREMIUM;
  },

  isAdmin: () => {
    const { user } = get();
    return user?.role === Role.ADMIN;
  },
}));

export const useUser = () => useAuthStore((state) => state.user);
export const useIsAuth = () => useAuthStore((state) => state.isAuth);
export const useLoading = () => useAuthStore((state) => state.loading);
export const useLoadUser = () => useAuthStore((state) => state.loadUser);
export const useLogin = () => useAuthStore((state) => state.login);
export const useRegistrer = () => useAuthStore((state) => state.register);
export const useLogout = () => useAuthStore((state) => state.logout);
export const useClearAuth = () => useAuthStore((state) => state.clearAuth);
export const useVerifyEmail = () => useAuthStore((state) => state.verifyEmail);
export const useResendCode = () => useAuthStore((state) => state.resendCode);
export const useIsUser = () => useAuthStore((state) => state.isUser);
export const useIsPremium = () => useAuthStore((state) => state.isPremium);
export const useIsAdmin = () => useAuthStore((state) => state.isAdmin);
