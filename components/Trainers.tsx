"use client";

import Image from "next/image";
import { useState } from "react";

type Trainer = {
  name: string;
  badge: "Founder" | "Mentor" | "Teacher";
  role: string;
  skills: string[];
  experience: string;
  students: string;
  avatar: string;
  initial: string;
  quote: string;
  social?: { linkedin?: string; instagram?: string };
};

const team: Trainer[] = [
  {
    name: "Nitesh Choudhary",
    badge: "Founder",
    role: "Founder & Management Head",
    skills: ["Student Counselling", "Management", "Career Guidance", "Team Leadership"],
    experience: "6+ Years Management Experience",
    students: "2000+ Guided",
    avatar: "/trainers/nitesh.webp",
    initial: "N",
    quote: "Sahi guidance aur practical direction hi students ko successful career tak pahunchati hai.",
  },
  {
    name: "Munesh Jangir",
    badge: "Teacher",
    role: "Creative Design & Multimedia Mentor",
    skills: ["Graphic Designing", "Video Editing", "UI/UX Design", "AutoCAD", "3D Designing", "Architecture Tools"],
    experience: "8+ Years Creative Experience",
    students: "1200+ Mentored",
    avatar: "/trainers/munesh.webp",
    initial: "M",
    quote: "Creative skills aur practical software knowledge hi students ko industry-ready banate hain.",
  },
  {
    name: "Er. Naveen Kumawat",
    badge: "Teacher",
    role: "Digital Marketing & Data Technology Trainer",
    skills: ["Digital Marketing", "Advanced Excel", "Data Science", "Data Analytics", "Web Designing"],
    experience: "4+ Years Professional Experience",
    students: "1000+ Certified",
    avatar: "/trainers/naveen.webp",
    initial: "N",
    quote: "Practical skills aur real-world projects hi students ko future-ready banate hain.",
    social: { linkedin: "#", instagram: "#" },
  },
  {
    name: "Vikas Choudhary",
    badge: "Mentor",
    role: "Junior Graphic Designer & Trainer",
    skills: ["Adobe Photoshop", "CorelDRAW", "Canva Pro", "Social Media Creatives", "Basic UI/UX"],
    experience: "2+ Years Design Experience",
    students: "500+ Mentored",
    avatar: "/trainers/vikas.webp",
    initial: "V",
    quote: "Design sirf visuals nahi, ek communication hai. Practical practice se hi creativity nikhar kar aati hai.",
  },
  {
    name: "Sunita Choudhary",
    badge: "Mentor",
    role: "Junior Graphic Designer & Trainer",
    skills: ["Adobe Photoshop", "CorelDRAW", "Canva Pro", "Social Media Creatives", "Basic UI/UX"],
    experience: "2+ Years Design Experience",
    students: "500+ Mentored",
    avatar: "/trainers/vikas.webp",
    initial: "V",
    quote: "Design sirf visuals nahi, ek communication hai. Practical practice se hi creativity nikhar kar aati hai.",
  },
];

const badgeCfg = {
  Founder: { bg: "#fffbeb", color: "#b45309", border: "#fde68a", label: "🏆 Founder",  dot: "#f59e0b" },
  Mentor:  { bg: "#eff6ff", color: "#1d4ed8", border: "#bfdbfe", label: "🎯 Mentor",   dot: "#3b82f6" },
  Teacher: { bg: "#f0fdf4", color: "#15803d", border: "#bbf7d0", label: "📚 Teacher",  dot: "#22c55e" },
} as const;

const stripes = {
  Founder: "linear-gradient(90deg,#f59e0b,#d97706)",
  Mentor:  "linear-gradient(90deg,#38bdf8,#2563eb)",
  Teacher: "linear-gradient(90deg,#34d399,#0d9488)",
};

export default function Trainers() {
  const [active, setActive]     = useState(0);
  const [imgErr, setImgErr]     = useState<Record<number, boolean>>({});
  const trainer = team[active];
  const cfg     = badgeCfg[trainer.badge];

  return (
    <section
      id="trainers"
      style={{ background: "transparent", width: "100%", clear: "both", padding: "96px 0" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span style={{
            display: "inline-block", fontSize: "0.68rem", fontWeight: 600,
            letterSpacing: "3px", textTransform: "uppercase", color: "#b8922a", marginBottom: "0.75rem",
          }}>
            ── Expert Faculty ──
          </span>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 700,
            color: "#1a1a1a", marginBottom: "0.75rem", lineHeight: 1.15,
          }}>
            Learn From Industry Experts
          </h2>
          <p style={{ fontSize: "0.9rem", color: "#6b6b6b", maxWidth: "460px", margin: "0 auto", lineHeight: 1.7 }}>
            Sikar ke top professionals se practical training lijiye aur apne career ko next level par le jayiye.
          </p>
          <div style={{ width: "50px", height: "2px", margin: "1rem auto 0",
            background: "linear-gradient(90deg,transparent,#b8922a,transparent)" }} />
        </div>

        {/* ── Spotlight layout ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 340px",
          gap: "2rem",
          alignItems: "start",
        }} className="trainers-grid-resp">

          {/* LEFT — big spotlight card */}
          <div style={{
            background: "#fff",
            border: "1px solid rgba(184,146,42,0.14)",
            borderRadius: "1.5rem",
            overflow: "hidden",
            boxShadow: "0 8px 40px rgba(184,146,42,0.10)",
            transition: "all 0.4s ease",
          }}>
            {/* Colour stripe */}
            <div style={{ height: "5px", background: stripes[trainer.badge] }} />

            <div style={{ padding: "2.5rem" }}>
              {/* Top row */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem", marginBottom: "2rem" }}>

                {/* Avatar */}
                <div style={{ position: "relative", width: "100px", height: "100px", flexShrink: 0 }}>
                  <div style={{
                    position: "absolute", inset: 0, borderRadius: "50%", padding: "3px",
                    background: "linear-gradient(135deg,#d4a843,#b8922a)",
                  }}>
                    <div style={{
                      width: "100%", height: "100%", borderRadius: "50%",
                      background: "#f5f0e8", overflow: "hidden",
                      position: "relative", display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <span style={{
                        fontFamily: "'Playfair Display',serif", fontSize: "2rem",
                        fontWeight: 700, color: "#b8922a", position: "absolute", zIndex: 0,
                      }}>{trainer.initial}</span>
                      {!imgErr[active] && (
                        <Image src={trainer.avatar} alt={trainer.name} fill
                          style={{ objectFit: "cover", zIndex: 1, borderRadius: "50%" }}
                          sizes="100px"
                          onError={() => setImgErr(p => ({ ...p, [active]: true }))}
                        />
                      )}
                    </div>
                  </div>
                  {/* Status dot */}
                  <span style={{
                    position: "absolute", bottom: "3px", right: "3px",
                    width: "16px", height: "16px", borderRadius: "50%",
                    background: cfg.dot, border: "2.5px solid white", zIndex: 2,
                  }} />
                </div>

                {/* Name + meta */}
                <div style={{ flex: 1 }}>
                  {/* Badge */}
                  <span style={{
                    display: "inline-block", fontSize: "0.62rem", fontWeight: 700,
                    letterSpacing: "1.5px", textTransform: "uppercase",
                    padding: "3px 12px", borderRadius: "999px",
                    background: cfg.bg, color: cfg.color,
                    border: `1px solid ${cfg.border}`, marginBottom: "0.5rem",
                  }}>{cfg.label}</span>

                  <h3 style={{
                    fontFamily: "'Playfair Display',serif", fontSize: "1.5rem",
                    fontWeight: 700, color: "#1a1a1a", lineHeight: 1.2, marginBottom: "0.3rem",
                  }}>{trainer.name}</h3>

                  <p style={{ fontSize: "0.85rem", color: "#6b6b6b", fontWeight: 500, marginBottom: "0.75rem" }}>
                    {trainer.role}
                  </p>

                  {/* Exp + students pills */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {[trainer.experience, trainer.students].map((t, i) => (
                      <span key={i} style={{
                        display: "inline-flex", alignItems: "center", gap: "5px",
                        background: "#f9f9f9", border: "1px solid #ebebeb",
                        borderRadius: "6px", padding: "4px 12px",
                        fontSize: "0.72rem", color: "#555", fontFamily: "monospace",
                      }}>
                        <span style={{
                          width: "6px", height: "6px", borderRadius: "50%",
                          background: i === 0 ? "#b8922a" : "#a0a0a0", flexShrink: 0,
                        }} />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div style={{
                background: "#fdfaf4", border: "1px solid rgba(184,146,42,0.12)",
                borderLeft: "3px solid #b8922a",
                borderRadius: "0 10px 10px 0", padding: "1rem 1.25rem", marginBottom: "2rem",
              }}>
                <p style={{ fontSize: "0.88rem", color: "#6b6b6b", fontStyle: "italic", lineHeight: 1.7 }}>
                  <span style={{ color: "#d4a843", fontSize: "1.3rem", fontFamily: "serif" }}>"</span>
                  {trainer.quote}
                  <span style={{ color: "#d4a843", fontSize: "1.3rem", fontFamily: "serif" }}>"</span>
                </p>
              </div>

              {/* Core Expertise */}
              <div>
                <p style={{
                  fontSize: "0.65rem", fontWeight: 700, letterSpacing: "2px",
                  textTransform: "uppercase", color: "#b8922a", marginBottom: "0.75rem",
                }}>Core Expertise</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {trainer.skills.map((s, i) => (
                    <span key={i} style={{
                      fontSize: "0.78rem", fontWeight: 600, color: "#444",
                      background: "#fafafa", border: "1px solid #e8e8e8",
                      borderRadius: "999px", padding: "5px 14px",
                      transition: "all 0.2s",
                    }}>{s}</span>
                  ))}
                </div>
              </div>

              
            </div>
          </div>

          {/* RIGHT — selector list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{
              fontSize: "0.68rem", fontWeight: 700, letterSpacing: "2px",
              textTransform: "uppercase", color: "#a0a0a0", marginBottom: "0.25rem",
            }}>Our Team</p>

            {team.map((t, i) => {
              const c   = badgeCfg[t.badge];
              const sel = i === active;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    display: "flex", alignItems: "center", gap: "12px",
                    padding: "14px 16px", borderRadius: "14px", cursor: "pointer",
                    border: sel ? `1.5px solid rgba(184,146,42,0.35)` : "1.5px solid transparent",
                    background: sel ? "#fff" : "rgba(255,255,255,0.5)",
                    boxShadow: sel ? "0 4px 20px rgba(184,146,42,0.1)" : "none",
                    textAlign: "left", width: "100%",
                    transition: "all 0.25s",
                    outline: "none",
                  }}
                >
                  {/* Mini avatar */}
                  <div style={{
                    position: "relative", width: "46px", height: "46px", flexShrink: 0,
                  }}>
                    <div style={{
                      position: "absolute", inset: 0, borderRadius: "50%", padding: "2px",
                      background: sel
                        ? "linear-gradient(135deg,#d4a843,#b8922a)"
                        : "linear-gradient(135deg,#e0e0e0,#c8c8c8)",
                    }}>
                      <div style={{
                        width: "100%", height: "100%", borderRadius: "50%",
                        background: "#f5f0e8", overflow: "hidden", position: "relative",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <span style={{
                          fontFamily: "'Playfair Display',serif", fontSize: "1rem",
                          fontWeight: 700, color: sel ? "#b8922a" : "#aaa",
                          position: "absolute", zIndex: 0,
                        }}>{t.initial}</span>
                        {!imgErr[i] && (
                          <Image src={t.avatar} alt={t.name} fill
                            style={{ objectFit: "cover", zIndex: 1, borderRadius: "50%" }}
                            sizes="46px"
                            onError={() => setImgErr(p => ({ ...p, [i]: true }))}
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontSize: "0.85rem", fontWeight: 700,
                      color: sel ? "#1a1a1a" : "#555",
                      fontFamily: "'Playfair Display',serif",
                      whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                    }}>{t.name}</div>
                    <div style={{ fontSize: "0.7rem", color: "#a0a0a0", marginTop: "2px",
                      whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                    }}>{t.role}</div>
                  </div>

                  {/* Badge dot */}
                  <span style={{
                    width: "8px", height: "8px", borderRadius: "50%",
                    background: sel ? c.dot : "#e0e0e0", flexShrink: 0,
                  }} />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .trainers-grid-resp {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}