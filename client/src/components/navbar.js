import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";
import "react-router-dom";

export default function ChessNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            width="35vh"
            style={{ marginRight: "5px", marginLeft: "5px" }}
            src="https://github.com/DK-Kim4312/images/blob/main/chess_image.png?raw=true"
            alt="Chess Logo"
          />
          <Navbar.Brand href="/">Beat a GM</Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/play">Play</Nav.Link>


              {/* News Button */}
              <Nav.Link href="/news">News</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}
