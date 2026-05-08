"use client";

export default function Courses() {
  return (
    <section id="courses">
      <div className="section-header">
        <div className="section-overline">What We Offer</div>
        <h2 className="section-title">Our Courses</h2>
        <p className="section-sub">Industry-relevant courses designed for real career growth — from beginners to professionals.</p>
        <div className="gold-rule"></div>
      </div>
      <div className="courses-grid">
        <div className="course-card"><div className="course-icon">🌐</div><div className="course-name">Web Design</div><div className="course-desc">HTML, CSS, responsive modern UI design</div><span className="course-pill">Beginner</span></div>
        <div className="course-card"><div className="course-icon">💻</div><div className="course-name">Web Development</div><div className="course-desc">JavaScript, React, backend & live projects</div><span className="course-pill">Intermediate</span></div>
        <div className="course-card"><div className="course-icon">📊</div><div className="course-name">Data Analyst</div><div className="course-desc">Python, Excel, visualization & reporting</div><span className="course-pill">Career</span></div>
        <div className="course-card"><div className="course-icon">🧾</div><div className="course-name">Tally / ERP with GST</div><div className="course-desc">Accounting, GST filing, billing & inventory</div><span className="course-pill">Job Ready</span></div>
        <div className="course-card"><div className="course-icon">🏗️</div><div className="course-name">Full Stack Dev</div><div className="course-desc">MERN stack, APIs, deployment & DevOps</div><span className="course-pill">Advanced</span></div>
        <div className="course-card"><div className="course-icon">🎨</div><div className="course-name">UI / UX Design</div><div className="course-desc">Figma, wireframes, user research & testing</div><span className="course-pill">Creative</span></div>
        <div className="course-card"><div className="course-icon">🤖</div><div className="course-name">Artificial Intelligence</div><div className="course-desc">ML basics, AI tools, prompt engineering</div><span className="course-pill">Future Tech</span></div>
        <div className="course-card"><div className="course-icon">🧊</div><div className="course-name">3D Designing</div><div className="course-desc">Blender, 3D modeling, rendering & animation</div><span className="course-pill">Creative</span></div>
        <div className="course-card"><div className="course-icon">💰</div><div className="course-name">Accounting Professional</div><div className="course-desc">Financial accounting, tax & audit basics</div><span className="course-pill">Finance</span></div>
        <div className="course-card"><div className="course-icon">🎬</div><div className="course-name">Graphic & Video Editing</div><div className="course-desc">Photoshop, Premiere Pro, social media</div><span className="course-pill">Creative</span></div>
        <div className="course-card"><div className="course-icon">📢</div><div className="course-name">Digital Marketing</div><div className="course-desc">SEO, Google Ads, social media campaigns</div><span className="course-pill">Marketing</span></div>
        <div className="course-card"><div className="course-icon">📐</div><div className="course-name">AutoCAD</div><div className="course-desc">2D/3D drafting, technical & architecture</div><span className="course-pill">Engineering</span></div>
        <div className="course-card"><div className="course-icon">🏛️</div><div className="course-name">Architecture</div><div className="course-desc">Building design, structural planning</div><span className="course-pill">Professional</span></div>
        <div className="course-card"><div className="course-icon">📈</div><div className="course-name">Advance Excel</div><div className="course-desc">Pivot tables, VLOOKUP, macros, dashboards</div><span className="course-pill">Office</span></div>
        <div className="course-card"><div className="course-icon">🖥️</div><div className="course-name">Basic Computer</div><div className="course-desc">MS Office, typing, internet & OS basics</div><span className="course-pill">Starter</span></div>
        <div className="course-card"><div className="course-icon">🔬</div><div className="course-name">Data Science</div><div className="course-desc">Statistics, Python, ML models & projects</div><span className="course-pill">Advanced</span></div>
      </div>
    </section>
  );
}