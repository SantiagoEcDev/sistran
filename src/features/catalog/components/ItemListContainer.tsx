import { Container } from "react-bootstrap";

import ItemList from "./ItemList";
import { useFetch } from "../../../shared/hooks/useFetch";
import type { Product } from "../pages/types/product";
import { getProducts } from "../pages/services/productService";

interface ItemListContainerProps {
  title: string;
}

const ItemListContainer = ({ title }: ItemListContainerProps) => {
  const {
    data: products,
    loading,
    error,
  } = useFetch<Product[]>(() => getProducts());

  if (error) {
    return (
      <Container className="py-4">
        <p>{error}</p>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <h2 className="mb-4">{title}</h2>

      {loading ? (
        <div className="row g-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="placeholder-glow border p-3">
                <div className="placeholder col-12 mb-2" />
                <div className="placeholder col-8" />
              </div>
            </div>
          ))}
        </div>
      ) : products && products.length > 0 ? (
        <ItemList products={products} />
      ) : (
        <div className="text-center py-5">
          <p>No hay productos disponibles</p>
        </div>
      )}
    </Container>
  );
};

export default ItemListContainer;
