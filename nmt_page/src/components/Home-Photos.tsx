import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import foto1 from "../assets/img/foto-grupal.jpg";

function HomePhotos() {
  const fotos = [foto1, foto1, foto1, foto1, foto1, foto1];
  return (
    <section id="fotos" className="mt-5 mb-5 border-top">
      <Container className="mt-5">
        <Row xs={1} sm={2} md={3} className="g-4" data-aos="fade-down">
          {fotos.map((foto, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <img
                src={foto}
                alt={`Imagen ${index + 1}`}
                className="img-fluid"
                style={{ maxWidth: "100%" }}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default HomePhotos;
