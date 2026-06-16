import { Link } from "react-router-dom";
import type { Product } from "../../pages/types/product";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import "./Item.css";

interface ItemProps {
  product: Product;
}

function Item({ product }: ItemProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-image-wrapper">
        {!product.image || imgError ? (
          <div className="image-fallback">
            <FontAwesomeIcon icon={faBoxOpen} />
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
      </div>

      <div className="product-content">
        <span className="product-category">{product.category}</span>

        <h3 className="product-title">{product.name}</h3>

        <div className="product-footer">
          <span className="product-price">
            ${product.price.toLocaleString("es-CO")}
          </span>

          <span className="product-action">Ver detalle</span>
        </div>
      </div>
    </Link>
  );
}

export default Item;
