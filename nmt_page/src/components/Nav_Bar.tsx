import React, { Component } from "react";
import {
  Navbar,
  Nav,
 
} from "react-bootstrap";
import logo from '../assets/img/nmt_logo.jpg'; 

function Nav_Bar() {

  return (
    <Navbar className="custom-navbar border-bottom border-body sticky-top fixed" >
      <Navbar.Brand href="/">
        <img
          src={logo}
          height="80px"
          width="80px"
          alt=""
          className="me-2"
        />
      </Navbar.Brand>
      <h1 className="m-0 ms-3 custom-navbar-title">Nem muay thai</h1>
      <Nav className="mt-3">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/#lugar_y_horarios">Lugar y horarios</Nav.Link>
        <Nav.Link href="/contact">contacto</Nav.Link>
      </Nav>
    </Navbar>
  );
};
export default Nav_Bar;
