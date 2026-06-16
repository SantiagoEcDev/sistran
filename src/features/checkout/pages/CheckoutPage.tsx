import { Container } from "react-bootstrap";
import Brief from "../components/Brief";

function CheckoutPage() {
  return (
    <Container className="py-4">
      <h2 className="mb-4">Checkout</h2>
      <Brief />
    </Container>
  );
}

export default CheckoutPage;
