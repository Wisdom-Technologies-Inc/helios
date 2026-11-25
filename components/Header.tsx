
"use client";

import { useEffect, useRef, useState } from "react";
import { CAL_LINK, CAL_NAMESPACE, CAL_POPUP_CONFIG } from "@/lib/config";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY || 0;
      setScrolled(y > 8);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.width = (max > 0 ? Math.min(100, (y / max) * 100) : 0) + "%";
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <div className="progress" id="scrollProgress" aria-hidden="true" ref={progressRef}></div>
      <header className={"site" + (scrolled ? " scrolled" : "")} id="siteHeader">
        <div className="wrap header-in">
          <a className="brand" href="#top" aria-label="HELIOS Home">
            <img className="brand-logo" src="/assets/logo-lockup.png" alt="HELIOS Customer Operations" width="345" height="99" />
          </a>
          <nav className="main" aria-label="Primary">
            <a href="#services" data-nav="services">Services</a>
            <a href="#process" data-nav="process">How We Work</a>
            <a href="#why-helios" data-nav="why-helios">Why HELIOS</a>
            <a href="#rwanda" data-nav="rwanda">Company &amp; Hub</a>
            <a href="#faq" data-nav="faq">FAQs</a>
          </nav>
          <div className="header-actions">
            <a className="linkedin-btn" href="https://www.linkedin.com/company/helios-customer-operations/" target="_blank" rel="noopener noreferrer" aria-label="HELIOS Customer Operations on LinkedIn">in</a>
            <a className="btn btn-sm btn-schedule" href="#contact" data-book data-cal-namespace={CAL_NAMESPACE} data-cal-link={CAL_LINK} data-cal-config={CAL_POPUP_CONFIG}>Schedule Call
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 2v3" /><path d="M16 2v3" /><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /></svg>
            </a>
            <button className="icon-btn menu-btn" id="menuBtn" aria-label="Toggle navigation menu" aria-expanded={menuOpen} aria-controls="mobileNav" onClick={() => setMenuOpen((v) => !v)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></svg>
            </button>
          </div>
        </div>
        <nav className={"mobile-nav" + (menuOpen ? " open" : "")} id="mobileNav" aria-label="Mobile" onClick={(e) => { if ((e.target as HTMLElement).closest("a")) closeMenu(); }}>
          <a className="mlink" href="#services">Services <span aria-hidden="true">→</span></a>
          <a className="mlink" href="#process">How We Work <span aria-hidden="true">→</span></a>
          <a className="mlink" href="#why-helios">Why HELIOS <span aria-hidden="true">→</span></a>
          <a className="mlink" href="#rwanda">Company &amp; Hub <span aria-hidden="true">→</span></a>
          <a className="mlink" href="#faq">Common FAQs <span aria-hidden="true">→</span></a>
          <a className="mlink" href="#contact" data-book data-cal-namespace={CAL_NAMESPACE} data-cal-link={CAL_LINK} data-cal-config={CAL_POPUP_CONFIG}>Schedule Call <span aria-hidden="true">→</span></a>
          <a className="mlink" href="https://www.linkedin.com/company/helios-customer-operations/" target="_blank" rel="noopener noreferrer">Follow HELIOS on LinkedIn <span aria-hidden="true">→</span></a>
        </nav>
      </header>
    </>
  );
}
