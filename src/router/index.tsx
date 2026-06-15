import { createBrowserRouter } from "react-router-dom";

import Layout from "../shared/components/Layout/Layout";

import HomePage from "../features/catalog/pages/HomePage";
import ProductDetailPage from "../features/catalog/pages/ProductDetailPage";
import CartPage from "../features/cart/pages/CartPage";
import CheckoutPage from "../features/checkout/pages/CheckoutPage";

export const router = createBrowserRouter([
  {
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/product/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
    ],
  },
]);
