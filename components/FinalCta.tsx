import type { CSSProperties } from "react";
import { CAL_LINK, CAL_NAMESPACE, CAL_POPUP_CONFIG } from "@/lib/config";

export default function FinalCta() {
  return (
    <>
      <section className="final" aria-labelledby="final-h">
        <div className="wrap">
          <p className="eyebrow center" style={{"color": "rgba(255,255,255,.7)"} as CSSProperties}>Operational Peace of Mind</p>
          <h2 id="final-h">Great support shouldn&rsquo;t<br />cost a <span className="serif-i">fortune — or your focus.</span></h2>
          <p className="lede">Put dedicated Rwandan talent, documented SOP governance, and continuous QA auditing on your front line — and get your team&rsquo;s week back.</p>
          <div className="final-ctas">
            <a className="btn btn-light" href="#contact" data-book data-cal-namespace={CAL_NAMESPACE} data-cal-link={CAL_LINK} data-cal-config={CAL_POPUP_CONFIG} style={{"height": "3.25rem", "padding": "0 1.9rem"} as CSSProperties}>Book a Discovery Call
              <svg className="arr" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
            <a className="btn btn-outline-light" href="https://www.linkedin.com/company/helios-customer-operations/" target="_blank" rel="noopener noreferrer" style={{"height": "3.25rem", "padding": "0 1.9rem"} as CSSProperties}>Follow HELIOS on LinkedIn</a>
          </div>
          <div className="final-stats">
            <div><b>10–14 days</b><span>To first live ticket</span></div>
            <div><b>65% savings</b><span>Vs. domestic hiring</span></div>
            <div><b>99.4% CSAT</b><span>Live-shift average</span></div>
            <div><b>&lt; 8% churn</b><span>Annual, pod-wide</span></div>
          </div>
          <div className="photo-strip">
            <figure><img src="/assets/strip-photo-1.jpg" alt="HELIOS customer service specialist in Kigali" width="800" height="500" /><figcaption>Specialist, Kigali hub <span>Tier 1</span></figcaption></figure>
            <figure><img src="/assets/hub-photo.jpg" alt="Kigali skyline over green hills" width="800" height="500" /><figcaption>Kigali, Rwanda <span>UTC+2</span></figcaption></figure>
            <figure><img src="/assets/service-panel.jpg" alt="Dedicated customer support team members at work" width="800" height="500" /><figcaption>Dedicated pod <span>On shift</span></figcaption></figure>
          </div>
        </div>
        <div className="ticker" aria-hidden="true"><div className="ticker-track">
          <span><b>+ HELIOS OPS</b> <i>◆</i> Kigali Hub <i>◆</i> Dispatch <i>◆</i> Synced UTC+2 <i>◆</i> Managed Tier 1 <i>◆</i></span>
          <span><b>+ HELIOS OPS</b> <i>◆</i> Kigali Hub <i>◆</i> Dispatch <i>◆</i> Synced UTC+2 <i>◆</i> Managed Tier 1 <i>◆</i></span>
          <span><b>+ HELIOS OPS</b> <i>◆</i> Kigali Hub <i>◆</i> Dispatch <i>◆</i> Synced UTC+2 <i>◆</i> Managed Tier 1 <i>◆</i></span>
        </div></div>
      </section>
    </>
  );
}
