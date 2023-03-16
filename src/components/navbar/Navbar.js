import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
function Navbarr() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container style={{ display: "flex", justifyContent: "space-around" }}>
        <Navbar.Brand
          href="#home"
        >
          <b>Travel Destination</b>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
        </Nav>
      </Container>
    </Navbar>
    <br/>
    </>
  );
}
export default Navbarr;
