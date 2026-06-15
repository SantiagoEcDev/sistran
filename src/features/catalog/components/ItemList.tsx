
import type { Product } from "../pages/types/product";
import Item from "./Item";

interface ItemListProps {
  products: Product[];
}

function ItemList({ products }: ItemListProps) {
  return (
    <div className="row g-4">
      {products.map((product) => (
        <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Item product={product} />
        </div>
      ))}
    </div>
  );
}

export default ItemList;
