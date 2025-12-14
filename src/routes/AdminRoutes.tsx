import { Pages, RoutesNav } from "@/constants/enums";
import AdminLayout from "@/features/Admin/components/AdminLayout";
import Admin from "@/pages/admin";
import ProductCreate from "@/pages/admin/product-create";
import AdminProducts from "@/pages/admin/products";
import { Route } from "react-router-dom";

export const AdminRoutes = (
  <Route path={`/${RoutesNav.ADMIN}`} element={<AdminLayout />}>
    <Route index element={<Admin />} />
    <Route path={Pages.PRODUCTS} element={<AdminProducts />} />
    <Route path={Pages.PRODUCT_CREATE} element={<ProductCreate />} />
  </Route>
);
