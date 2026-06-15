import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "../CardWidget/CardWidget";


function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          SISTRAN
        </Navbar.Brand>

        <Nav className="ms-auto d-flex align-items-center gap-3">
          <Nav.Link as={Link} to="/">
            Catálogo
          </Nav.Link>

          <CartWidget />
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
