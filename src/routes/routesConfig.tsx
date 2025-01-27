import { Navigate, RouteObject } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Loader } from "../common";

const HomeComponent = lazy(() => import("../components/Home"));
const LoginComponent = lazy(() => import("../components/Login"));
const RegistrationComponent = lazy(() => import("../components/Registration"));

export const routesConfig: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <HomeComponent />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loader />}>
        <LoginComponent />
      </Suspense>
    ),
  },
  {
    path: "/register",
    element: (
      <Suspense fallback={<Loader />}>
        <RegistrationComponent />
      </Suspense>
    ),
  },
  {
    path: "/new",
    element: <div>New</div>,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];
