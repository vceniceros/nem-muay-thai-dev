import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function HomeLocation() {
  return (
    <section id="lugar_y_horarios">
      <div className="fs-2 text-center mb-4 mt-4 border-top border-bottom">
        <h2 data-aos="fade-up">Lugar y horarios</h2>
      </div>
      <Container fluid>
        <Row>
          <Col md={6}>
            <div className="mb-4" data-aos="fade-up">
              <iframe
                title="Mapa de ubicación"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.275495671968!2d-58.43510518949861!3d-34.571895055704125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb54b3af8961b%3A0x1e5bb0846876f714!2sNMT%20Nen%20Muay%20Thai%20%26%20Kickboxing!5e0!3m2!1ses-419!2sar!4v1704812324951!5m2!1ses-419!2sar"
                width="100%"
                height="450"
                style={{ border: 1 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
          <Col md={6}>

            <div className="table-responsive" data-aos="fade-down">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Lunes</th>
                    <th>Martes</th>
                    <th>Miércoles</th>
                    <th>Jueves</th>
                    <th>Viernes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>8:00 am - 9:00 am</td>
                    <td></td>
                    <td>✔</td>
                    <td></td>
                    <td>✔</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>4:00 pm - 5:00 pm</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                  </tr>
                </tbody>
              </table>
              <b>Para clases particulares, hablar por whatsapp o la pestaña de contacto</b>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HomeLocation;

