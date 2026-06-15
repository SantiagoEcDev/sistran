import { Button } from "react-bootstrap";
import { useCart } from "../../../shared/hooks/useCart";
function Brief() {
  const { cart, removeItem, totalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center py-5">
        <p>Tu carrito está vacío</p>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column gap-3">
      {cart.map((item) => (
        <div
          key={item.product.id}
          className="d-flex justify-content-between align-items-center border p-3"
        >
          <div>
            <h6>{item.product.name}</h6>

            <p className="mb-1">Cantidad: {item.quantity}</p>

            <p className="mb-0">
              Subtotal: $
              {(item.product.price * item.quantity).toLocaleString("es-CO")}
            </p>
          </div>

          <Button variant="dark" onClick={() => removeItem(item.product.id)}>
            Eliminar
          </Button>
        </div>
      ))}

      <div className="d-flex justify-content-between mt-4">
        <h5>Total:</h5>
        <h5>${totalPrice.toLocaleString("es-CO")}</h5>
      </div>

      <div className="d-flex gap-2">
        <Button variant="outline-dark" onClick={clearCart}>
          Vaciar carrito
        </Button>

        <Button variant="dark" onClick={() => alert("Compra realizada")}>
          Finalizar compra
        </Button>
      </div>
    </div>
  );
}

export default Brief;
