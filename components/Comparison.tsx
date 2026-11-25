
import { CAL_LINK, CAL_NAMESPACE, CAL_POPUP_CONFIG } from "@/lib/config";
export default function Comparison() {
  return (
    <>
      <section className="section" aria-labelledby="matrix-h">
        <div className="wrap">
          <div className="matrix-head reveal">
            <div className="section-head">
              <p className="eyebrow">Decision Matrix</p>
              <h2 id="matrix-h">Three ways to staff support. <span className="serif-i blue">Only one scales cleanly.</span></h2>
              <p className="lede">The trade-offs, side by side — cost, speed, focus, and who actually owns your customer data.</p>
            </div>
            <p className="matrix-note">Every figure below is the <b>all-in comparison</b> teams ask for first: what it costs, how fast it starts, and what breaks when people leave.</p>
          </div>
          <div className="table-wrap reveal">
            <table className="compare">
              <thead><tr>
                <th scope="col">Dimension</th>
                <th scope="col">Domestic In-House<span className="sub">Hire &amp; manage it yourself</span></th>
                <th scope="col">Legacy Call Center (BPO)<span className="sub">Shared, high-volume floors</span></th>
                <th scope="col" className="helios"><span className="rec-tag">Recommended</span><br />HELIOS Dedicated Pod<span className="sub">Your team, in Kigali</span></th>
              </tr></thead>
              <tbody>
                <tr><th scope="row"><span className="ric"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg></span>Monthly cost / agent</th>
                  <td><b>$4,500 – $6,500+</b>Salary, taxes, benefits &amp; desk hardware</td>
                  <td><b>$2,800 – $4,000</b>Hidden overhead &amp; markup fees</td>
                  <td className="helios"><b><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>Predictable, flat transparent rate</b>Up to 65% cost savings with zero hidden fees</td></tr>
                <tr><th scope="row"><span className="ric"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></span>Ramp-up &amp; first ticket</th>
                  <td><b>60 – 90 days</b>Recruiting, interviewing &amp; onboarding delay</td>
                  <td><b>30 – 45 days</b>Slow corporate contract cycles</td>
                  <td className="helios"><b><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>10 – 14 days</b>Vetted talent ready to begin a 14-day evaluation pilot</td></tr>
                <tr><th scope="row"><span className="ric"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" /></svg></span>Team model &amp; focus</th>
                  <td><b>Dedicated in-house</b>High internal HR &amp; management overhead</td>
                  <td><b>Shared mass call center</b>Agents juggle 4–6 client brands simultaneously</td>
                  <td className="helios"><b><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>100% dedicated pod</b>Agents work exclusively for your brand and product</td></tr>
                <tr><th scope="row"><span className="ric"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg></span>Annual agent turnover</th>
                  <td><b>35% – 50%</b>Frequent re-hiring and lost domain knowledge</td>
                  <td><b>100%+ annual churn</b>Constant new trainees answering your customers</td>
                  <td className="helios"><b><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>&lt; 8% annual turnover</b>Competitive career salaries &amp; local career development</td></tr>
                <tr><th scope="row"><span className="ric"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg></span>Tooling &amp; data control</th>
                  <td><b>Full internal access</b>Your own workspace and security rules</td>
                  <td><b>Black-box proprietary CRM</b>Data siloed; ticket logs difficult to export</td>
                  <td className="helios"><b><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>Works directly in your tools</b>Zendesk, Intercom, Gorgias or Slack with signed DPA</td></tr>
                <tr><th scope="row"><span className="ric"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m17 11-5-5-5 5" /><path d="m17 18-5-5-5 5" /></svg></span>Escalations &amp; handoffs</th>
                  <td><b>Direct Slack sync</b>Fast internal communication</td>
                  <td><b>Impersonal ticketing queues</b>Dropped context and robotic macro responses</td>
                  <td className="helios"><b><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>Written SOPs + Slack integration</b>80%+ Tier-1 resolution with structured bug repro logs</td></tr>
              </tbody>
            </table>
          </div>
          <div className="matrix-strip reveal">
            <div><b>14 days to proof</b>Real queues, contained volume, success targets agreed before day one.</div>
            <div><b>Zero data silos</b>Every interaction stays in your workspace. Nothing is copied or exported.</div>
            <div><b>Knowledge that stays</b>Sub-8% turnover means your playbook doesn&rsquo;t walk out the door.</div>
          </div>
          <div className="table-cta reveal">
            <p>Don&rsquo;t take our word for it — <strong>test the pod on your own tickets</strong> for 14 days.</p>
            <a className="btn" href="#contact" data-book data-cal-namespace={CAL_NAMESPACE} data-cal-link={CAL_LINK} data-cal-config={CAL_POPUP_CONFIG}>Book a Discovery Call
              <svg className="arr" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
          </div>
        </div>
      </section>
    </>
  );
}
