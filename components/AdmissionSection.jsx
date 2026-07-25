"use client";
import { useState } from "react";

export default function AdmissionSection({ triggerToast }) {
  const [formData, setFormData] = useState({ fullName: "", phone: "", email: "", age: "", course: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.course) {
      triggerToast("⚠️ Please bharein: Naam, Phone aur Course");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();

      if (result.success) {
        triggerToast("✅ Enquiry submitted! We will contact you soon.");
        setFormData({ fullName: "", phone: "", email: "", age: "", course: "", message: "" });
      } else {
        triggerToast("❌ Error: " + result.message);
      }
    } catch (error) {
      triggerToast("❌ Internet connection check karein");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="admission">
      <div className="section-header">
        <div className="section-overline">Join Us Today</div>
        <h2 className="section-title">Apply for Admission</h2>
        <p className="section-sub">Fill the form and our team will contact you within 24 hours.</p>
        <div className="gold-rule"></div>
      </div>
      <div className="admit-wrap">
        <div className="admit-header">
          <h3>Admission Enquiry Form</h3>
          <p>SRS Computer Institute, Sikar — Admission Open</p>
        </div>
        <div className="admit-body">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group"><label className="f-label">Full Name *</label><input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="f-input" placeholder="Aapka naam" /></div>
              <div className="form-group"><label className="f-label">Phone Number *</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="f-input" placeholder="+91 XXXXX XXXXX" /></div>
            </div>
            <div className="form-row">
              <div className="form-group"><label className="f-label">Email Address</label><input type="email" name="email" value={formData.email} onChange={handleChange} className="f-input" placeholder="email@example.com" /></div>
              <div className="form-group"><label className="f-label">Age</label><input type="number" name="age" value={formData.age} onChange={handleChange} className="f-input" placeholder="Your age" /></div>
            </div>
            <div className="form-row">
              <div className="form-group full"><label className="f-label">Course Interested In *</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="f-select"
                >
                  <option value="" disabled>-- Course Select Karein --</option>

                  <option value="Web Design">Web Design</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Data Analyst">Data Analyst</option>
                  <option value="Tally / ERP with GST">Tally / ERP with GST</option>
                  <option value="Full Stack Development">Full Stack Development</option>
                  <option value="UI / UX Design">UI / UX Design</option>
                  <option value="Artificial Intelligence">Artificial Intelligence</option>
                  <option value="3D Designing">3D Designing</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Video Editing">Video Editing</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="AutoCAD">AutoCAD</option>
                  <option value="Architecture">Architecture</option>
                  <option value="Advance Excel">Advance Excel</option>
                  <option value="Basic Computer">Basic Computer</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Cyber Security">Cyber Security</option>
                  <option value="CNC Design">CNC Design</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group full"><label className="f-label">Message (Optional)</label><input type="text" name="message" value={formData.message} onChange={handleChange} className="f-input" placeholder="Koi sawaal ya baat ho to yahan likhein" /></div>
            </div>
            <button type="submit" className="admit-submit" disabled={loading}>{loading ? "Submitting..." : "Submit Enquiry →"}</button>
          </form>
        </div>
      </div>
    </section>
  );
}