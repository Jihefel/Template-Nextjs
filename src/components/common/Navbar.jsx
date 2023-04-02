import Link from "next/link";
// import { Container, Nav, Navbar } from "react-bootstrap";
if (typeof window !== "undefined") {
  const M = require("materialize-css");
}
import { Navbar, Icon } from "react-materialize";

function NavBar() {
  return (
    <>
      {/* <Navbar bg="light" expand="md">
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
      </Navbar> */}
      <Navbar
        alignLinks="left"
        id="mobile-nav"
        menuIcon={<Icon>=</Icon>}
        options={{
          draggable: true,
          edge: "left",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
        centerChildren
        className="blue"
      >
        <Link href="/">Accueil</Link>
        <Link href="/systeme-solaire">Système solaire</Link>
        <Link href="/isr">ISR</Link>
        <Link href="/cours">Cours BTC</Link>
        <Link href="/contact">Contact</Link>
      </Navbar>
    </>
  );
}

export default NavBar;
