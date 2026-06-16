import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { Spinner } from "react-bootstrap";
import { useFetch } from "../../../../shared/hooks/useFetch";
import { getProductById } from "../../pages/services/productService";
import type { Product } from "../../pages/types/product";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const { id } = useParams();

  const {
    data: product,
    loading,
    error,
  } = useFetch<Product | null>(() =>
    id ? getProductById(id) : Promise.resolve(null),
  );

  if (error) {
    return (
      <div className="detail-page">
        <p className="error-text">{error}</p>
      </div>
    );
  }

  return (
    <div className="detail-page">
      {loading ? (
        <div className="detail-loader">
          <Spinner animation="border" />
        </div>
      ) : product ? (
        <div className="detail-wrapper">
          <ItemDetail product={product} />
        </div>
      ) : (
        <div className="detail-empty">
          <p>Producto no encontrado</p>
        </div>
      )}
    </div>
  );
}

export default ItemDetailContainer;
