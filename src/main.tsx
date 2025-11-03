import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import "./styles/index.css";
import { Toaster } from "sonner";
import { router } from "./routes/Router";
import { ReactQueryProvider } from "./lib/react-query";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <ReactQueryProvider>
        <RouterProvider router={router} />
        <Toaster
          richColors
          position="top-center"
          duration={3000}
          closeButton={true}
        />
      </ReactQueryProvider>
    </HelmetProvider>
  </StrictMode>
);
