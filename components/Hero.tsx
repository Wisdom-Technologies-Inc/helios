import type { CSSProperties } from "react";
import { CAL_LINK, CAL_NAMESPACE, CAL_POPUP_CONFIG } from "@/lib/config";

export default function Hero() {
  return (
    <>
      <section className="hero" id="top">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <span className="hero-pill reveal"><span className="dot" aria-hidden="true"></span> Kigali hub · On shift now · UTC+2</span>
              <h1 className="reveal" style={{"--d": ".05s"} as CSSProperties}>Your customers, answered like <span className="serif-i blue">an in-house team.</span></h1>
              <p className="lede reveal" style={{"--d": ".1s"} as CSSProperties}>A dedicated pod of Kigali specialists working inside your helpdesk, live chat, and back-office queues — <strong>up to 65% below the cost</strong> of hiring at home, live in 10–14 days.</p>
              <div className="hero-ctas reveal" style={{"--d": ".15s"} as CSSProperties}>
                <a className="btn btn-blue" href="#contact" data-book data-cal-namespace={CAL_NAMESPACE} data-cal-link={CAL_LINK} data-cal-config={CAL_POPUP_CONFIG}>Book a Discovery Call
                  <svg className="arr" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
                <a className="btn btn-ghost" href="#services">Explore Services
                  <svg className="arr" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
              </div>
              <p className="hero-micro reveal" style={{"--d": ".2s"} as CSSProperties}><span><b>No long-term lock-in</b> · 14-day pilot</span><span><b>DPA signed</b> before any access</span></p>
              <p className="hero-audience reveal" style={{"--d": ".22s"} as CSSProperties}>For <b>SaaS companies, technology startups, e-commerce businesses, and growing companies</b> in the US, UK, Canada, Europe, and Australia.</p>
              <div className="hero-stats reveal" style={{"--d": ".25s"} as CSSProperties}>
                <div className="stat-card"><b>10–14<span className="unit"> days</span></b><span>From discovery call to first live ticket</span><span className="trend">▲ Vetted talent, ready now</span></div>
                <div className="stat-card"><b><span data-count="65" data-suffix="%">65%</span></b><span>Lower cost than domestic hiring</span><span className="trend">▲ Flat rate, zero hidden fees</span></div>
                <div className="stat-card"><b>&lt; <span data-count="8" data-suffix="%">8%</span></b><span>Annual team turnover</span><span className="trend">▲ Career wages in Kigali</span></div>
              </div>
            </div>
            <div className="hero-visual reveal" style={{"--d": ".15s"} as CSSProperties}>
              <div className="hero-photos">
                <div className="ph tall">
                  <span className="pod-badge"><i></i> Pod 04 · Tier 1</span>
                  <img src="/assets/hero-photo-1.jpg" alt="HELIOS specialist smiling while wearing a headset, from the HELIOS Customer Operations launch poster" width="454" height="600" fetchPriority="high" />
                </div>
                <div className="ph short"><img src="/assets/hero-photo-2.jpg" alt="Dedicated customer support team member working at a laptop with a headset" width="800" height="893" /></div>
              </div>
              <div className="telemetry-card" role="status" aria-label="Live shift snapshot">
                <div className="tc-top">
                  <span className="lbl"><span className="pulse" aria-hidden="true"></span> Kigali station · Live shift</span>
                  <time id="heroClock" dateTime="">--:--:-- CAT</time>
                </div>
                <div className="tc-metrics">
                  <div><b id="queueCount">148</b><span>Tickets in queue</span></div>
                  <div><b><span id="slaMin">11</span> min</b><span>Avg first response</span></div>
                  <div><b><span data-count="99.4" data-decimals="1" data-suffix="%">99.4%</span></b><span>Customer satisfaction</span></div>
                </div>
                <div className="tc-foot">
                  <span className="avatars" aria-hidden="true"><span style={{"background": "#1d4ed8"} as CSSProperties}>AK</span><span style={{"background": "#0a1428"} as CSSProperties}>JM</span><span style={{"background": "#c5a253"} as CSSProperties}>+6</span></span>
                  <span>8 specialists on shift · 2 team leads</span>
                  <svg className="spark" width="72" height="24" viewBox="0 0 72 24" fill="none" aria-hidden="true"><polyline points="1,18 10,14 19,16 28,9 37,12 46,6 55,10 63,4 71,7" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="63" cy="4" r="2.5" fill="#1d4ed8" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-feats reveal">
            <article><span className="ic"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></span><h3>Full EU &amp; US overlap</h3><p>One shift covers the UK, Europe, and US East Coast mornings.</p></article>
            <article><span className="ic"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></span><h3>Vetted, dedicated talent</h3><p>University-educated specialists trained on your product — never shared.</p></article>
            <article><span className="ic"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.5 6L2 7" /></svg></span><h3>Inside your tools</h3><p>No new software. We work in your Zendesk, Intercom, or Gorgias.</p></article>
            <article><span className="ic"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg></span><h3>QA &amp; data security</h3><p>Weekly ticket audits, bilateral DPAs, GDPR-aligned practice.</p></article>
          </div>
        </div>
      </section>
    </>
  );
}
