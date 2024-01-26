import React from "react";
import { Container, Button } from "react-bootstrap";
import knockout from '../assets/gifs/knokout-gif.gif'
function Error404(){
    return(
        <section id="error 404" className="text-center">
        <h1 className="fs-2 thai-title">
            error 404 not found
        </h1>
        <Container >
            <img src={knockout} alt="error 404" />
            <h2 className="fs-4">
            Usted a ingresado a una url inexistente, favor de volver a la pagina principal
        </h2>
        <Button variant="danger" href="/" className="mt-4 mb-4">
            volver al inicio
        </Button>
        </Container>
        </section>
    )
}
export default Error404