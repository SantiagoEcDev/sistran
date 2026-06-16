import type { Product } from "../../pages/types/product";
import Item from "../Item/Item";
import "./ItemList.css";

interface ItemListProps {
  products: Product[];
}

function ItemList({ products }: ItemListProps) {
  return (
    <div className="products-grid">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemList;
