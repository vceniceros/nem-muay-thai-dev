import React from "react";
import { Button } from "react-bootstrap";
import whatsappLogo from "../assets/img/whatsapp-logo.png";

function WhatsappButton() {
  const handleWhatsAppClick = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=5491140897538",
      "_blank"
    );
  };

  return (
    <Button
      variant="success"
      onClick={handleWhatsAppClick}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "1000",
      }}
      target="_blank"
    >
      <img src={whatsappLogo} alt="whatsapp logo" height={"40"} width={"40"} />
    </Button>
  );
}

export default WhatsappButton;
