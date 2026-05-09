"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (data.success) {
      // Login success! Ab dashboard par bhej do
      router.push("/admin");
      router.refresh(); // Taki middleware naya cookie dekh le
    } else {
      setError(data.message);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f9f9f9' }}>
      <form onSubmit={handleLogin} style={{ background: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ color: 'var(--charcoal)', marginBottom: '0.5rem' }}>Admin Login</h2>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>SRS Institute Portal</p>
        </div>

        {error && <div style={{ background: '#fee2e2', color: '#dc2626', padding: '0.75rem', borderRadius: '5px', marginBottom: '1rem', fontSize: '0.9rem', textAlign: 'center' }}>{error}</div>}

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '5px' }} />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '5px' }} />
        </div>

        <button type="submit" style={{ width: '100%', padding: '0.75rem', backgroundColor: 'var(--gold)', color: 'var(--charcoal)', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>
          Login
        </button>
      </form>
    </div>
  );
}