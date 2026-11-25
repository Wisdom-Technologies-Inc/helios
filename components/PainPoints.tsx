import type { CSSProperties } from "react";
import { CAL_LINK, CAL_NAMESPACE, CAL_POPUP_CONFIG } from "@/lib/config";

export default function PainPoints() {
  return (
    <>
      <section className="section section-white" id="why-it-matters" aria-labelledby="pain-h">
        <div className="wrap">
          <div className="pain-grid">
            <div className="reveal">
              <p className="eyebrow">Why It Matters</p>
              <h2 id="pain-h">Your customers may not complain. <span className="serif-i blue">They may simply leave.</span></h2>
              <p className="lede">Slow responses. Unresolved issues. Lost trust. Most unhappy customers never tell you — they quietly take their business elsewhere.</p>
              <div className="pain-cards">
                <article className="pain-card"><span className="num">01</span><div><h3>Lost customer trust</h3><p>Delayed responses can frustrate customers — and once trust slips, it is hard to win back.</p></div></article>
                <article className="pain-card"><span className="num">02</span><div><h3>Missed sales opportunities</h3><p>Slow replies can drive potential buyers away, often to a competitor who answers first.</p></div></article>
                <article className="pain-card"><span className="num">03</span><div><h3>Lower customer loyalty</h3><p>Poor support experiences can discourage repeat business, even when the product itself is good.</p></div></article>
              </div>
              <p className="pain-note">Better support. Stronger customer relationships. <a href="#services">See how a dedicated HELIOS pod answers</a> — or <a href="#contact" data-book data-cal-namespace={CAL_NAMESPACE} data-cal-link={CAL_LINK} data-cal-config={CAL_POPUP_CONFIG}>book a 25-minute Discovery Call online</a>.</p>
            </div>
            <figure className="pain-photo reveal" style={{"--d": ".1s"} as CSSProperties}>
              <img src="/assets/pain-photo.jpg" alt="A customer looking concerned while waiting at a laptop, from the HELIOS 'Your customers may not complain' poster" width="324" height="760" loading="lazy" />
              <figcaption>Slow responses. Unresolved issues. Lost trust.<span>From the HELIOS campaign — better support, stronger relationships.</span></figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
