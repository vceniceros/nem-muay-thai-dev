import React, { Component } from "react";
import {
  Navbar,
  Nav,
 
} from "react-bootstrap";
import logo from '../assets/img/nmt_logo.jpg'; 

function Nav_Bar() {

  return (
    <Navbar className="custom-navbar border-bottom border-body sticky-top fixed">
      <Navbar.Brand href="/">
        <img
          src={logo}
          height="80px"
          width="80px"
          alt=""
          className="me-2"
        />
      </Navbar.Brand>
      <Nav className="mt-3">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about_us">quienes somos</Nav.Link>
        <Nav.Link href="/contact">contacto</Nav.Link>
      </Nav>
    </Navbar>
  );
};
export default Nav_Bar;
