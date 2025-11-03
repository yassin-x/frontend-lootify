import { Pages } from "@/constants/enums";
import Home from "@/pages";
import OurUs from "@/pages/our-us";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home />} />
      <Route path={`${Pages.OUR_US}`} element={<OurUs />}></Route>
    </>
  )
);
