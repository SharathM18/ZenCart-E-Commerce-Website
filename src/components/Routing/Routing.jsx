import { createBrowserRouter } from "react-router-dom";

import App from "../../App";
import HomePage from "../Home/HomePage";
import ProductPage from "../Products/ProductPage";
import SingleProductPage from "../SingleProduct/SingleProductPage";
import CartPage from "../Cart/CartPage";
import MyOrder from "../MyOrder/MyOrder";
import LoginPage from "../Authentication/LoginPage";
import SignupPage from "../Authentication/SignupPage";

const Routing = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/products",
          element: <ProductPage />,
        },
        {
          path: "/products/:id",
          element: <SingleProductPage />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
        {
          path: "/myorders",
          element: <MyOrder />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/signup",
          element: <SignupPage />,
        },
      ],
    },
  ]);

  return router;
};

export default Routing;
