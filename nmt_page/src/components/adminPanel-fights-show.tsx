import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Container, Table } from "react-bootstrap";

interface Fight {
  id: number;
  idEvent: number;
  fighter1: string;
  fighter2: string;
  wheigt: number;
  descripcion: string;
  video_link: string;
  technicPoints: number;
  actitudPoints: number;
  contundensPoints: number;
  promPoints: number;
}

const ENDPOINT = "http://localhost:8000/api";

function AdminPanelFightsShow() {
  const [fights, setFights] = useState<Fight[]>([]);

  const getAllFights = async () => {
    try {
      const response = await axios.get<Fight[]>(`${ENDPOINT}/fights`);
      setFights(response.data); 
    } catch (error) {
      console.error("Error fetching fights:", error);
    }
  };

  useEffect(() => {
    getAllFights();
  }, []);

  const deleteFight = async (id: number) => {
    await axios.delete(`${ENDPOINT}/fight/${id}`); 
    getAllFights();
  };

  return (
    <Container>
      <h1>Bienvenido al admin panel de peleas</h1>
      <div className="d-grid gap-2">
        <Button variant="success" href="/adminpanel/peleas/crear">
          Crear pelea
        </Button>
      </div>
      <Table className="table-striped">
        <thead className="bg-primary text-white">
          <tr>
            <th>Id</th>
            <th>Evento Id</th>
            <th>Luchador 1</th>
            <th>Luchador 2</th>
            <th>Peso</th>
            <th>Descripción</th>
            <th>Video Link</th>
            <th>Puntos Técnicos</th>
            <th>Puntos Actitudinales</th>
            <th>Puntos Contundentes</th>
            <th>Promedio de Puntos</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {fights.map((fight) => (
            <tr key={fight.id}>
              <td>{fight.id}</td>
              <td>{fight.idEvent}</td>
              <td>{fight.fighter1}</td>
              <td>{fight.fighter2}</td>
              <td>{fight.wheigt}</td>
              <td>{fight.descripcion}</td>
              <td>{fight.video_link}</td>
              <td>{fight.technicPoints}</td>
              <td>{fight.actitudPoints}</td>
              <td>{fight.contundensPoints}</td>
              <td>{fight.promPoints}</td>
              <td>
                <Link
                  className="btn btn-primary"
                  to={`/adminpanel/pelea/editar/${fight.id}`}
                >
                  Editar
                </Link>
                <Button
                  variant="danger"
                  onClick={() => deleteFight(fight.id)}
                >
                  Borrar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default AdminPanelFightsShow;
