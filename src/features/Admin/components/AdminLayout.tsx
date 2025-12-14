import { AdminRoute } from "@/components/shared/GuardRoute";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <AdminRoute>
      <Outlet />
    </AdminRoute>
  );
}
