"use client";
import { useState } from "react";
import Head from "next/head";

export default function AdminPage() {
  const [formData, setFormData] = useState({
    certId: "",
    studentName: "",
    course: "",
    issueDate: "",
    grade: "",
    password: "" // Security verification ke liye
  });
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      // Secure API par data bhejna
      const res = await fetch("/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setMessage({ text: result.message, type: "success" });
        // Form clear karna (password chhod kar taki baar-baar na dalna pade)
        setFormData({ ...formData, certId: "", studentName: "", course: "", issueDate: "", grade: "" });
      } else {
        setMessage({ text: result.message, type: "error" });
      }
    } catch (error) {
      setMessage({ text: "Server se connect nahi ho paya. Internet check karein.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--charcoal)", padding: "50px 20px", fontFamily: "'DM Sans', sans-serif" }}>
      <Head>
        <title>Admin Panel - SRS Institute</title>
      </Head>

      <div style={{ maxWidth: "600px", margin: "0 auto", background: "white", padding: "2.5rem", borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.5)" }}>
        
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem" }}>🔒</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", color: "var(--charcoal)", marginBottom: "10px" }}>Secure Admin Panel</h1>
          <p style={{ color: "var(--muted)", fontSize: "0.85rem" }}>Add New Student Certificates to Database</p>
        </div>

        {message.text && (
          <div style={{ padding: "15px", marginBottom: "20px", borderRadius: "8px", textAlign: "center", fontWeight: "600", fontSize: "0.9rem", background: message.type === "success" ? "#dcfce7" : "#fee2e2", color: message.type === "success" ? "#16a34a" : "#dc2626" }}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          
          <div>
            <label style={labelStyle}>Certificate ID *</label>
            <input required type="text" name="certId" value={formData.certId} onChange={handleChange} placeholder="e.g. SRS2026001" style={inputStyle} />
          </div>

          <div>
            <label style={labelStyle}>Student Full Name *</label>
            <input required type="text" name="studentName" value={formData.studentName} onChange={handleChange} placeholder="Rahul Sharma" style={inputStyle} />
          </div>

          <div>
            <label style={labelStyle}>Course Name *</label>
            <input required type="text" name="course" value={formData.course} onChange={handleChange} placeholder="Web Development" style={inputStyle} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
            <div>
              <label style={labelStyle}>Issue Date *</label>
              <input required type="text" name="issueDate" value={formData.issueDate} onChange={handleChange} placeholder="15 May 2026" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Grade *</label>
              <input required type="text" name="grade" value={formData.grade} onChange={handleChange} placeholder="A+" style={inputStyle} />
            </div>
          </div>

          <hr style={{ borderTop: "1px dashed #ccc", margin: "10px 0" }} />

          <div style={{ background: "#f8f9fa", padding: "15px", borderRadius: "10px", border: "1px solid #e9ecef" }}>
            <label style={{ ...labelStyle, color: "#dc2626" }}>Admin Verification Password *</label>
            <input required type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter secret password" style={{ ...inputStyle, borderColor: "#ffcdd2" }} />
            <p style={{ fontSize: "0.7rem", color: "#6b6b6b", marginTop: "5px" }}>This prevents unauthorized data entry.</p>
          </div>

          <button type="submit" disabled={loading} style={{ background: "linear-gradient(135deg, var(--gold), var(--gold-light))", color: "white", padding: "15px", border: "none", borderRadius: "8px", fontWeight: "700", fontSize: "1rem", cursor: loading ? "not-allowed" : "pointer", marginTop: "10px", textTransform: "uppercase", letterSpacing: "1px" }}>
            {loading ? "Saving to Database..." : "🔒 Save Certificate"}
          </button>
        </form>
      </div>
    </div>
  );
}

// Inline styles for cleaner code
const labelStyle = { display: "block", fontSize: "0.75rem", fontWeight: "700", color: "var(--charcoal)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" };
const inputStyle = { width: "100%", padding: "12px 15px", borderRadius: "8px", border: "1.5px solid var(--border-light)", fontSize: "0.95rem", outline: "none", fontFamily: "'DM Sans', sans-serif" };