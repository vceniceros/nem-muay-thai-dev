import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import foto1 from "../assets/img/colage1 (1).jpg";
import foto2 from "../assets/img/colage1 (2).jpg";
import foto3 from "../assets/img/colage1 (3).jpg";
import foto4 from "../assets/img/colage1 (4).jpg";
import foto5 from "../assets/img/colage1 (5).jpg";
import foto6 from "../assets/img/colage1 (6).jpg";


function HomePhotos() {
  const fotos = [foto1, foto2, foto3, foto4, foto5, foto6];
  return (
    <section id="fotos" className="mt-5 mb-5 border-top">
      <Container className="mt-5">
        <Row xs={1} sm={2} md={3} className="g-4" data-aos="fade-down">
          {fotos.map((foto, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="text-center">
              <img
                src={foto}
                alt={`Imagen ${index + 1}`}
                className="img-fluid"
                style={{ width: "300px" , height: "300px"}}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default HomePhotos;
