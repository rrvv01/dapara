import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">MYTH</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#TOP">TOP</Nav.Link>
            <Nav.Link href="#BOTTOM">BOTTOM</Nav.Link>
            <Nav.Link href="#SHOES">SHOES</Nav.Link>
            <Nav.Link href="#BAG">BAG</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;