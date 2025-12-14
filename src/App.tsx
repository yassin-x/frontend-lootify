import { Toaster } from "sonner";
import { router } from "./routes/AppRoutes";
import { ReactQueryProvider } from "./lib/react-query";
import { RouterProvider } from "react-router-dom";
import { useAuth } from "./features/Auth/hooks/useAuthStore";
import { useEffect } from "react";

export default function App() {
  const { loadUser, isAuth } = useAuth();
  useEffect(() => {
    if (isAuth) {
      loadUser();
    }
  }, [isAuth, loadUser]);

  return (
    <ReactQueryProvider>
      <RouterProvider router={router} />
      <Toaster
        richColors
        position="top-center"
        duration={3000}
        closeButton={true}
        dir={"rtl"}
      />
    </ReactQueryProvider>
  );
}
