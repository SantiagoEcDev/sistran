import { toast } from "react-toastify";
import { useCart } from "../../../shared/hooks/useCart";
import type { Product } from "../pages/types/product";
import ItemQuantitySelector from "./ItemQuantitySelector/ItemQuantitySelector";

interface ItemDetailProps {
  product: Product;
}

function ItemDetail({ product }: ItemDetailProps) {
  const { addItem } = useCart();

  if (!product) return null;

  const handleAdd = (quantity: number) => {
    addItem(product, quantity);
    toast.success("Producto agregado al carrito");
  };

  const price = product.price ?? 0;
  const stock = product.stock ?? 0;

  return (
    <div className="row g-5">
      <div className="col-md-6">
        <img
          src={product.image}
          alt={product.name}
          className="img-fluid rounded shadow-sm"
        />
      </div>

      <div className="col-md-6 d-flex flex-column gap-3">
        <h2>{product.name}</h2>

        <p className="text-muted">{product.category}</p>

        <h4 className="fw-bold">${price.toLocaleString("es-CO")}</h4>

        <p>{product.description}</p>

        <div>
          <strong>Stock:</strong> {stock}
        </div>

        <ItemQuantitySelector stock={stock} onAdd={handleAdd} />
      </div>
    </div>
  );
}

export default ItemDetail;
