import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import grupo from "../assets/img/foto-grupal.jpg";

function HomeWINEM() {
  return (
    <section id="que_es_NEM_muay_thai">
      <Container fluid>
        <div className="fs-2 text-center mb-4 mt-4 border-top border-bottom">
          <h2 data-aos="fade-up" className="thai-title">¿Qué es NEN Muay Thai?</h2>
        </div>
        <Row className="mt-4">
          <Col md={6} data-aos="fade-down">
            <p>
              Aca necesito una explicación bien emotiva de qué es NEN (más que
              un gimnasio, una familia).
            </p>
          </Col>
          <Col md={6} className="text-center" data-aos="fade-up">
            <img
              src={grupo}
              alt="grupo que entrena muay thai"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HomeWINEM;

