import type { CSSProperties } from "react";
import { CAL_LINK, CAL_NAMESPACE, CAL_POPUP_CONFIG } from "@/lib/config";

export default function Hub() {
  return (
    <>
      <section className="section section-white" id="rwanda" aria-labelledby="rwanda-h">
        <div className="wrap">
          <div className="hub-grid">
            <div className="reveal">
              <p className="eyebrow">Our Operating Base</p>
              <h2 id="rwanda-h">Why Kigali is the <span className="serif-i blue">smartest place</span> to put your support team.</h2>
              <p className="lede">East Africa&rsquo;s leading technology hub — educated talent, modern infrastructure, and a timezone that works <strong>with</strong> your customers, not around them.</p>
              <div className="hub-feats">
                <article><span className="hic"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg></span><div><h3>Timezone that covers your day</h3><p>Central Africa Time (CAT / UTC+2): full-day overlap with the UK and Europe, and morning coverage for US East Coast teams.</p></div></article>
                <article><span className="hic"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 10 12 5 2 10l10 5 10-5z" /><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" /></svg></span><div><h3>Educated, career-driven talent</h3><p>University graduates with strong communication skills, professional discipline, and unusually high domain retention.</p></div></article>
                <article><span className="hic"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" /></svg></span><div><h3>Fast fiber &amp; reliable power</h3><p>Redundant fiber-optic internet and 99%+ grid stability, backed by national digital infrastructure.</p></div></article>
                <article><span className="hic"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /></svg></span><div><h3>Privacy law that mirrors the GDPR</h3><p>Rwanda&rsquo;s Law No. 058/2021 reflects EU GDPR principles — and every client gets a bilateral DPA.</p></div></article>
              </div>
              <figure className="hub-photo">
                <img src="/assets/hub-photo.jpg" alt="Kigali, Rwanda — modern towers rising above the city's green hills" width="1200" height="675" />
                <figcaption>Kigali, Rwanda — the HELIOS operating base <span>CAT · UTC+2</span></figcaption>
              </figure>
              <div style={{marginTop: "1.35rem"} as CSSProperties}><a className="btn" href="#contact" data-book data-cal-namespace={CAL_NAMESPACE} data-cal-link={CAL_LINK} data-cal-config={CAL_POPUP_CONFIG}>Check Timezone Fit &amp; Book a Call
                <svg className="arr" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a></div>
            </div>
            <div className="telemetry reveal" style={{"--d": ".1s"} as CSSProperties} aria-label="Live timezones and hub performance">
              <div className="t-head"><b>Live Timezones · Shift Alignment</b><span className="live-pill"><span className="pulse" aria-hidden="true"></span> Live telemetry</span></div>
              <div className="clock-row">
                <div><h3>HELIOS Station · Kigali</h3><span className="tz">Central Africa Time · UTC+2</span></div>
                <time id="clockKigali" dateTime="">--:--:--</time>
                <span className="date" id="dateKigali"></span>
                <span className="note">Standard coverage 08:00 – 20:00 CAT · custom 24/7 follow-the-sun available</span>
              </div>
              <div className="clock-row">
                <div><h3>London / Europe</h3><span className="tz">GMT / CET · 0 to +1 hr from Kigali</span></div>
                <time id="clockLondon" dateTime="">--:--:--</time>
                <span className="date" id="dateLondon"></span>
                <span className="fit" id="fitLondon">100% core-hours overlap</span>
              </div>
              <div className="clock-row" style={{borderBottom: "0"} as CSSProperties}>
                <div><h3>New York / US East</h3><span className="tz">Eastern Time · 6 hrs behind Kigali</span></div>
                <time id="clockNY" dateTime="">--:--:--</time>
                <span className="date" id="dateNY"></span>
                <span className="fit" id="fitNY">Morning-hours overlap</span>
              </div>
              <div className="shift-bar" aria-label="Kigali shift coverage across the day">
                <div className="sb-label"><span>Shift window</span><span>08:00 – 20:00 CAT</span></div>
                <div className="sb-track"><span className="sb-cover"></span><span className="sb-now" id="shiftNow"></span></div>
                <div className="sb-scale"><span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>24:00</span></div>
              </div>
              <div className="metrics" aria-label="Kigali hub performance metrics">
                <div><b><span data-count="100" data-suffix="%">100%</span></b><span>EU core-hours overlap</span></div>
                <div><b><span data-count="14">14</span> days</b><span>Pilot setup, end to end</span></div>
                <div><b><span data-count="99.9" data-decimals="1" data-suffix="%">99.9%</span></b><span>Fiber uptime</span></div>
              </div>
              <p className="avail">Operational availability: <b>Follow-the-sun 24/7 coverage</b> — your queue is never waiting on a timezone.</p>
            </div>
          </div>
          <figure className="hub-video reveal">
            <video controls preload="metadata" playsInline poster="/assets/hub-video-poster.jpg" aria-label="HELIOS support floor video — agents with headsets working at dashboards and desks">
              <source src="/assets/hub-video.mp4" type="video/mp4" />
              Your browser cannot play this video.
            </video>
            <figcaption>Inside the support floor — agents at work, headsets on, dashboards live <span>66 seconds · Click to play, with sound</span></figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
