import React from "react";
import { Container, Button } from "react-bootstrap";
function adminPanel(){
    return (
        <Container className="text-center admin-panel-container">
            <h1 className="thai-title">Bienvenido al admin panel</h1>
            <Button variant="success" href="evento" className="mt-4">
                Administrar eventos
            </Button>
            <hr />
            <Button variant="success" href="peleas" className="mt-4">
                Administrar peleas
            </Button>
            
        </Container>
    )
};

export default adminPanel;