import {
  useUser,
  useIsAuth,
  useLoading,
  useLoadUser,
  useLogin,
  useRegistrer,
  useLogout,
  useClearAuth,
  useVerifyEmail,
  useResendCode,
  useIsAdmin,
  useIsUser,
  useIsPremium,
} from "../store";

export function useAuth() {
  const user = useUser();
  const isAuth = useIsAuth();
  const loading = useLoading();
  const loadUser = useLoadUser();
  const login = useLogin();
  const register = useRegistrer();
  const logout = useLogout();
  const clearAuth = useClearAuth();
  const verifyEmail = useVerifyEmail();
  const resendCode = useResendCode();
  const isAdmin = useIsAdmin();
  const isUser = useIsUser();
  const isPremium = useIsPremium();

  return {
    user,
    isAuth,
    loading,
    loadUser,
    login,
    register,
    logout,
    clearAuth,
    verifyEmail,
    resendCode,
    isAdmin,
    isUser,
    isPremium,
  };
}
