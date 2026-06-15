import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";
import { Container, Spinner } from "react-bootstrap";
import { useFetch } from "../../../shared/hooks/useFetch";
import { getProductById } from "../pages/services/productService";
import type { Product } from "../pages/types/product";

function ItemDetailContainer() {
  const { id } = useParams();

  console.log("Fetching product with id:", id);
  const {
    data: product,
    loading,
    error,
  } = useFetch<Product | null>(() =>
    id ? getProductById(id) : Promise.resolve(null),
  );

  if (error) {
    return (
      <Container className="py-4">
        <p>{error}</p>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      {loading ? (
        <div className="d-flex justify-content-center py-5">
          <Spinner animation="border" />
        </div>
      ) : product ? (
        <ItemDetail product={product} />
      ) : (
        <div className="text-center py-5">
          <p>Producto no encontrado</p>
        </div>
      )}
    </Container>
  );
}

export default ItemDetailContainer;
