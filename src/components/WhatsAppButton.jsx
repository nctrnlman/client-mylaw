// WhatsAppButton.jsx

import React, { useState } from "react";
import logo from "../assets/whatsapp.png";
// import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const redirectToWhatsApp = () => {
    const phoneNumber = "1234567890"; // Ganti dengan nomor WhatsApp Anda
    const message = "Hello!"; // Ganti dengan pesan default Anda

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.location.href = whatsappLink;
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    redirectToWhatsApp();
  };

  return (
    <div
      className={`fixed bottom-5 right-5 p-3 rounded-full cursor-pointer transition-transform duration-1000 transform ${
        isHovered ? "bg-white scale-105 ease-in-out" : "bg-white ease-in-out"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="flex items-center">
        <img src={logo} alt="WhatsApp Icon" className="w-6 h-6 " />
        {isHovered && (
          <span className="text-primary ml-3">Chat with us on WhatsApp</span>
        )}
      </div>
    </div>
  );
};

export default WhatsAppButton;
