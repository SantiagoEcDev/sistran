import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "../CardWidget/CardWidget";

function NavBar() {
  return (
    <Navbar bg="white" expand="lg" className="border-bottom py-3">
      <Container>
        <Navbar.Brand as={Link} to="/">
          SISTRAN
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="ms-auto align-items-center gap-4">
            <Nav.Link as={Link} to="/">
              Shop
            </Nav.Link>

            <Nav.Link as={Link} to="/cart">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
