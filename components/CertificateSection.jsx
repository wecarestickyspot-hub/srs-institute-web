"use client";
import { useState } from "react";

export default function CertificateSection({ triggerToast }) {
  const [certId, setCertId] = useState("");
  const [verificationResult, setVerificationResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleVerifyCert = async () => {
    if (!certId.trim()) {
      triggerToast("Please enter a Certificate ID");
      return;
    }
    
    setIsLoading(true);
    setVerificationResult(null);

    try {
      const res = await fetch(`/api/verify?id=${certId}`);
      const data = await res.json();
      
      if (data.found) {
        setVerificationResult({ found: true, data: data.data });
      } else {
        setVerificationResult({ found: false });
      }
    } catch (error) {
      triggerToast("Server connection error!");
      setVerificationResult({ found: false });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCertKeyPress = (e) => {
    if (e.key === 'Enter') handleVerifyCert();
  };

  return (
    <section id="certificate">
      <div className="section-header">
        <div className="section-overline">Verify Authenticity</div>
        <h2 className="section-title">Certificate Verification</h2>
        <p className="section-sub">Enter your Certificate ID to verify your SRS Institute certificate instantly and securely.</p>
        <div className="gold-rule"></div>
      </div>
      <div className="cert-wrapper">
        <div className="cert-header">
          <div className="cert-header-icon">🏆</div>
          <h3>Verify Your Certificate</h3>
          <p>Enter Certificate ID or Student Roll Number</p>
        </div>
        <div className="cert-body">
          <div className="cert-input-row">
            <input 
              type="text" 
              className="cert-field" 
              placeholder="e.g. SRS2026001" 
              value={certId}
              onChange={(e) => setCertId(e.target.value.toUpperCase())}
              onKeyDown={handleCertKeyPress}
            />
            <button className="cert-verify-btn" onClick={handleVerifyCert} disabled={isLoading}>
              {isLoading ? "Wait..." : "Verify →"}
            </button>
          </div>
          <p className="cert-hint">
            Certificate ID is printed on your certificate. Need help?
            <a href="tel:9057683380"> Call +91 9057683380</a>
          </p>
          
          <div id="cert-result" style={{ marginTop: '1.5rem' }}>
            {isLoading && <p style={{ textAlign: 'center', padding: '1rem', color: 'var(--muted)', fontSize: '0.85rem' }}>🔍 Verifying certificate from Database...</p>}
            
            {verificationResult && verificationResult.found && (
              <div className="result-success">
                <div className="result-success-banner">
                  <span className="check">✅</span>
                  <div><h4>Certificate Verified Successfully</h4><p>This is an authentic SRS Computer Institute certificate</p></div>
                </div>
                <div className="result-rows">
                  <div className="result-row"><span className="result-label">Certificate ID</span><span className="result-val">{verificationResult.data.certId}</span></div>
                  <div className="result-row"><span className="result-label">Student Name</span><span className="result-val">{verificationResult.data.studentName}</span></div>
                  <div className="result-row"><span className="result-label">Course</span><span className="result-val">{verificationResult.data.course}</span></div>
                  <div className="result-row"><span className="result-label">Issue Date</span><span className="result-val">{verificationResult.data.issueDate}</span></div>
                  <div className="result-row"><span className="result-label">Grade</span><span className="result-val"><span className="grade-badge">{verificationResult.data.grade}</span></span></div>
                  <div className="result-row"><span className="result-label">Issued By</span><span className="result-val">SRS Computer Institute, Sikar</span></div>
                </div>
              </div>
            )}

            {verificationResult && !verificationResult.found && (
              <div className="result-error">
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>❌</div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: '#dc2626', marginBottom: '8px' }}>Certificate Not Found</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                  No certificate found for ID <strong>{certId}</strong>.<br />
                  Please double-check the ID or contact us at<br />
                  <a href="tel:9057683380" style={{ color: 'var(--gold)' }}>+91 9057683380</a>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}