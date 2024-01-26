import React, { useRef, FormEvent } from 'react';
import { Form, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

export const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_9j85u2b', 'template_api2nme', form.current, '2UKrfYIRLeIR9ebhK')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <Form ref={form} onSubmit={sendEmail}>
      <Form.Group controlId="formName" className='mt-4 mb-4' data-aos="fade-down">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" name="user_name" />
      </Form.Group>

      <Form.Group controlId="formEmail" className='mt-4 mb-4' data-aos="fade-down">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="user_email" />
      </Form.Group>

      <Form.Group controlId="formPhone" className='mt-4 mb-4' data-aos="fade-down">
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="tel" name="user_phone" />
      </Form.Group>

      <Form.Group controlId="formMessage" className='mt-4 mb-4' data-aos="fade-down">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control as="textarea" name="message" />
      </Form.Group>

      <Button variant="primary" type="submit" className='mt-4 mb-4' data-aos="fade-down">
        Envíar
      </Button>
    </Form>
  );
};
