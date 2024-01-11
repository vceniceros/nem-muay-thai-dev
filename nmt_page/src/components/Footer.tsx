import React from "react";
import { Container, Nav } from "react-bootstrap";
import logo from "../assets/img/nmt_logo.jpg";
import igLogo from "../assets/img/instagrama-logo.png";

function MyFooter() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  border-top custom-footer">
      <div className="col-md-4 d-flex align-items-center">
        <a
          href="/"
          className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
        >
          <img src={logo} height="50px" width="50px" alt="" className="me-2" />
        </a>
        <span className="mb-3 mb-md-0">
          © 2024 nem muay thai
        </span>
      </div>

      <Nav className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <Nav.Item className="ms-3">
          <Nav.Link
            className="text-body-secondary"
            href="https://www.instagram.com/nen.muaythai/"
            target="_blank"
          >
            <img src={igLogo} alt="ig logo" height="60" width="60" />
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="col-12 text-center mt-3 footer-copyright">
        <span className="">
          <a href="https://haizara-tech.com.ar/" target="blank">
           © 2024 Haizara-Tech. Todos los derechos reservados.
          </a>
        </span>
      </div>
    </footer>
  );
};

export default MyFooter;
