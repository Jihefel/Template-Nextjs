import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";

function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/">Accueil</Link>
              <Link href="/systeme-solaire">Système solaire</Link>
              <Link href="/isr">ISR</Link>
              <Link href="/cours">Cours BTC</Link>
              <Link href="/contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
