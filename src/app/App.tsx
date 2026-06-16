import { RouterProvider } from "react-router-dom";
import { router } from "../router";
import { CartProvider } from "../shared/context/cart/CartProvider";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <CartProvider>
      <ToastContainer position="bottom-right" />
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
