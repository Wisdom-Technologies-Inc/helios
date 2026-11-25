"use client";

import { useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent } from "react";
import { SVC_DATA, type SvcKey } from "@/lib/data";
import { CAL_LINK, CAL_NAMESPACE, CAL_POPUP_CONFIG } from "@/lib/config";

const SVC_KEYS: SvcKey[] = ["email", "chat", "tech", "ops"];

const CheckIcon = () => (
  <span className="ck">
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
  </span>
);

export default function Services() {
  const [active, setActive] = useState<SvcKey>("email");
  const d = SVC_DATA[active];
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function onTabKeyDown(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const next = e.key === "ArrowDown" ? (i + 1) % SVC_KEYS.length : (i - 1 + SVC_KEYS.length) % SVC_KEYS.length;
    setActive(SVC_KEYS[next]);
    tabRefs.current[next]?.focus();
  }

  return (
    <>
      <section className="section section-white" id="services" aria-labelledby="services-h">
        <div className="wrap">
          <div className="section-head wide reveal">
            <p className="eyebrow">What We Take Off Your Plate</p>
            <h2 id="services-h">Four queues. One pod. <span className="serif-i blue">Nothing falls through.</span></h2>
            <p className="lede">Specialists embedded in your stack, working to your playbook — so your team gets its mornings back for product and revenue.</p>
          </div>
          <div className="services-grid">
            <div className="svc-tabs reveal" role="tablist" aria-label="Services" id="svcTabs">
              <button className="svc-tab" role="tab" id="tab-email" aria-selected={active === "email"} aria-controls="svcPanel" data-svc="email" ref={(el) => { tabRefs.current[0] = el; }} onClick={() => setActive("email")} onKeyDown={(e) => onTabKeyDown(e, 0)} tabIndex={active === "email" ? 0 : -1}>
                <span className="k"><span>Frontline Support</span><em>11 min avg</em></span>
                <span className="row"><span className="sic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.5 6L2 7" /></svg></span><span><h3>Email &amp; Helpdesk Ticketing</h3><p>Billing, access, and product questions — answered in your voice, on your SLAs.</p></span><svg className="go" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></span>
              </button>
              <button className="svc-tab" role="tab" id="tab-chat" aria-selected={active === "chat"} aria-controls="svcPanel" data-svc="chat" ref={(el) => { tabRefs.current[1] = el; }} onClick={() => setActive("chat")} onKeyDown={(e) => onTabKeyDown(e, 1)} tabIndex={-1}>
                <span className="k"><span>Real-Time Messaging</span><em>Live</em></span>
                <span className="row"><span className="sic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg></span><span><h3>Live Chat &amp; In-App Messaging</h3><p>Visitors helped in the moment — fewer drop-offs, warmer trials, better leads.</p></span><svg className="go" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></span>
              </button>
              <button className="svc-tab" role="tab" id="tab-tech" aria-selected={active === "tech"} aria-controls="svcPanel" data-svc="tech" ref={(el) => { tabRefs.current[2] = el; }} onClick={() => setActive("tech")} onKeyDown={(e) => onTabKeyDown(e, 2)} tabIndex={-1}>
                <span className="k"><span>Technical Support</span><em>Tier 1</em></span>
                <span className="row"><span className="sic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m16 18 6-6-6-6" /><path d="m8 6-6 6 6 6" /></svg></span><span><h3>Tier-1 Technical &amp; Bug Reproduction</h3><p>Errors diagnosed and reproduced cleanly, so engineers get signal, not noise.</p></span><svg className="go" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></span>
              </button>
              <button className="svc-tab" role="tab" id="tab-ops" aria-selected={active === "ops"} aria-controls="svcPanel" data-svc="ops" ref={(el) => { tabRefs.current[3] = el; }} onClick={() => setActive("ops")} onKeyDown={(e) => onTabKeyDown(e, 3)} tabIndex={-1}>
                <span className="k"><span>Operations</span><em>KYC</em></span>
                <span className="row"><span className="sic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" /></svg></span><span><h3>KYC &amp; Back-Office Processing</h3><p>ID reviews, approvals, refunds, and CRM hygiene — done to the letter of the SOP.</p></span><svg className="go" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></span>
              </button>
            </div>
            <div className="svc-panel reveal" style={{"--d": ".1s"} as CSSProperties} role="tabpanel" id="svcPanel" aria-labelledby={d.tab} tabIndex={0}>
              <div className="photo">
                <img id="svcImg" src="/assets/service-panel.jpg" alt="HELIOS specialists answering customer conversations at their desks in Kigali" width="1600" height="860" />
                <span className="badge"><span className="pulse" aria-hidden="true"></span> Kigali Pod Active</span>
                <span className="kpi-chip"><span id="svcKpiLabel">{d.kpiLabel}</span><span id="svcKpiValue" style={{"color": "var(--ink)", fontSize: ".95rem", fontWeight: "800"} as CSSProperties}>{d.kpiValue}</span></span>
              </div>
              <div className="body">
                <div className="tools-row" id="svcTools">{d.tools.map((t) => (<span className="tool-chip" key={t}>{t}</span>))}</div>
                <h3 id="svcTitle">{d.title}</h3>
                <p id="svcDesc">{d.desc}</p>
                <ul className="svc-checks" id="svcChecks">{d.checks.map((c) => (<li key={c}><CheckIcon /><span>{c}</span></li>))}</ul>
                <div className="svc-kpis" id="svcKpis">{d.kpis.map((k) => (<div key={k[1]}><b>{k[0]}</b><span>{k[1]}</span></div>))}</div>
                <div className="svc-foot">
                  <p className="promise" id="svcPromise" dangerouslySetInnerHTML={{ __html: d.promise }} />
                  <a className="btn btn-sm" href="#contact" data-book data-cal-namespace={CAL_NAMESPACE} data-cal-link={CAL_LINK} data-cal-config={CAL_POPUP_CONFIG}>Discuss Your Queues
                    <svg className="arr" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
