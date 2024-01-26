import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ENDPOINT = "http://localhost:8000/api/event/";

function AdminPanelEventCreate() {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [day, setDay] = useState("");
  const navigate = useNavigate();

  const store = async (e:any) => {
    e.preventDefault();
    try {
      await axios.post(ENDPOINT, {
        name: name,
        place: place,
        description: description,
        img: img,
        day: day,
      });
      alert("Evento creado exitosamente");
      navigate("/adminpanel/evento/crear");
    } catch (error) {
      console.error("Error al almacenar el evento:", error);
    }
  };

  return (
    <Container className="text-center">
      <h3>Crear evento</h3>
      <Form onSubmit={store}>
        <Form.Group controlId="formName" className="mt-4 mb-4" >
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPlace" className="mt-4 mb-4" >
          <Form.Label>Lugar</Form.Label>
          <Form.Control
            type="text"
            name="place"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formDescription" className="mt-4 mb-4" >
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formImg" className="mt-4 mb-4" >
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="text"
            name="img"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formDay" className="mt-4 mb-4" >
          <Form.Label>Día</Form.Label>
          <Form.Control
            type="date"
            name="day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="success"
          type="submit"
          className="mt-4 mb-4 btn-lg"
          
        >
          crear
        </Button>
      </Form>
    </Container>
  );
}

export default AdminPanelEventCreate;

