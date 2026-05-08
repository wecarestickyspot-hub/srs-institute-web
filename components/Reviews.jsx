export default function Reviews() {
  return (
    <section id="reviews">
      <div className="section-header">
        <div className="section-overline">Google Reviews</div>
        <h2 className="section-title">Students & Parents Ka Feedback</h2>
        <p className="section-sub">Real students, real results — yahi hamare sabse bade certificates hain.</p>
        <div className="gold-rule"></div>
      </div>
      <div className="reviews-header-row">
        <div className="g-rating-box">
          <div className="g-logo">🟦</div>
          <div>
            <div className="g-score">4.9</div>
            <div className="g-stars-row">★★★★★</div>
            <div className="g-count">120+ Google Reviews</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div className="g-badge">✅ Google Verified Reviews</div>
          <div className="g-badge">🏆 Best Computer Institute — Sikar 2024</div>
          <div className="g-badge">📍 Recommended by 98% of Students</div>
        </div>
      </div>
      <div className="reviews-grid">
        <div className="review-card">
          <div className="review-top">
            <div className="reviewer">
              <div className="reviewer-ava">R</div>
              <div><div className="reviewer-name">Ramesh Choudhary</div><div className="reviewer-time">2 weeks ago</div></div>
            </div>
            <span className="review-g-icon">🟦</span>
          </div>
          <div className="review-stars">★★★★★</div>
          <div className="review-text">&quot;Mera beta yahan Web Development seekh raha hai. Teacher bahut achhe se samjhate hain. Practical ke upar focus hai. Hum bahut khush hain is institute se.&quot;</div>
          <span className="review-course-tag">Parent Review · Web Dev</span>
        </div>
        <div className="review-card">
          <div className="review-top">
            <div className="reviewer">
              <div className="reviewer-ava">S</div>
              <div><div className="reviewer-name">Sunita Sharma</div><div className="reviewer-time">1 month ago</div></div>
            </div>
            <span className="review-g-icon">🟦</span>
          </div>
          <div className="review-stars">★★★★★</div>
          <div className="review-text">&quot;Digital Marketing course complete kiya. SRS Institute ne sirf course nahi, career bhi diya. 3 mahine mein naukri mil gayi Jaipur mein. Sir ka bahut bahut shukriya!&quot;</div>
          <span className="review-course-tag">Student · Digital Marketing</span>
        </div>
        <div className="review-card">
          <div className="review-top">
            <div className="reviewer">
              <div className="reviewer-ava">M</div>
              <div><div className="reviewer-name">Mahesh Kumar Saini</div><div className="reviewer-time">3 weeks ago</div></div>
            </div>
            <span className="review-g-icon">🟦</span>
          </div>
          <div className="review-stars">★★★★★</div>
          <div className="review-text">&quot;Tally with GST seekhi. Pehle mujhe kuch nahi aata tha, ab main apni shop ka poora hisab khud rakhta hoon. Certificate bhi mila jo bahut useful hai.&quot;</div>
          <span className="review-course-tag">Student · Tally/ERP</span>
        </div>
      </div>
    </section>
  );
}