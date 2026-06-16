import { useCart } from "../../../shared/hooks/useCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCartShopping,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import "./Brief.css";

function Brief() {
  const { cart, removeItem, totalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <FontAwesomeIcon icon={faCartShopping} className="cart-empty-icon" />
        <p>Tu carrito está vacío</p>
      </div>
    );
  }

  return (
    <div className="cart-wrapper">
      {cart.map((item) => (
        <div key={item.product.id} className="cart-item">
          <div className="cart-image">
            <img src={item.product.image} alt={item.product.name} />
          </div>

          <div className="cart-info">
            <h6 className="cart-title">{item.product.name}</h6>

            <p className="cart-qty">
              Cantidad: <strong>{item.quantity}</strong>
            </p>

            <p className="cart-subtotal">
              Subtotal: $
              {(item.product.price * item.quantity).toLocaleString("es-CO")}
            </p>
          </div>

          <button
            className="cart-delete"
            onClick={() => removeItem(item.product.id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      ))}

      <div className="cart-total">
        <div className="total-left">
          <FontAwesomeIcon icon={faMoneyBill} />
          <span>Total</span>
        </div>

        <div className="total-right">${totalPrice.toLocaleString("es-CO")}</div>
      </div>

      <div className="cart-actions">
        <button className="btn-clear" onClick={clearCart}>
          Vaciar carrito
        </button>

        <button
          className="btn-checkout"
          onClick={() => alert("Compra realizada")}
        >
          Finalizar compra
        </button>
      </div>
    </div>
  );
}

export default Brief;
