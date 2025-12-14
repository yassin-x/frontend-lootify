import { Pages, RoutesNav } from "@/constants/enums";
import AuthLayout from "@/features/Auth/components/AuthLayout";
import Signin from "@/pages/auth/signin";
import Signup from "@/pages/auth/signup";
import VerifyAccount from "@/pages/auth/verify-account";

import { Route } from "react-router-dom";

export const AuthRoutes = (
  <Route path={`${RoutesNav.AUTH}`} element={<AuthLayout />}>
    <Route path={`${Pages.SIGNIN}`} element={<Signin />} />
    <Route path={`${Pages.SIGNUP}`} element={<Signup />} />
    <Route path={`${Pages.VERIFY_ACCOUNT}`} element={<VerifyAccount />} />
  </Route>
);
