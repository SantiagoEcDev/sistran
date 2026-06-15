import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

interface ItemQuantitySelectorProps {
  stock: number;
  onAdd: (quantity: number) => void;
}

function ItemQuantitySelector({
  stock,
  onAdd,
}: ItemQuantitySelectorProps) {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    if (quantity < stock) setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="d-flex flex-column gap-3">
      <ButtonGroup>
        <Button variant="dark" onClick={decrease}>
          -
        </Button>

        <Button variant="light" disabled>
          {quantity}
        </Button>

        <Button variant="dark" onClick={increase}>
          +
        </Button>
      </ButtonGroup>

      <Button variant="dark" onClick={() => onAdd(quantity)}>
        Agregar al carrito
      </Button>
    </div>
  );
}

export default ItemQuantitySelector;