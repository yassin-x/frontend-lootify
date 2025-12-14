import { Pages } from "@/constants/enums";
import Home from "@/pages";
import OurUs from "@/pages/our-us";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { AuthRoutes } from "./AuthRoutes";
import { AdminRoutes } from "./AdminRoutes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home />} />
      <Route path={`${Pages.OUR_US}`} element={<OurUs />}></Route>
      {AuthRoutes}
      {AdminRoutes}
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </>
  )
);
