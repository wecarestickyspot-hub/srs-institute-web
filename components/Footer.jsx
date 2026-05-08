export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-brand-logo">
            <div className="fbl-icon">🎓</div>
            <div className="fbl-name">SRS Computer Institute</div>
          </div>
          <p>Expert training with practical classes and industry-recognized certificates. Empowering students in Sikar since 2020.</p>
        </div>
        <div className="footer-links-col">
          <h4>Courses</h4>
          <ul>
            <li><a href="#courses">Web Development</a></li>
            <li><a href="#courses">Data Science</a></li>
            <li><a href="#courses">Digital Marketing</a></li>
            <li><a href="#courses">Tally / ERP</a></li>
          </ul>
        </div>
        <div className="footer-links-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#certificate">Verify Certificate</a></li>
            <li><a href="#admission">Apply Now</a></li>
            <li><a href="#why-us">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-links-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:9057683380">+91 9057683380</a></li>
            <li><a href="https://wa.me/919057683380">WhatsApp Us</a></li>
            <li><a href="#contact">Piprall Road, Sikar</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">© 2026 SRS Computer Institute, Sikar. All Rights Reserved.</span>
        <span className="footer-gold">Sikar&apos;s Premier Computer Institute</span>
      </div>
    </footer>
  );
}