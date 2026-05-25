"use client";
import { useState, useEffect } from "react";

// --- SARE COMPONENTS IMPORT KIYE GAYE HAIN ---
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Courses from "../components/Courses";
import CertificateSection from "../components/CertificateSection";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import AdmissionSection from "../components/AdmissionSection";
import Reviews from "../components/Reviews";
// import SuccessGallery from "../components/SuccessGallery";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

export default function Home() {
  // Toast State
  const [toastMsg, setToastMsg] = useState("");
  const [showToast, setShowToast] = useState(false);

  // Scroll Animations (poori website ke liye)
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          // TypeScript fix: e.target ko HTMLElement batana
          const target = e.target as HTMLElement;
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.08 });

    const animatedElements = document.querySelectorAll(
      '.course-card, .why-card, .testi-card, .contact-card, .success-card, .review-card, .faq-item'
    );
    
    animatedElements.forEach((el) => {
      // TypeScript fix: el ko HTMLElement batana
      const targetEl = el as HTMLElement;
      targetEl.style.opacity = '0';
      targetEl.style.transform = 'translateY(24px)';
      targetEl.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      obs.observe(el);
    });
  }, []);

  const triggerToast = (msg: string) => {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <>
      {/* Note: Next.js App Router mein <Head> ki jagah metadata layout.tsx se handle hota hai, 
        jo humne pehle hi ekdum perfect local SEO ke sath configure kar diya hai!
      */}

      {/* Ekdam Clean aur Modular Website Structure */}
      <Navbar />
      
      {/* Semantic Tags used for better SEO structure */}
      <main>
        <Hero />
        <Courses />
        
        <CertificateSection triggerToast={triggerToast} />
        
        <WhyUs />
        <Testimonials />
        
        <AdmissionSection triggerToast={triggerToast} />
        
        <Reviews />
        {/* <SuccessGallery /> */}
        <FAQ />
        <Contact />
      </main>

      <Footer />

      <WhatsAppFloat />

      {/* TOAST NOTIFICATION MAIN FILE MEIN HOGA TAKI HAR JAGAH SE CALL HO SAKE */}
      <div className={`toast ${showToast ? 'show' : ''}`} id="toast">
        {toastMsg}
      </div>
    </>
  );
}