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
  quote:
    "Sahi guidance aur practical direction hi students ko successful career tak pahunchati hai.",
},
 {
  name: "Munesh Jnangir",
  badge: "Teacher",
  role: "Creative Design & Multimedia Mentor",
  skills: [
    "Graphic Designing",
    "Video Editing",
    "UI/UX Design",
    "AutoCAD",
    "3D Designing",
    "Architecture Tools"
  ],
  experience: "5+ Years Creative Industry Experience",
  students: "1200+ Students Mentored",
  avatar: "/trainers/munesh.webp",
  initial: "M",
  quote:
    "Creative skills aur practical software knowledge hi students ko industry-ready banate hain.",
},
  {
  name: "Er. Naveen Kumawat",
  badge: "Teacher",
  role: "Digital Marketing & Data Technology Trainer",
  skills: [
    "Digital Marketing",
    "Advanced Excel",
    "Data Science",
    "Data Analytics",
    "Web Designing"
  ],
  experience: "4+ Years Professional Experience",
  students: "1000+ Students Certified",
  avatar: "/trainers/naveen.webp",
  initial: "N",
  quote:
    "Practical skills aur real-world projects hi students ko future-ready banate hain.",
  social: {
    linkedin: "#",
    instagram: "#",
  },
}
];

const badgeConfig = {
  Founder: {
    pill:   "bg-amber-50 text-amber-700 border-amber-200",
    stripe: "from-amber-400 to-amber-600",
    dot:    "bg-amber-400",
    label:  "🏆 Founder",
  },
  Mentor: {
    pill:   "bg-sky-50 text-sky-700 border-sky-200",
    stripe: "from-sky-400 to-blue-500",
    dot:    "bg-sky-400",
    label:  "🎯 Mentor",
  },
  Teacher: {
    pill:   "bg-emerald-50 text-emerald-700 border-emerald-200",
    stripe: "from-emerald-400 to-teal-500",
    dot:    "bg-emerald-400",
    label:  "📚 Teacher",
  },
} as const;

export default function Trainers() {
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  return (
    <section
      id="trainers"
      style={{ background: "transparent", width: "100%", clear: "both" }}
      className="py-24 relative z-10"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Header — inline styles so globals.css never overrides ── */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: "0.68rem",
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#b8922a",
              marginBottom: "0.75rem",
            }}
          >
            ── Expert Faculty ──
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              fontWeight: 700,
              color: "#1a1a1a",
              marginBottom: "0.75rem",
              lineHeight: 1.15,
            }}
          >
            Learn From Industry Experts
          </h2>
          <p
            style={{
              fontSize: "0.92rem",
              color: "#6b6b6b",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Sikar ke top professionals se practical training lijiye aur apne
            career ko next level par le jayiye.
          </p>
          <div
            style={{
              width: "50px",
              height: "2px",
              margin: "1rem auto 0",
              background:
                "linear-gradient(90deg, transparent, #b8922a, transparent)",
            }}
          />
        </div>

        {/* ── Cards grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
            alignItems: "stretch",
          }}
        >
          {team.map((trainer, index) => {
            const cfg = badgeConfig[trainer.badge];
            const hasErr = imgErrors[index];

            return (
              <article
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "#ffffff",
                  border: "1px solid rgba(184,146,42,0.12)",
                  borderRadius: "1.25rem",
                  overflow: "hidden",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 12px 40px rgba(184,146,42,0.14)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 4px 24px rgba(0,0,0,0.05)";
                }}
              >
                {/* Colour stripe */}
                <div
                  style={{
                    height: "4px",
                    flexShrink: 0,
                    background: `linear-gradient(90deg, var(--tw-gradient-from, #f59e0b), var(--tw-gradient-to, #d97706))`,
                  }}
                  className={`bg-gradient-to-r ${cfg.stripe}`}
                />

                {/* Body */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "2rem 1.75rem 1.5rem",
                    flex: 1,
                  }}
                >
                  {/* ── Avatar — strictly 80×80, nothing leaks ── */}
                  <div
                    style={{
                      position: "relative",
                      width: "80px",
                      height: "80px",
                      flexShrink: 0,
                      marginBottom: "1rem",
                    }}
                  >
                    {/* Border ring */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "50%",
                        padding: "3px",
                        background:
                          "linear-gradient(135deg,#d4a843,#b8922a)",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                          background: "#f5f0e8",
                          overflow: "hidden",
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {/* Fallback initial */}
                        <span
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "1.6rem",
                            fontWeight: 700,
                            color: "#b8922a",
                            userSelect: "none",
                            position: "absolute",
                            zIndex: 0,
                          }}
                        >
                          {trainer.initial}
                        </span>

                        {/* Real image — covers initial when loaded */}
                        {!hasErr && (
                          <Image
                            src={trainer.avatar}
                            alt={trainer.name}
                            fill
                            style={{ objectFit: "cover", zIndex: 1, borderRadius: "50%" }}
                            sizes="80px"
                            onError={() =>
                              setImgErrors((p) => ({ ...p, [index]: true }))
                            }
                          />
                        )}
                      </div>
                    </div>

                    {/* Status dot */}
                    <span
                      className={cfg.dot}
                      style={{
                        position: "absolute",
                        bottom: "2px",
                        right: "2px",
                        width: "14px",
                        height: "14px",
                        borderRadius: "50%",
                        border: "2px solid white",
                        zIndex: 2,
                      }}
                    />
                  </div>

                  {/* Badge */}
                  <span
                    className={cfg.pill}
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      padding: "3px 12px",
                      borderRadius: "999px",
                      border: "1px solid",
                      marginBottom: "0.6rem",
                      display: "inline-block",
                    }}
                  >
                    {cfg.label}
                  </span>

                  {/* Name */}
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#1a1a1a",
                      marginBottom: "0.25rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {trainer.name}
                  </h3>

                  {/* Role */}
                  <p
                    style={{
                      fontSize: "0.78rem",
                      color: "#6b6b6b",
                      fontWeight: 500,
                      marginBottom: "0.75rem",
                      lineHeight: 1.4,
                    }}
                  >
                    {trainer.role}
                  </p>

                  {/* Experience + Students */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      gap: "6px",
                      marginBottom: "1.2rem",
                    }}
                  >
                    {[trainer.experience, trainer.students].map((text, i) => (
                      <span
                        key={i}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "5px",
                          background: "#f9f9f9",
                          border: "1px solid #e5e5e5",
                          borderRadius: "6px",
                          padding: "3px 10px",
                          fontSize: "0.7rem",
                          color: "#6b6b6b",
                          fontFamily: "monospace",
                        }}
                      >
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: i === 0 ? "#b8922a" : "#a0a0a0",
                            flexShrink: 0,
                          }}
                        />
                        {text}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div
                    style={{
                      width: "100%",
                      height: "1px",
                      background: "#f0f0f0",
                      marginBottom: "1rem",
                    }}
                  />

                  {/* Core Expertise */}
                  <p
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "#a0a0a0",
                      marginBottom: "0.6rem",
                    }}
                  >
                    Core Expertise
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      gap: "6px",
                      marginBottom: "1rem",
                    }}
                  >
                    {trainer.skills.map((skill, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          color: "#444",
                          background: "#fafafa",
                          border: "1px solid #e8e8e8",
                          borderRadius: "999px",
                          padding: "3px 10px",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}