export default function Contact() {
  return (
    <section id="contact">
      <div className="section-header">
        <div className="section-overline">Find Us</div>
        <h2 className="section-title">Contact Us</h2>
        <div className="gold-rule"></div>
      </div>
      <div className="contact-grid">
        <div className="contact-card"><div className="c-icon">📍</div><div className="c-label">Address</div><div className="c-val">Sanjay Restaurant wali gali,<br />Piprall Road, Sikar, Rajasthan</div></div>
        <div className="contact-card"><div className="c-icon">📞</div><div className="c-label">Call / WhatsApp</div><div className="c-val"><a href="tel:9057683380">+91 9057683380</a></div></div>
        <div className="contact-card"><div className="c-icon">⏰</div><div className="c-label">Timings</div><div className="c-val">Monday – Saturday<br />9:00 AM – 7:00 PM</div></div>
        <div className="contact-card"><div className="c-icon">💬</div><div className="c-label">WhatsApp Us</div><div className="c-val"><a href="https://wa.me/919057683380" target="_blank">Chat on WhatsApp →</a></div></div>
      </div>
    </section>
  );
}