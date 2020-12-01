import React from 'react'
import { Navbar, Nav, Button, Form } from 'react-bootstrap'

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">ARK Trust</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav>
                    <Nav.Link href="#deets">Home</Nav.Link>
                    <Nav.Link href="#deets">About</Nav.Link>
                    <Nav.Link href="#deets">Organizarion</Nav.Link>
                    <Nav.Link href="#deets">Work</Nav.Link>
                    <Button variant="outline-light" className="ml-2">
                        Donations
                        </Button>
                    <Button variant="outline-light" className="ml-2">
                        Blood Bank
                        </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
