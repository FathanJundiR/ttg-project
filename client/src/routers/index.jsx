import { createBrowserRouter, redirect } from "react-router-dom";
import Toastify from "toastify-js";
import LoginPage from "../views/LoginPage";

import BaseLayout from "../views/BaseLayout";
import HomePage from "../views/HomePage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    element: <BaseLayout/>,
    children:[
        {
            path: '/',
            element: <HomePage />
        }
    ]
  },
]);

export default router;
