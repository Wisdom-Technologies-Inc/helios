
export default function Footer() {
  return (
    <>
      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot-brand">
              <a className="brand" href="#top" aria-label="HELIOS home">
                <img className="brand-logo" src="/assets/logo-lockup.png" alt="HELIOS Customer Operations" width="345" height="99" />
              </a>
              <p>Customer support and business operations built around your business — dedicated pods from Kigali, Rwanda, working inside the tools you already trust.</p>
              <address>Headquarters: Kigali, Rwanda (UTC+2)</address>
              <a className="foot-linkedin" href="https://www.linkedin.com/company/helios-customer-operations/" target="_blank" rel="noopener noreferrer"><img src="/assets/logo-mark.png" alt="" width="28" height="28" /> Follow HELIOS on LinkedIn</a>
            </div>
            <nav aria-label="Company"><h4>Company</h4><ul>
              <li><a href="#about">About HELIOS</a></li>
              <li><a href="#why-helios">Why HELIOS</a></li>
              <li><a href="#process">How We Work</a></li>
              <li><a href="#rwanda">Kigali Hub Telemetry</a></li>
              <li><a href="#security">Security &amp; DPA</a></li>
            </ul></nav>
            <nav aria-label="Services"><h4>Services</h4><ul>
              <li><a href="#services">Email &amp; Helpdesk</a></li>
              <li><a href="#services">Live Chat Support</a></li>
              <li><a href="#services">Tier 1 Tech Support</a></li>
              <li><a href="#services">User Verification (KYC)</a></li>
              <li><a href="#services">CRM Administration</a></li>
              <li><a href="#services">Weekly QA Auditing</a></li>
            </ul></nav>
            <nav aria-label="Governance and booking"><h4>Governance &amp; Booking</h4><ul>
              <li><a href="#legal">Privacy Policy</a></li>
              <li><a href="#legal">Website Terms of Use</a></li>
              <li><a href="#legal">DPA Framework</a></li>
              <li><a href="#faq">Common FAQs</a></li>
              <li><a href="#contact" data-book>Schedule Meeting</a></li>
            </ul></nav>
          </div>
          <div className="foot-bar">
            <span>© 2026 HELIOS Customer Operations. All rights reserved.</span>
            <span>Professional service · Clear communication · Responsible operations</span>
            <a className="to-top" href="#top">Back to top
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg></a>
          </div>
        </div>
      </footer>
    </>
  );
}
