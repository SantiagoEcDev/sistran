import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  return (
    <div className="d-flex align-items-center gap-2">
      <FontAwesomeIcon icon={faCartShopping} />

      <span>0</span>
    </div>
  );
}

export default CartWidget;
