"use client";
import { useState, useEffect } from "react";

export default function WhatsAppFloat() {
  const [showWaBubble, setShowWaBubble] = useState(true);

  useEffect(() => {
    const waTimer = setTimeout(() => setShowWaBubble(false), 6000);
    return () => clearTimeout(waTimer);
  }, []);

  return (
    <div className="wa-float">
      <div className="wa-bubble-msg" style={{ opacity: showWaBubble ? 1 : 0, transition: 'opacity 0.5s' }}>
        💬 Koi sawaal hai? <strong>WhatsApp karein!</strong><br />Hum turant jawab denge 🙏
      </div>
      <a href="https://wa.me/919057683380?text=Namaste%20SRS%20Computer%20Institute!%20Mujhe%20admission%20ke%20baare%20mein%20jaankari%20chahiye." target="_blank" className="wa-btn" style={{ position: 'relative' }}>
        <span className="wa-icon">💬</span>
        <span>WhatsApp Us</span>
        <span className="wa-pulse"></span>
      </a>
    </div>
  );
}