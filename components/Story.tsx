import type { CSSProperties } from "react";

export default function Story() {
  return (
    <>
      <section className="section section-tint" id="about" aria-labelledby="story-h">
        <div className="wrap">
          <div className="story-grid">
            <div className="reveal">
              <div className="story-media">
                <div className="story-photo">
                  <img src="/assets/story-poster.jpg" alt="HELIOS Customer Operations launch poster — Introducing HELIOS, reliable support and better customer experiences, with a smiling headset specialist" width="1374" height="1145" />
                  <div className="story-caption">
                    <div><b>Introducing HELIOS</b><span>Reliable support · Better customer experiences</span></div>
                    <em>Kigali, Rwanda</em>
                  </div>
                </div>
              </div>
              <blockquote className="story-quote">“Support is a craft. We hire for patience, train for precision, and measure everything — so your customers feel cared for, not processed.”
                <cite>— The HELIOS operating principle</cite>
              </blockquote>
            </div>
            <div className="story-body reveal" style={{"--d": ".1s"} as CSSProperties}>
              <p className="eyebrow">Our Story &amp; Mission</p>
              <h2 id="story-h">Built in Kigali, <span className="serif-i blue">for teams who refuse generic support.</span></h2>
              <p>HELIOS began with a simple frustration: growing startups were forced to choose between <strong>expensive domestic hiring</strong> and <strong>impersonal mega call centers</strong> where no one knew their product. We built a third option.</p>
              <p>We recruit Rwanda&rsquo;s top graduates, pay career wages, and train them deeply on one thing — <strong>your product, your voice, your customers</strong>. The result is a pod that feels like the team you would have hired, without the payroll, the recruiting cycle, or the churn.</p>
              <p>We serve <strong>SaaS companies, technology startups, e-commerce businesses, and growing companies</strong> in the United States, United Kingdom, Canada, Europe, and Australia — with professionalism, reliability, clear communication, and quality support at our core.</p>
              <ol className="values">
                <li><span className="num">01</span><div><h4>Customer empathy, first</h4><p>Solve the real problem with patience and clear guidance. Templates support the answer — they never replace it.</p></div></li>
                <li><span className="num">02</span><div><h4>Radical transparency</h4><p>Honest answers on capability, SLA limits, and turnaround. Flat pricing, no hidden fees, scorecards you can actually read.</p></div></li>
                <li><span className="num">03</span><div><h4>Direct accountability</h4><p>Issues are owned, not bounced. Recurring bugs are flagged to your engineers early, with evidence — not hidden in a queue.</p></div></li>
                <li><span className="num">04</span><div><h4>Coaching that compounds</h4><p>Weekly audits and CSAT feedback feed straight back into training, so accuracy rises week over week.</p></div></li>
              </ol>
            </div>
          </div>
          <div className="leadership reveal" id="leadership">
            <div className="lead-head">
              <div>
                <p className="eyebrow" style={{marginBottom: ".6rem"} as CSSProperties}>Leadership</p>
                <h3>The people behind HELIOS</h3>
              </div>
              <p>Connect directly on LinkedIn. More team profiles will be added here as they are shared.</p>
            </div>
            <div className="lead-grid">
              <article className="lead-card">
                <span className="lead-avatar"><img src="/assets/logo-mark.png" alt="" width="112" height="112" loading="lazy" /></span>
                <span className="lead-tag">Leadership</span>
                <h4>Cyubahiro Ange Patrick</h4>
                <p>Connect on LinkedIn to follow HELIOS and reach the leadership team directly.</p>
                <a className="btn btn-linkedin btn-sm" href="https://www.linkedin.com/in/cyubahiro-ange-patrick-7389523b1" target="_blank" rel="noopener noreferrer">Connect on LinkedIn
                  <svg className="arr" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
              </article>
              <article className="lead-card">
                <span className="lead-avatar"><img src="/assets/logo-mark.png" alt="" width="112" height="112" loading="lazy" /></span>
                <span className="lead-tag">Leadership</span>
                <h4>Kayitare Thierry</h4>
                <p>Connect on LinkedIn to follow HELIOS and reach the leadership team directly.</p>
                <a className="btn btn-linkedin btn-sm" href="https://www.linkedin.com/in/kayitare-thierry-2b771236b" target="_blank" rel="noopener noreferrer">Connect on LinkedIn
                  <svg className="arr" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
              </article>
              <article className="lead-card">
                <span className="lead-avatar"><img src="/assets/logo-mark.png" alt="HELIOS logo mark" width="112" height="112" loading="lazy" /></span>
                <span className="lead-tag">Company page</span>
                <h4>HELIOS Customer Operations</h4>
                <p>Follow the company on LinkedIn for launch updates, support thinking, and new roles.</p>
                <a className="btn btn-linkedin btn-sm" href="https://www.linkedin.com/company/helios-customer-operations/" target="_blank" rel="noopener noreferrer">Follow on LinkedIn
                  <svg className="arr" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
