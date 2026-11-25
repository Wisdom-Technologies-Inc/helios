import type { CSSProperties } from "react";

import { CAL_LINK, CAL_NAMESPACE, CAL_POPUP_CONFIG } from "@/lib/config";
export default function Governance() {
  return (
    <>
      <section className="section" id="security" aria-labelledby="security-h">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Governance &amp; Data Integrity</p>
            <h2 id="security-h">Your data, <span className="serif-i blue">guarded by design.</span></h2>
            <p className="lede">Customer data is your most sensitive asset. Access is bounded, devices are managed, and every control below is written into the SOPs your pod works to.</p>
          </div>
          <div className="sec-grid">
            <article className="sec-card reveal"><span className="sic"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" /><path d="m16 11 2 2 4-4" /></svg></span><h3>Least-privilege role access (RBAC)</h3><p>Isolated corporate credentials, mandatory MFA, and role-scoped permissions. Agents see exactly what their role needs — nothing more, ever.</p><p className="ver"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg> Verified standard operating procedure</p></article>
            <article className="sec-card reveal" style={{"--d": ".05s"} as CSSProperties}><span className="sic"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></svg></span><h3>Dedicated device &amp; network security</h3><p>Enterprise-managed endpoints with disk encryption, endpoint monitoring, and secured VLAN routing. No personal devices, no side channels.</p><p className="ver"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg> Verified standard operating procedure</p></article>
            <article className="sec-card reveal"><span className="sic"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="m9 15 2 2 4-4" /></svg></span><h3>Data Protection Agreement (DPA)</h3><p>Standardized bilateral DPAs covering data residency, sub-processor disclosure, breach notification, and immediate credential revoking.</p><p className="ver"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg> Verified standard operating procedure</p></article>
            <article className="sec-card reveal" style={{"--d": ".05s"} as CSSProperties}><span className="sic"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg></span><h3>Rwanda GDPA &amp; global GDPR alignment</h3><p>Compliant with Rwanda&rsquo;s Law No. 058/2021 on personal data protection and privacy, modeled on EU GDPR principles.</p><p className="ver"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg> Verified standard operating procedure</p></article>
          </div>
          <div className="sec-banner reveal">
            <div><h4>Vendor review coming up?</h4><p>We provide standard DPAs and complete security evaluation packets for your legal and security teams — usually within one business day.</p></div>
            <a className="btn btn-light" href="#contact" data-book data-cal-namespace={CAL_NAMESPACE} data-cal-link={CAL_LINK} data-cal-config={CAL_POPUP_CONFIG}>Discuss Security Requirements
              <svg className="arr" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
          </div>
        </div>
      </section>
    </>
  );
}
