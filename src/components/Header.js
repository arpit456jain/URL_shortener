import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
function Header({loginstatus}) {
  return (
    <>
      <Navbar className="navbar navbar-expand-lg navbar-dark">
        <Container>
          <Navbar.Brand href="#home">URL Shortner</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            
            <Nav className="me-auto">
            {!loginstatus ? (
                <>
                  <Nav.Link href="/?username=">Home</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/signup">Sign Up</Nav.Link>
                </>
              ) : (
                <Nav.Link href="/">Home</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
