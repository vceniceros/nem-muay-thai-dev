import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Container, Table } from "react-bootstrap";

interface Event {
  id: number;
  name: string;
  place: string;
  descripcion: string;
  img: string;
  day: string;
  formattedDay: string;
}

const ENDPOINT = "http://localhost:8000/api";

function AdminPanelEventesShow() {
  const [events, setEvents] = useState<Event[]>([]);

  const getAllEvents = async () => {
    try {
        const response = await axios.get<Event[]>(`${ENDPOINT}/events`);
  
      
        const formattedEvents = response.data.map((event) => ({
          ...event,
          formattedDay: new Date(event.day).toLocaleDateString(),
        }));
  
        setEvents(formattedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  const deleteEvent = async (id: number) => {
    await axios.delete(`${ENDPOINT}/event/${id}`);
    getAllEvents();
  };

  return (
    <Container>
      <h1>Bienvenido al admin panel de eventos</h1>
      <div className="d-grid gap-2">
        <Button variant="success" href="/adminpanel/evento/crear">crear evento </Button>
      </div>
      <Table className="table-striped">
        <thead className="bg-primary text-white">
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Lugar</th>
            <th>Descripción</th>
            <th>Imagen</th>
            <th>Fecha</th>
            <th>Botones</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.id}</td>
              <td>{event.name}</td>
              <td>{event.place}</td>
              <td>{event.descripcion}</td>
              <td><img src={event.img} alt={event.img} height={50} width={50} crossOrigin="anonymous"/></td>
              <td>{event.formattedDay}</td>
              <td>
                <Link className="btn btn-primary" to={`/adminpanel/evento/editar/${event.id}`}>editar</Link>
                <Button variant="danger" onClick={()=>deleteEvent(event.id)}>borrar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default AdminPanelEventesShow;
