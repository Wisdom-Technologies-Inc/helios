"use client";

import { useEffect, useRef } from "react";
import { CAL_LINK, CAL_NAMESPACE, CAL_POPUP_CONFIG } from "@/lib/config";

export default function Policies() {
  const rootRef = useRef<HTMLElement>(null);

  // Policy accordions — same toggle + height animation as the source site.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const cleanups: (() => void)[] = [];
    root.querySelectorAll<HTMLElement>(".policy-item").forEach((item) => {
      const btn = item.querySelector<HTMLButtonElement>(".policy-q");
      const ans = item.querySelector<HTMLElement>(".policy-a");
      if (!btn || !ans) return;
      const handler = () => {
        const open = item.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
        ans.style.maxHeight = open ? ans.scrollHeight + "px" : "0px";
      };
      btn.addEventListener("click", handler);
      cleanups.push(() => btn.removeEventListener("click", handler));
    });
    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <>
      <section ref={rootRef} className="section section-white" id="legal" aria-labelledby="legal-h">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Governance &amp; Policies</p>
            <h2 id="legal-h">Policies, <span className="serif-i blue">in plain sight.</span></h2>
            <p className="lede">Governance baselines prepared for enterprise partnerships and compliance audits. Full documents available on request.</p>
          </div>
          <div className="policy-list reveal" id="policyList">
            <div className="policy-item">
              <button className="policy-q" aria-expanded="false"><b>Privacy Policy — Starter Outline</b><span className="pq-right"><span className="tag">Outline</span><svg className="chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></span></button>
              <div className="policy-a"><div className="in">
                <p>This outline summarises how HELIOS handles personal data shared through this site and during a consultation. Ask for the full policy before sharing any customer data.</p>
                <ul><li>Booking details are used only to respond and prepare a pilot scope.</li><li>No customer ticket data is collected through this website.</li><li>Any access to client systems is governed by a bilateral DPA.</li><li>Questions about this policy can be raised on a Discovery Call, booked below.</li></ul>
              </div></div>
            </div>
            <div className="policy-item">
              <button className="policy-q" aria-expanded="false"><b>Website Terms of Use — Starter Outline</b><span className="pq-right"><span className="tag">Outline</span><svg className="chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></span></button>
              <div className="policy-a"><div className="in">
                <p>This outline covers use of this website only. It does not replace a signed services agreement, DPA, or pilot scope.</p>
                <ul><li>Site content describes services; it is not a binding quote.</li><li>Pricing, SLAs, and service terms are agreed in writing before a pilot begins.</li><li>Never share passwords, credentials, or customer data through this website.</li></ul>
              </div></div>
            </div>
            <div className="policy-item">
              <button className="policy-q" aria-expanded="false"><b>Cookie Policy — Starter Outline</b><span className="pq-right"><span className="tag">Outline</span><svg className="chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></span></button>
              <div className="policy-a"><div className="in">
                <p>This outline lists the topics the full cookie policy covers. Request the operative version if you need it for a vendor review.</p>
                <ul><li>Which cookies and similar technologies the site uses, and why.</li><li>How long each cookie is kept, and who sets it.</li><li>How to manage preferences in your browser.</li></ul>
              </div></div>
            </div>
            <div className="policy-item">
              <button className="policy-q" aria-expanded="false"><b>Business Data Processing Agreement (DPA) Framework</b><span className="pq-right"><span className="tag">Framework</span><svg className="chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></span></button>
              <div className="policy-a"><div className="in">
                <p>A standardized bilateral DPA is signed with every client before agents access any system. The framework covers:</p>
                <ul><li>Data residency and the client tools where work is performed — with no local data storage.</li><li>Sub-processor disclosure, plus role-scoped, least-privilege access with mandatory MFA.</li><li>Breach notification protocols and immediate credential revoking.</li><li>Alignment with Rwanda&rsquo;s Law No. 058/2021 and EU GDPR principles.</li></ul>
              </div></div>
            </div>
          </div>
          <p className="policy-note reveal">Need the full text of any document for legal or procurement review? <a href="#contact" data-book data-cal-namespace={CAL_NAMESPACE} data-cal-link={CAL_LINK} data-cal-config={CAL_POPUP_CONFIG}>Book a call to request the complete pack</a> — DPAs and security evaluation documents are provided for enterprise partnerships.</p>
        </div>
      </section>
    </>
  );
}
