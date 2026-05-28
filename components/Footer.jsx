import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        
        {/* Brand Column */}
        <div className="footer-brand">
          <Link href="/" className="footer-brand-logo flex items-center gap-3 group">
            {/* Premium Logo with Glow Effect */}
            <div className="relative rounded-full p-1 bg-white shadow-[0_0_15px_rgba(184,146,42,0.15)] group-hover:shadow-[0_0_25px_rgba(184,146,42,0.4)] transition-all duration-300">
              <Image 
                src="/logo.jpg" 
                alt="SRS Computer Institute Sikar Logo" 
                width={40}      
                height={40} 
                className="object-contain rounded-full"
                priority={false} 
              />
            </div>
            <div className="fbl-name group-hover:text-[#b8922a] transition-colors duration-300">
              SRS Computer Institute
            </div>
          </Link>
          <p className="opacity-80 leading-[1.8] mt-2">
            Expert training with practical classes and industry-recognized certificates. Empowering students in Sikar since 2024.
          </p>
        </div>
        
        {/* Courses Column */}
        <div className="footer-links-col">
          <h4>Courses</h4>
          <ul className="flex flex-col gap-3">
            {['Web Development', 'Data Science', 'Digital Marketing', 'Tally / ERP'].map((item, i) => (
              <li key={i}>
                <a href="#courses" className="flex items-center gap-2 text-white/70 hover:text-[#b8922a] hover:translate-x-1 transition-all duration-300">
                  <span className="text-[#b8922a] text-xs">▹</span> {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Quick Links Column */}
        <div className="footer-links-col">
          <h4>Quick Links</h4>
          <ul className="flex flex-col gap-3">
            {[
              { name: 'Verify Certificate', link: '#certificate' },
              { name: 'Apply Now', link: '#admission' },
              { name: 'Expert Faculty', link: '#trainers' },
              { name: 'About Us', link: '#why-us' }
            ].map((item, i) => (
              <li key={i}>
                <a href={item.link} className="flex items-center gap-2 text-white/70 hover:text-[#b8922a] hover:translate-x-1 transition-all duration-300">
                  <span className="text-[#b8922a] text-xs">▹</span> {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Contact Us Column (Pure Tailwind & SVGs) */}
        <div className="footer-links-col">
          <h4>Contact Us</h4>
          <ul>
            
            {/* Address Block */}
            <li className="mb-4 group">
              <strong className="flex items-center gap-2 text-[#b8922a] text-[11px] tracking-[1.5px] uppercase">
                {/* Premium Location SVG */}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Address
              </strong>
              <span className="block mt-1.5 text-[13.5px] text-white/70 leading-[1.7] group-hover:text-white transition-colors duration-300">
                Sanjay Restaurant wali gali,<br />Piprali Road, Sikar, Rajasthan
              </span>
            </li>
            
            {/* Phone Block */}
            <li className="mb-4 group">
              <strong className="flex items-center gap-2 text-[#b8922a] text-[11px] tracking-[1.5px] uppercase">
                {/* Premium Phone SVG */}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call / WhatsApp
              </strong>
              <a href="tel:9057683380" className="block mt-1.5 text-[15px] font-bold text-white/90 hover:text-[#b8922a] transition-colors duration-300">
                +91 9057683380
              </a>
            </li>
            
            {/* Timings Block */}
            <li className="group">
              <strong className="flex items-center gap-2 text-[#b8922a] text-[11px] tracking-[1.5px] uppercase">
                {/* Premium Clock SVG */}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Timings
              </strong>
              <span className="block mt-1.5 text-[13.5px] text-white/60 leading-[1.7] group-hover:text-white transition-colors duration-300">
                Monday – Saturday<br />9:00 AM – 7:00 PM
              </span>
            </li>

          </ul>
        </div>

      </div>
      
      <div className="footer-bottom">
        <span className="footer-copy">© 2026 SRS Computer Institute, Sikar. All Rights Reserved.</span>
        <span className="footer-gold tracking-[1px] font-bold">Sikar&apos;s Premier Computer Institute</span>
      </div>
    </footer>
  );
}