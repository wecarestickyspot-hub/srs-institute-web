"use client";
import { useState } from "react";
import Image from "next/image"; // 👈 Yeh import karna bohot zaroori tha

// Links ka data alag nikal liya taaki code clean rahe
const navItems = [
  { label: "Courses", href: "#courses" },
  { label: "Certificate", href: "#certificate" },
  { label: "About", href: "#why-us" },
  { label: "Trainer", href: "#trainers" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  // Mobile menu kholne/band karne ke liye State
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <a href="#" className="nav-logo-wrap">
        <div className="nav-logo-icon" style={{ background: 'transparent', padding: 0 }}>
          <Image src="/logo.jpg" alt="SRS Logo" width={45} height={45} style={{ borderRadius: '50%' }} />
        </div>
        <div className="nav-logo-text">
          <div className="nav-logo-title">SRS Computer Institute</div>
          <div className="nav-logo-sub">Sikar, Rajasthan</div>
        </div>
      </a>

      {/* Agar isMenuOpen true hai, toh 'active' class add ho jayegi jisse CSS isko mobile par show karegi */}
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        {navItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              onClick={() => setIsMenuOpen(false)} // Link pe click karne par menu band ho jayega
            >
              {item.label}
            </a>
          </li>
        ))}
        {/* Enroll Now button thoda alag hai isliye alag se rakha */}
        <li>
          <a href="#admission" className="nav-btn" onClick={() => setIsMenuOpen(false)}>
            Enroll Now
          </a>
        </li>
      </ul>

      {/* Menu open/close karne wala button */}
      <button
        className="nav-mobile-btn"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✖" : "☰"} {/* Open hone par Cross (X) dikhega, warna Hamburger (☰) */}
      </button>
    </nav>
  );
}