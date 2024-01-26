import React from "react";
import { Container, Row } from "react-bootstrap";

import queEsMuayThai from "../assets/img/que_es_muay_thai.jpg";

function HomeWIM() {
  return (
    <section id="que_es_muay_thai">
      <div className="fs-2 text-center mb-4 mt-4 border-top border-bottom">
        <h2 data-aos="fade-up" className="thai-title">¿Qué es Muay Thai? (boxeo tailandés)</h2>
      </div>
      <Container fluid className="mt-4">
        <Row>
          <div data-aos="fade-up" className="col-md-4 text-center">
            <img
              src={queEsMuayThai}
              alt="persona pateando paos"
              className="img-fluid"
              style={{ maxWidth: "100%", maxHeight: "70vh" }}
            />
          </div>
          <div data-aos="fade-down" className="col-md-8">
            <p className="mt-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
              deserunt similique voluptates ab quam laboriosam eius! Repellendus
              doloribus voluptas deserunt corrupti modi et placeat incidunt.
              Reiciendis est nam ipsam natus.
            </p>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default HomeWIM;
