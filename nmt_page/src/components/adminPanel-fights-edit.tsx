import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

const ENDPOINT = "http://localhost:8000/api/fight/";

function AdminPanelFightsEdit() {
  const [events_id, setEventsId] = useState("");
  const [fighter1, setFighter1] = useState("");
  const [fighter2, setFighter2] = useState("");
  const [weight, setWeight] = useState("");
  const [description, setDescription] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [technicPoints, setTechnicPoints] = useState("");
  const [actitudPoints, setActitudPoints] = useState("");
  const [contundensPoints, setContundensPoints] = useState("");
  const [promPoints, setPromPoints] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const update = async (e: any) => {
    e.preventDefault();
    try {
      // Validar que los puntos estén entre 1 y 5
      if (
        !validatePoints(technicPoints) ||
        !validatePoints(actitudPoints) ||
        !validatePoints(contundensPoints)
      ) {
        alert("Los puntos deben estar entre 1 y 5.");
        return;
      }

      // Calcular el promedio
      const numericTechnicPoints = parseFloat(technicPoints);
      const numericActitudPoints = parseFloat(actitudPoints);
      const numericContundensPoints = parseFloat(contundensPoints);
      const averagePoints =
        (numericTechnicPoints + numericActitudPoints + numericContundensPoints) / 3;

      setPromPoints(averagePoints.toString());

      await axios.put(`${ENDPOINT}${id}`, {
        events_id: events_id,
        fighter1: fighter1,
        fighter2: fighter2,
        weight: weight,
        description: description,
        video_link: videoLink,
        technicPoints: numericTechnicPoints,
        actitudPoints: numericActitudPoints,
        contundensPoints: numericContundensPoints,
        promPoints: averagePoints,
      });

      alert("Pelea actualizada exitosamente");
      navigate("/adminpanel/peleas");
    } catch (error:any) {
      console.error("Error al actualizar pelea:", error);
      if (error.response) {
        console.error("Respuesta del servidor:", error.response.data);
      }
    }
  };

  useEffect(() => {
    const getFightById = async () => {
      try {
        const response = await axios.get(`${ENDPOINT}${id}`);
        setEventsId(response.data.events_id);
        setFighter1(response.data.fighter1);
        setFighter2(response.data.fighter2);
        setWeight(response.data.weight);
        setDescription(response.data.description);
        setVideoLink(response.data.video_link);
        setTechnicPoints(response.data.technicPoints.toString());
        setActitudPoints(response.data.actitudPoints.toString());
        setContundensPoints(response.data.contundensPoints.toString());
      } catch (error) {
        console.error("Error al obtener la pelea:", error);
      }
    };
    getFightById();
  }, [id]);

  const validatePoints = (points: string) => {
    const numericValue = parseFloat(points);
    return !isNaN(numericValue) && numericValue >= 1 && numericValue <= 5;
  };

  return (
    <Container className="text-center">
      <h3>Actualizar pelea</h3>
      <Form onSubmit={update}>
        <Form.Group controlId="formevents_id" className="mt-4 mb-4">
          <Form.Label>Id del Evento</Form.Label>
          <Form.Control
            type="number"
            name="events_id"
            value={events_id}
            onChange={(e) => setEventsId(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formFighter1" className="mt-4 mb-4">
          <Form.Label>Luchador 1</Form.Label>
          <Form.Control
            type="text"
            name="fighter1"
            value={fighter1}
            onChange={(e) => setFighter1(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formFighter2" className="mt-4 mb-4">
          <Form.Label>Luchador 2</Form.Label>
          <Form.Control
            type="text"
            name="fighter2"
            value={fighter2}
            onChange={(e) => setFighter2(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formWeight" className="mt-4 mb-4">
          <Form.Label>Peso</Form.Label>
          <Form.Control
            type="number"
            name="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formDescription" className="mt-4 mb-4">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formVideoLink" className="mt-4 mb-4">
          <Form.Label>Enlace del Video</Form.Label>
          <Form.Control
            type="text"
            name="videoLink"
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formTechnicPoints" className="mt-4 mb-4">
          <Form.Label>Puntos Técnicos (1-5)</Form.Label>
          <Form.Control
            type="number"
            name="technicPoints"
            value={technicPoints}
            onChange={(e) => setTechnicPoints(e.target.value)}
            step="0.1"
            min="1"
            max="5"
          />
        </Form.Group>

        <Form.Group controlId="formActitudPoints" className="mt-4 mb-4">
          <Form.Label>Puntos Actitudinales (1-5)</Form.Label>
          <Form.Control
            type="number"
            name="actitudPoints"
            value={actitudPoints}
            onChange={(e) => setActitudPoints(e.target.value)}
            step="0.1"
            min="1"
            max="5"
          />
        </Form.Group>

        <Form.Group controlId="formContundensPoints" className="mt-4 mb-4">
          <Form.Label>Puntos Contundentes (1-5)</Form.Label>
          <Form.Control
            type="number"
            name="contundensPoints"
            value={contundensPoints}
            onChange={(e) => setContundensPoints(e.target.value)}
            step="0.1"
            min="1"
            max="5"
          />
        </Form.Group>

        <Form.Group controlId="formPromPoints" className="mt-4 mb-4">
          <Form.Label>Promedio de Puntos (1-5)</Form.Label>
          <Form.Control
            type="number"
            name="promPoints"
            value={promPoints}
            onChange={(e) => setPromPoints(e.target.value)}
            step="0.1"
            min="1"
            max="5"
            readOnly
          />
        </Form.Group>

        <Button variant="success" type="submit" className="mt-4 mb-4 btn-lg">
          Actualizar
        </Button>
      </Form>
    </Container>
  );
}

export default AdminPanelFightsEdit;

