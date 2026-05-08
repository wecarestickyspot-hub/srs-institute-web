"use client";
import { useState } from "react";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    { q: "Certificate genuine hoga? Koi verify kar sakta hai?", a: "Haan, bilkul. SRS Institute ka har certificate ek unique ID ke saath aata hai. Koi bhi employer ya parent humari website pe Certificate Verification section mein jaake us ID se certificate verify kar sakta hai." },
    { q: "Course ke baad job milne ki kya guarantee hai?", a: "Hum 100% placement guarantee nahi dete — lekin hamare 85%+ students ko course ke 3-6 mahine mein job ya freelancing work mil jaata hai. Hum resume banwane mein, interview preparation mein aur job referrals mein bhi help karte hain." },
    { q: "Teacher kaisa padhata hai? Kya practical sikhate hain?", a: "Hamare trainer 5+ saal industry experience wale hain. Classes 70% practical aur 30% theory hoti hain. Har student ko apna computer milta hai class mein. Real projects pe kaam karaya jaata hai." },
    { q: "Fees kitni hai? Installment mein de sakte hain?", a: "Fees course ke hisab se alag hoti hai. Hum installment ki facility dete hain. Exact fees jaanne ke liye demo class mein aayein ya +91 9057683380 pe call karein. Koi hidden charges nahi hain." }
  ];

  return (
    <section id="faq">
      <div className="section-header">
        <div className="section-overline">Parents & Students</div>
        <h2 className="section-title">Aksar Pooche Jane Wale Sawaal</h2>
        <p className="section-sub">Jo sawaal aapke mann mein hain — woh yahan hain.</p>
        <div className="gold-rule"></div>
      </div>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
            <div className="faq-q" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
              <span className="faq-q-text">{faq.q}</span>
              <span className="faq-chevron">▼</span>
            </div>
            <div className="faq-a">{faq.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}