"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* <div className="demo-banner">
        <div className="demo-banner-text">🎁 <strong>FREE Demo Class</strong> available for all courses — Limited slots this week!</div>
        <a href="#free-demo" className="demo-banner-btn">Book Free Demo →</a>
      </div> */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-badge">🔥 Admission Open — Limited Seats</div>
            <h1 className="hero-title">SRS <span>Computer</span><br />Institute</h1>
            <p className="hero-location">Sikar, Rajasthan</p>
            <p className="hero-desc">Expert training with 100% practical classes. From Basic Computer to Full Stack Development — we prepare you for real-world careers with industry-recognized certificates.</p>
            <div className="hero-btns">
              <a href="#admission" className="btn-gold">🚀 Enroll Now</a>
              <a href="#certificate" className="btn-outline-gold">🏆 Verify Certificate</a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-num">16+</div>
                <div className="hero-stat-label">Courses</div>
              </div>
              <div className="hero-stat" style={{ paddingLeft: '2rem', borderLeft: '1px solid var(--border)' }}>
                <div className="hero-stat-num">1000 +</div>
                <div className="hero-stat-label">Students</div>
              </div>
              <div className="hero-stat" style={{ paddingLeft: '2rem', borderLeft: '1px solid var(--border)' }}>
                <div className="hero-stat-num">4.9 ★</div>
                <div className="hero-stat-label">Rating</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="float-badge fb-1"><div className="fb-dot"></div> Certificate Available</div>
            <div className="hero-card-main">
              <div className="hcard-header">
                 <div className="nav-logo-icon" style={{ background: 'transparent', padding: 0 }}>
          <Image src="/logo.jpg" alt="SRS Logo" width={45} height={45} style={{ borderRadius: '50%' }} />
        </div>
                <div>
                  <div className="hcard-name">SRS Computer Institute</div>
                  <div className="hcard-sub">Sikar · Est. 2020</div>
                </div>
              </div>
              <div className="hcard-courses">
                <div className="hcard-course-row"><span className="hcard-course-name">💻 Web Development</span><span className="hcard-course-tag">Popular</span></div>
                <div className="hcard-course-row"><span className="hcard-course-name">📊 Data Science</span><span className="hcard-course-tag">New</span></div>
                <div className="hcard-course-row"><span className="hcard-course-name">🤖 AI & Machine Learning</span><span className="hcard-course-tag">Hot</span></div>
                <div className="hcard-course-row"><span className="hcard-course-name">🧾 Tally with GST</span><span className="hcard-course-tag">Job Ready</span></div>
              </div>
              <div className="hcard-cert">
                <span style={{ fontSize: '1.4rem' }}>🏆</span>
                <div>
                  <div className="hcard-cert-text">Certificate Available</div>
                  <div className="hcard-cert-sub">Verify online instantly</div>
                </div>
              </div>
            </div>
            <div className="float-badge fb-2"><div className="fb-dot"></div> Practical Classes</div>
          </div>
        </div>
      </section>
    </>
  );
}