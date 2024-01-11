import React from "react";
import {
  Navbar,
  Nav,
 
} from "react-bootstrap";
import logo from '../assets/img/nmt_logo.jpg'; 

function NavBar() {

  return (
    <Navbar className="custom-navbar border-bottom border-body sticky-top fixed " >
      <Navbar.Brand href="/" className="text-center">
        <img
          src={logo}
          height="80px"
          width="80px"
          alt=""
          className="me-2"
        />
        <h1 className="m-0 ms-3 mt-3 thai-title">Nen muay thai</h1>
      </Navbar.Brand>
      
      <Nav className="mt-3">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/#lugar_y_horarios">Lugar y horarios</Nav.Link>
        <Nav.Link href="/contact">contacto</Nav.Link>
      </Nav>
    </Navbar>
  );
};
export default NavBar;
