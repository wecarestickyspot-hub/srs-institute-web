"use client";

import { useState } from "react";

type Course = {
  icon: string;
  name: string;
  desc: string;
  pill: string;
  pillColor: { bg: string; text: string; border: string };
  duration: string;
  level: 1 | 2 | 3; // 1=beginner 2=intermediate 3=advanced
};

const pillColors: Record<string, { bg: string; text: string; border: string }> = {
  Beginner:    { bg: "#f0fdf4", text: "#15803d", border: "#bbf7d0" },
  Intermediate:{ bg: "#eff6ff", text: "#1d4ed8", border: "#bfdbfe" },
  Career:      { bg: "#fdf4ff", text: "#7e22ce", border: "#e9d5ff" },
  "Job Ready": { bg: "#fff7ed", text: "#c2410c", border: "#fed7aa" },
  Advanced:    { bg: "#fef2f2", text: "#b91c1c", border: "#fecaca" },
  Creative:    { bg: "#fdf4ff", text: "#7e22ce", border: "#e9d5ff" },
  "Future Tech":{ bg: "#f0f9ff", text: "#0369a1", border: "#bae6fd" },
  Finance:     { bg: "#f0fdf4", text: "#15803d", border: "#bbf7d0" },
  Marketing:   { bg: "#fff7ed", text: "#c2410c", border: "#fed7aa" },
  Engineering: { bg: "#f1f5f9", text: "#334155", border: "#cbd5e1" },
  Professional:{ bg: "#fefce8", text: "#854d0e", border: "#fde68a" },
  Office:      { bg: "#eff6ff", text: "#1d4ed8", border: "#bfdbfe" },
  Starter:     { bg: "#f0fdf4", text: "#15803d", border: "#bbf7d0" },
};

const courses: Course[] = [
  { icon:"🌐", name:"Web Design",            desc:"HTML, CSS, responsive modern UI design",              pill:"Beginner",     pillColor:pillColors["Beginner"],     duration:"2 Months",  level:1 },
  { icon:"💻", name:"Web Development",        desc:"JavaScript, React, backend & live projects",          pill:"Intermediate", pillColor:pillColors["Intermediate"], duration:"4 Months",  level:2 },
  { icon:"📊", name:"Data Analyst",           desc:"Python, Excel, visualization & reporting",            pill:"Career",       pillColor:pillColors["Career"],       duration:"3 Months",  level:2 },
  { icon:"🧾", name:"Tally / ERP with GST",   desc:"Accounting, GST filing, billing & inventory",        pill:"Job Ready",    pillColor:pillColors["Job Ready"],    duration:"2 Months",  level:1 },
  { icon:"🏗️", name:"Full Stack Dev",         desc:"MERN stack, APIs, deployment & DevOps",              pill:"Advanced",     pillColor:pillColors["Advanced"],     duration:"6 Months",  level:3 },
  { icon:"🎨", name:"UI / UX Design",         desc:"Figma, wireframes, user research & testing",         pill:"Creative",     pillColor:pillColors["Creative"],     duration:"3 Months",  level:2 },
  { icon:"🤖", name:"Artificial Intelligence",desc:"ML basics, AI tools, prompt engineering",            pill:"Future Tech",  pillColor:pillColors["Future Tech"],  duration:"4 Months",  level:3 },
  { icon:"🧊", name:"3D Designing",           desc:"Blender, 3D modeling, rendering & animation",        pill:"Creative",     pillColor:pillColors["Creative"],     duration:"3 Months",  level:2 },
  { icon:"💰", name:"Accounting Professional",desc:"Financial accounting, tax & audit basics",            pill:"Finance",      pillColor:pillColors["Finance"],      duration:"3 Months",  level:2 },
  { icon:"🎬", name:"Graphic & Video Editing",desc:"Photoshop, Premiere Pro, social media content",      pill:"Creative",     pillColor:pillColors["Creative"],     duration:"2 Months",  level:1 },
  { icon:"📢", name:"Digital Marketing",      desc:"SEO, Google Ads, social media campaigns",            pill:"Marketing",    pillColor:pillColors["Marketing"],    duration:"3 Months",  level:2 },
  { icon:"📐", name:"AutoCAD",                desc:"2D/3D drafting, technical & architecture plans",     pill:"Engineering",  pillColor:pillColors["Engineering"],  duration:"2 Months",  level:2 },
  { icon:"🏛️", name:"Architecture",           desc:"Building design, structural planning",               pill:"Professional", pillColor:pillColors["Professional"], duration:"4 Months",  level:2 },
  { icon:"📈", name:"Advance Excel",          desc:"Pivot tables, VLOOKUP, macros, dashboards",          pill:"Office",       pillColor:pillColors["Office"],       duration:"1.5 Months",level:1 },
  { icon:"🖥️", name:"Basic Computer",         desc:"MS Office, typing, internet & OS basics",            pill:"Starter",      pillColor:pillColors["Starter"],      duration:"1 Month",   level:1 },
  { icon:"🔬", name:"Data Science",           desc:"Statistics, Python, ML models & projects",           pill:"Advanced",     pillColor:pillColors["Advanced"],     duration:"5 Months",  level:3 },
  { icon:"🛡️", name:"Cyber Security",         desc:"Ethical Hacking, Network Security & Pen Testing",    pill:"Advanced",     pillColor:pillColors["Advanced"],     duration:"4 Months",  level:3 },
  { icon:"⚙️", name:"CNC Design",             desc:"AutoCAD, CAM Software, G-Code & 3D Modeling",       pill:"Intermediate", pillColor:pillColors["Intermediate"], duration:"3 Months",  level:2 },
];

const filters = ["All", "Beginner", "Intermediate", "Advanced", "Creative", "Job Ready", "Future Tech"];

const levelBar = (level: 1|2|3) => (
  <div style={{ display:"flex", gap:"3px" }}>
    {[1,2,3].map(n => (
      <div key={n} style={{
        width:"18px", height:"4px", borderRadius:"2px",
        background: n <= level ? "#b8922a" : "#e8e8e8",
        transition:"background 0.2s",
      }} />
    ))}
  </div>
);

export default function Courses() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hovered, setHovered] = useState<number|null>(null);

  const filtered = activeFilter === "All"
    ? courses
    : courses.filter(c => c.pill === activeFilter);

  return (
    <section
      id="courses"
      style={{ background: "#ffffff", position:"relative", zIndex:1, padding:"96px 6%" }}
    >
      <div style={{ maxWidth:"1100px", margin:"0 auto" }}>

        {/* ── Header ── */}
        <div style={{ textAlign:"center", marginBottom:"3rem" }}>
          <span style={{
            display:"inline-block", fontSize:"0.68rem", fontWeight:600,
            letterSpacing:"3px", textTransform:"uppercase", color:"#b8922a", marginBottom:"0.75rem",
          }}>── What We Offer ──</span>
          <h2 style={{
            fontFamily:"'Playfair Display',Georgia,serif",
            fontSize:"clamp(1.8rem,3vw,2.8rem)", fontWeight:700,
            color:"#1a1a1a", marginBottom:"0.75rem", lineHeight:1.15,
          }}>Our Courses</h2>
          <p style={{ fontSize:"0.92rem", color:"#6b6b6b", maxWidth:"500px", margin:"0 auto", lineHeight:1.7 }}>
            Industry-relevant courses designed for real career growth — from beginners to professionals.
          </p>
          <div style={{ width:"50px", height:"2px", margin:"1rem auto 0",
            background:"linear-gradient(90deg,transparent,#b8922a,transparent)" }} />
        </div>

        {/* ── Stats row ── */}
        <div style={{
          display:"flex", justifyContent:"center", gap:"2.5rem", flexWrap:"wrap",
          marginBottom:"2.5rem",
        }}>
          {[
            { num:"18+", label:"Courses Available" },
            { num:"1000+", label:"Students Enrolled" },
            { num:"100%", label:"Practical Training" },
            { num:"Certificate", label:"For Every Course" },
          ].map((s,i) => (
            <div key={i} style={{ textAlign:"center" }}>
              <div style={{
                fontFamily:"'Playfair Display',serif", fontSize:"1.4rem",
                fontWeight:700, color:"#b8922a", lineHeight:1,
              }}>{s.num}</div>
              <div style={{ fontSize:"0.68rem", color:"#a0a0a0", letterSpacing:"1px",
                textTransform:"uppercase", marginTop:"3px" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── Filter pills ── */}
        <div style={{
          display:"flex", flexWrap:"wrap", gap:"8px", justifyContent:"center", marginBottom:"2.5rem",
        }}>
          {filters.map(f => {
            const sel = f === activeFilter;
            return (
              <button key={f} onClick={() => setActiveFilter(f)} style={{
                padding:"7px 18px", borderRadius:"999px", cursor:"pointer",
                fontSize:"0.75rem", fontWeight:600, letterSpacing:"0.5px",
                border: sel ? "1.5px solid #b8922a" : "1.5px solid #e8e8e8",
                background: sel ? "linear-gradient(135deg,#b8922a,#d4a843)" : "#fff",
                color: sel ? "#fff" : "#6b6b6b",
                boxShadow: sel ? "0 3px 12px rgba(184,146,42,0.25)" : "none",
                transition:"all 0.25s", outline:"none",
              }}>
                {f}
              </button>
            );
          })}
        </div>

        {/* ── Course count ── */}
        <p style={{ textAlign:"center", fontSize:"0.78rem", color:"#a0a0a0", marginBottom:"2rem" }}>
          Showing <strong style={{ color:"#b8922a" }}>{filtered.length}</strong> courses
          {activeFilter !== "All" ? ` in "${activeFilter}"` : ""}
        </p>

        {/* ── Grid ── */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fill,minmax(210px,1fr))",
          gap:"1.2rem",
        }}>
          {filtered.map((c, i) => {
            const isHov = hovered === i;
            return (
              <div
                key={c.name}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: isHov ? "#fff" : "#fdfaf4",
                  border: isHov
                    ? "1px solid rgba(184,146,42,0.3)"
                    : "1px solid rgba(184,146,42,0.1)",
                  borderRadius:"16px",
                  padding:"1.5rem 1.3rem",
                  display:"flex", flexDirection:"column",
                  position:"relative", overflow:"hidden",
                  cursor:"default",
                  transform: isHov ? "translateY(-5px)" : "translateY(0)",
                  boxShadow: isHov
                    ? "0 12px 36px rgba(184,146,42,0.13)"
                    : "0 2px 8px rgba(0,0,0,0.03)",
                  transition:"all 0.28s ease",
                }}
              >
                {/* Gold bottom line on hover */}
                <div style={{
                  position:"absolute", bottom:0, left:0, right:0, height:"2.5px",
                  background:"linear-gradient(90deg,#b8922a,#d4a843)",
                  transform: isHov ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin:"left",
                  transition:"transform 0.3s ease",
                }} />

                {/* Icon */}
                <div style={{
                  width:"48px", height:"48px", borderRadius:"12px",
                  background: isHov ? "rgba(184,146,42,0.1)" : "#fff",
                  border:"1px solid rgba(184,146,42,0.12)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontSize:"1.5rem", marginBottom:"1rem",
                  transition:"background 0.25s",
                }}>{c.icon}</div>

                {/* Name */}
                <div style={{
                  fontFamily:"'Playfair Display',serif",
                  fontSize:"0.95rem", fontWeight:700, color:"#1a1a1a",
                  marginBottom:"6px", lineHeight:1.3,
                }}>{c.name}</div>

                {/* Desc */}
                <div style={{
                  fontSize:"0.75rem", color:"#6b6b6b",
                  lineHeight:1.6, marginBottom:"1rem", flex:1,
                }}>{c.desc}</div>

                {/* Bottom row */}
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:"6px" }}>
                  {/* Pill */}
                  <span style={{
                    fontSize:"0.6rem", fontWeight:700, letterSpacing:"1px",
                    textTransform:"uppercase", padding:"3px 9px", borderRadius:"999px",
                    background: c.pillColor.bg, color: c.pillColor.text,
                    border:`1px solid ${c.pillColor.border}`,
                    whiteSpace:"nowrap",
                  }}>{c.pill}</span>

                  {/* Duration */}
                  <span style={{
                    fontSize:"0.65rem", color:"#a0a0a0", fontFamily:"monospace",
                    whiteSpace:"nowrap",
                  }}>⏱ {c.duration}</span>
                </div>

                {/* Level bar */}
                <div style={{ marginTop:"10px" }}>
                  {levelBar(c.level)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}