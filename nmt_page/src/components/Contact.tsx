import React from "react";
import { Container } from "react-bootstrap";
import { ContactUs } from "./Contact-form";

function Contact(){
    return(
        <section id="contact form">
        <Container className="text-center" >
        <h2 className="thai-title fs-1 mt-5 mb-5" data-aos="fade-up">
            ¿Decidiste unirte al NEN crew? mandanos un mensaje por acá:
        </h2>
        <ContactUs/>
        </Container>
        </section>
    )
}
 
export default Contact;