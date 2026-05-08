export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="section-header">
        <div className="section-overline">Student Stories</div>
        <h2 className="section-title">What Our Students Say</h2>
        <div className="gold-rule"></div>
      </div>
      <div className="testi-grid">
        <div className="testi-card">
          <div className="testi-stars">★★★★★</div>
          <div className="testi-text">&quot;SRS Institute ne meri life change kar di. Web Development course ke baad abhi main freelancing kar raha hoon. Best institute in Sikar!&quot;</div>
          <div className="testi-author"><div className="testi-ava">R</div><div><div className="testi-name">Rahul Sharma</div><div className="testi-course">Web Development</div></div></div>
        </div>
        <div className="testi-card">
          <div className="testi-stars">★★★★★</div>
          <div className="testi-text">&quot;Digital Marketing course bahut practical tha. Sir ne sab kuch live demo kar ke sikhaya. 3 months mein job mil gayi!&quot;</div>
          <div className="testi-author"><div className="testi-ava">P</div><div><div className="testi-name">Priya Kumari</div><div className="testi-course">Digital Marketing</div></div></div>
        </div>
        <div className="testi-card">
          <div className="testi-stars">★★★★★</div>
          <div className="testi-text">&quot;Tally with GST course perfect tha. Sikar mein itna achha computer institute aur koi nahi. Highly recommended!&quot;</div>
          <div className="testi-author"><div className="testi-ava">A</div><div><div className="testi-name">Amit Saini</div><div className="testi-course">Tally / ERP</div></div></div>
        </div>
      </div>
    </section>
  );
}