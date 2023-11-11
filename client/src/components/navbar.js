import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "react-router-dom";

export default function ChessNavbar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        {/* Logo and Home Link */}
        <Navbar.Brand href="/">
          <img
            alt="Chess Logo"
            src="path_to_your_logo.png"  
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Beat a Grandmaster
        </Navbar.Brand>

        {/* Navbar Toggle for Responsive Design */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Play Button */}
            <Nav.Link href="/play">Play</Nav.Link>

            {/* News Button */}
            <Nav.Link href="/news">News</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}