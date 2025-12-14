import { Pages, Role, RoutesNav } from "@/constants/enums";
import { useAuth } from "@/features/Auth/hooks/useAuthStore";
import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  redirectTo?: string;
}

export function ProtectedRoute({
  children,
  redirectTo = `/${RoutesNav.AUTH}/${Pages.SIGNIN}`,
}: Props) {
  const { isAuth, loading, user } = useAuth();
  const location = useLocation();
  const [initialCheck, setInitialCheck] = useState(false);

  useEffect(() => {
    if (loading) {
      setInitialCheck(false);
    }
  }, [loading]);

  if (initialCheck && loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuth) {
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  if (user && !user.verifiedEmail) {
    // Redirect to verify account page if user is not verified
    return (
      <Navigate to="/auth/verify-account" state={{ from: location }} replace />
    );
  }
  return isAuth && user && user.verifiedEmail && <>{children}</>;
}

export function AdminRoute({
  children,
  redirectTo = `/${RoutesNav.USER}/${Pages.PROFILE}`,
}: Props) {
  const { isAuth, loading, user } = useAuth();
  const location = useLocation();
  const [initialCheck, setInitialCheck] = useState(false);

  useEffect(() => {
    if (loading) {
      setInitialCheck(false);
    }
  }, [loading]);

  if (initialCheck && loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuth) {
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  if (user && !user.verifiedEmail) {
    // Redirect to verify account page if user is not verified
    return (
      <Navigate to="/auth/verify-account" state={{ from: location }} replace />
    );
  }

  if (user && user.role !== Role.ADMIN) {
    // Redirect to root if user is not admin
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return (
    isAuth &&
    user &&
    user.verifiedEmail &&
    user.role === Role.ADMIN && <>{children}</>
  );
}

export function PublicRoute({ children, redirectTo = "/" }: Props) {
  const { isAuth, loading, user } = useAuth();
  const [initialCheck, setInitialCheck] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Only show loading spinner for initial authentication check
    if (!loading) {
      setInitialCheck(false);
    }
  }, [loading]);

  // Show loading only during initial authentication check
  if (initialCheck && loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }
  if (
    !isAuth &&
    !user &&
    location.pathname === `/${RoutesNav.AUTH}/${Pages.VERIFY_ACCOUNT}`
  ) {
    return <Navigate to={`/${RoutesNav.AUTH}/${Pages.SIGNIN}`} replace />;
  }

  // Redirect to dashboard if already authenticated-
  if (isAuth && user && user.verifiedEmail) {
    return <Navigate to={redirectTo} replace />;
  }

  return <>{children}</>;
}
