import React from "react";
import { Navbar, Nav, Button, Form } from "react-bootstrap";
import Link from 'next/link'

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">ARK Trust</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Link href="/">
            <Nav.Link as="a" href="/">
              Home
          </Nav.Link>
          </Link>
          <Nav.Link href="/#about">About</Nav.Link>
          <Nav.Link href="/#org">Organizarion</Nav.Link>
          <Nav.Link href="/#work">Work</Nav.Link>
          <Nav.Link href="#deets4">Contact</Nav.Link>
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
