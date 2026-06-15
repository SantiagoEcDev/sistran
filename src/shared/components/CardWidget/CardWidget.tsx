import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

function CartWidget() {
  const { totalItems } = useCart();

  return (
    <Link to="/checkout" className="cart-link">
      <span className="cart-icon">🛒</span>

      {totalItems > 0 && (
        <span
          className="cart-badge"
          aria-label={`Carrito con ${totalItems} productos`}
        >
          {totalItems}
        </span>
      )}
    </Link>
  );
}

export default CartWidget;
