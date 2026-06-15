import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import type { Product } from "../pages/types/product";

interface ItemProps {
  product: Product;
}

function Item({ product }: ItemProps) {
  return (
    <Link
      to={`/product/${product.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Card className="h-100 border-0 shadow-sm">
        <Card.Img
          variant="top"
          src={product.image}
          style={{ height: "200px", objectFit: "cover" }}
        />

        <Card.Body className="d-flex flex-column">
          <Card.Subtitle className="text-muted mb-2">
            {product.category}
          </Card.Subtitle>

          <Card.Title>{product.name}</Card.Title>

          <Card.Text className="fw-bold">
            ${product.price.toLocaleString("es-CO")}
          </Card.Text>

          <span className="mt-auto text-dark fw-semibold">Ver detalle</span>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default Item;
