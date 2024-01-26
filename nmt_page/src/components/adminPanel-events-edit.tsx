import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
const ENDPOINT = "http://localhost:8000/api/event/";

function AdminPanelEventsEdit() {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [day, setDay] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const update = async (e: any) => {
    e.preventDefault();
    try {
      await axios.put(`${ENDPOINT}${id}`, {
        name: name,
        place: place,
        description: description,
        img: img,
        day: day,
      });
      alert("Evento actualizado exitosamente");
      navigate("/adminpanel/evento");
    } catch (error) {
      console.error("Error al actualizar evento:", error);
    }
  };
 // ...

useEffect(() => {
    const getEventById = async () => {
      try {
        const response = await axios.get(`${ENDPOINT}${id}`);
        setName(response.data.name);
        setPlace(response.data.place);
        setDescription(response.data.description);
        setImg(response.data.img);
        setDay(response.data.day);
      } catch (error) {
        console.error("Error al obtener el evento:", error);
      }
    };
    getEventById();
  }, [id]); 

  
  
  return ( <Container className="text-center">
  <h3>Actualizar evento</h3>
  <Form onSubmit={update}>
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
      actualizar
    </Button>
  </Form>
</Container>);
}

export default AdminPanelEventsEdit;
