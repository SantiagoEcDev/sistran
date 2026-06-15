import { Button } from "react-bootstrap";

interface AddItemButtonProps {
  onAdd: () => void;
}

function AddItemButton({ onAdd }: AddItemButtonProps) {
  return (
    <Button variant="dark" onClick={onAdd}>
      Agregar al carrito
    </Button>
  );
}

export default AddItemButton;
