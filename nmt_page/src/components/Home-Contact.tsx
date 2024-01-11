import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function HomeContact() {
  const sectionStyle = {
    backgroundColor: "#5a5a5a",
    fontFamily: "thai",
    color: "#05f5ad",
    paddingTop: "100px",
    paddingBottom: "100px",
  };
  return (
    <section id="contacto" style={sectionStyle} className="mt-5 mb-5 " data-aos="fade-up">
      <Container fluid>
        <Row className="justify-content-center align-items-center text-center">
          <Col>
            <h1 data-aos="fade-down">!No lo penses más, únite a NEEEEEEEEM¡</h1>
            <Button data-aos="fade-up" variant="success" href="/contact" className="mt-5">
              Contáctanos
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HomeContact;
