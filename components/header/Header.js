import React from "react";
import { Navbar, Nav, Button, Form } from "react-bootstrap";
import Link from 'next/link'

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link href="/">
        <Navbar.Brand href="/">ARK Trust</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Link href="/">
            <Nav.Link as="a" href="/">
              Home
          </Nav.Link>
          </Link>
          <Link href="/#about">
            <Nav.Link as="a" href="/#about">About</Nav.Link>
          </Link>
          <Link href="/#org">
            <Nav.Link as="a" href="/#org">Organizarion</Nav.Link>
          </Link>
          <Link href="/#work">
            <Nav.Link as="a" href="/#work">Work</Nav.Link>
          </Link>
          <Link href="/contact">
            <Nav.Link as="a" href="/contact">Contact</Nav.Link>
          </Link>
          <Button variant="outline-light" className="ml-2">
            Donations
          </Button>
          <Button variant="outline-light" className="ml-2">
            Blood Bank
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
