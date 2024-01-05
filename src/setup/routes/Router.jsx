import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "src/pages/Home/Home";
import Store from "src/pages/Store/Store";
import Login from "src/pages/Login/Login";
import Error from "src/pages/Error/Error";
import Product from "src/pages/Product/Product";

import StoreContent, {
  loader as pathLoader,
} from "src/components/Store/StoreContent";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/store",
      element: <Store />,
      children: [
        {
          index: true,
          element: <StoreContent />,
        },
        {
          path: "store/:gameId",
          element: <Product />,
          //loader: "Add data loader to be executed when on this route / import {useLoaderData} from "react-router-dom";
          //action: "Add action function to be executed when Form component send a request to the client side (POST, GET ...) / import {Form , redirect(for redirecting)}
        },
        {
          path: ":genre",
          loader: pathLoader,
          element: <StoreContent />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
