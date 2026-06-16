import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./CardWidget.css";

function CartWidget() {
  const { totalItems } = useCart();

  return (
    <Link to="/checkout" className="cart-link">
      <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />

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
