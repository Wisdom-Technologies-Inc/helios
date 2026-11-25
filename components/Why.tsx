import type { CSSProperties } from "react";

import { CAL_LINK, CAL_NAMESPACE, CAL_POPUP_CONFIG } from "@/lib/config";
export default function Why() {
  return (
    <>
      <section className="section section-white" id="why-helios" aria-labelledby="why-h">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Why HELIOS</p>
            <h2 id="why-h">Precision you can audit. <span className="serif-i blue">Care you can feel.</span></h2>
            <p className="lede">Dependable execution, fast and friendly communication, and daily work done properly — the unglamorous things great support is made of.</p>
          </div>
          <div className="why-grid">
            <article className="why-card reveal"><div className="top"><span className="big">1<em>:</em>1</span><span className="wic"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" /></svg></span></div><span className="lbl">Account Focus</span><h3>100% dedicated agents</h3><p>Never split across brands. Your pod learns your workflows, culture, and edge cases inside out — and keeps that knowledge.</p></article>
            <article className="why-card reveal" style={{"--d": ".05s"} as CSSProperties}><div className="top"><span className="big">0<em>%</em></span><span className="wic"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg></span></div><span className="lbl">Tool Control</span><h3>Zero local data storage</h3><p>Every interaction happens inside your Zendesk, Intercom, or Gorgias. We never copy, export, or silo your customer data.</p></article>
            <article className="why-card reveal" style={{"--d": ".1s"} as CSSProperties}><div className="top"><span className="big">Day <em>1</em></span><span className="wic"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /></svg></span></div><span className="lbl">Documented SOPs</span><h3>Living knowledge playbooks</h3><p>Decision flowcharts, macros, and refund boundaries are documented before live queues — so nobody guesses on your customers&rsquo; behalf.</p></article>
            <article className="why-card reveal"><div className="top"><span className="big">Weekly</span><span className="wic"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 3v18h18" /><path d="m7 14 4-4 3 3 5-6" /></svg></span></div><span className="lbl">Scorecard Reports</span><h3>Transparent weekly QA audits</h3><p>CSAT breakdowns, random ticket audits, and SLA attainment delivered straight into your team&rsquo;s Slack channel.</p></article>
            <article className="why-card reveal" style={{"--d": ".05s"} as CSSProperties}><div className="top"><span className="big">&lt; <em>8%</em></span><span className="wic"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg></span></div><span className="lbl">Annual Churn</span><h3>Empathetic career talent</h3><p>Fair, competitive wages for Kigali graduates. Low turnover, genuine care, and agents who stay long enough to master your product.</p></article>
            <article className="why-card reveal" style={{"--d": ".1s"} as CSSProperties}><div className="top"><span className="big">14 <em>days</em></span><span className="wic"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" /></svg></span></div><span className="lbl">Evaluation Trial</span><h3>Low-risk 14-day pilot</h3><p>Test response speed, tone, and resolution on real queues — with clear targets and zero long-term commitment.</p></article>
          </div>
          <div className="cta-band reveal">
            <p>See what a dedicated Kigali pod looks like on your product.<span>Send your queue volume and we&rsquo;ll suggest the shift model and outline a 14-day trial — usually within 4 hours.</span></p>
            <a className="btn btn-light" href="#contact" data-book data-cal-namespace={CAL_NAMESPACE} data-cal-link={CAL_LINK} data-cal-config={CAL_POPUP_CONFIG}>Book a 25-Min Scoping Call
              <svg className="arr" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
          </div>
        </div>
      </section>
    </>
  );
}
