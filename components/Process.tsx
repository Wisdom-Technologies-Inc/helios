import type { CSSProperties } from "react";

import { CAL_LINK, CAL_NAMESPACE, CAL_POPUP_CONFIG } from "@/lib/config";
export default function Process() {
  return (
    <>
      <section className="section" id="process" aria-labelledby="process-h">
        <div className="wrap">
          <div className="section-head wide reveal">
            <p className="eyebrow">How We Work</p>
            <h2 id="process-h">From first call to first resolved ticket <span className="serif-i blue">in 14 days.</span></h2>
            <p className="lede">A structured, no-surprises onboarding sequence. Four setup steps, four live steps — each with a clear owner and a clear exit.</p>
          </div>
          <div className="process-wrap">
            <div className="steps">
              <article className="step reveal"><span className="n">01</span><div><p className="phase">Setup Phase</p><h3>Discovery call</h3><p>Ticket volume, channels, and bottlenecks — and what &ldquo;great support&rdquo; means for your team, in your words.</p><span className="dur">Day 1 · 25 minutes</span></div></article>
              <article className="step reveal" style={{"--d": ".05s"} as CSSProperties}><span className="n">02</span><div><p className="phase">Setup Phase</p><h3>Playbook &amp; SOP review</h3><p>Your help articles, macros, and past resolutions become the pod&rsquo;s training set — tone, policy, and edge cases included.</p><span className="dur">Days 1–3 · With your lead</span></div></article>
              <article className="step reveal"><span className="n">03</span><div><p className="phase">Setup Phase</p><h3>Tool &amp; security setup</h3><p>Role-based invitations into your Zendesk, Intercom, or Gorgias — plus a signed bilateral DPA before anyone sees a queue.</p><span className="dur">Days 2–4 · Least-privilege access</span></div></article>
              <article className="step reveal" style={{"--d": ".05s"} as CSSProperties}><span className="n">04</span><div><p className="phase">Setup Phase</p><h3>Clear escalation rules</h3><p>Exactly what agents resolve on the spot — refunds, resets, account fixes — and what goes straight to engineering or finance.</p><span className="dur">Days 3–5 · Written &amp; agreed</span></div></article>
              <article className="step live reveal"><span className="n">05</span><div><p className="phase">Live Phase</p><h3>Agent training &amp; mock tickets</h3><p>Product-specific training and simulated scenarios with your lead. No one touches a live queue until they pass.</p><span className="dur">Days 5–8 · Practice, then prove it</span></div></article>
              <article className="step live reveal" style={{"--d": ".05s"} as CSSProperties}><span className="n">06</span><div><p className="phase">Live Phase</p><h3>Controlled 14-day pilot</h3><p>Real conversations on a contained volume, so you can judge speed, tone, and resolution with nothing long-term at stake.</p><span className="dur">Days 8–14 · Real queues, capped volume</span></div></article>
              <article className="step live reveal"><span className="n">07</span><div><p className="phase">Live Phase</p><h3>Weekly QA &amp; feedback</h3><p>Joint ticket reviews, CSAT audits, and macro calibration — first-contact resolution climbing, week by week.</p><span className="dur">Ongoing · In your Slack</span></div></article>
              <article className="step live reveal" style={{"--d": ".05s"} as CSSProperties}><span className="n">08</span><div><p className="phase">Live Phase</p><h3>Seamless team scaling</h3><p>Once quality targets are met, coverage expands — evenings, weekends, or full 24/7 — at the pace your growth demands.</p><span className="dur">On your signal · No re-onboarding</span></div></article>
            </div>
          </div>
          <div className="process-cta reveal">
            <p>Ready to start Step 01?</p>
            <a className="btn" href="#contact" data-book data-cal-namespace={CAL_NAMESPACE} data-cal-link={CAL_LINK} data-cal-config={CAL_POPUP_CONFIG}>Book a Discovery Call
              <svg className="arr" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
            <a className="link-arrow" href="#faq">How onboarding works, in detail <span className="arr" aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>
    </>
  );
}
