import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import CartWidget from "../CardWidget/CardWidget";
import "./Navbar.css";

function NavBar() {
  return (
    <Navbar className="navbar-custom" expand="lg">
      <Container className="navbar-layout">
        <Link to="/" className="navbar-brand-custom">
          SISTRAN
        </Link>

        <div className="navbar-center">
          <Link to="/" className="nav-link-custom">
            <FontAwesomeIcon icon={faStore} className="nav-icon" />
            Catálogo
          </Link>
        </div>

        <div className="navbar-right">
          <CartWidget />
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
