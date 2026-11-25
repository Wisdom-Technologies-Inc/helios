import type { CSSProperties } from "react";
import CalEmbed from "@/components/CalEmbed";
import { CAL_BOOKING_PAGE_URL, LINKEDIN_COMPANY_URL } from "@/lib/config";

export default function Booking() {
  return (
    <>
      <section className="section" id="contact" aria-labelledby="contact-h">
        <div className="wrap">
          {/* Discovery Briefing Context */}
          <div className="contact-briefing reveal">
            <div className="contact-briefing-main">
              <p className="eyebrow">Start The Conversation</p>
              <h2 id="contact-h">Tell us what&rsquo;s <span className="serif-i blue">eating your team&rsquo;s week.</span></h2>
              <p className="lede">Book 25 minutes online — you&rsquo;ll get a <strong>custom pilot scope within 4 hours</strong> of the call, not a generic quote.</p>
              <ol className="agenda">
                <li><span className="no">1</span><div><b>Discovery review</b><p>Your channels, volume, and bottlenecks — Zendesk, Intercom, Gorgias, and wherever customers actually reach you.</p></div></li>
                <li><span className="no">2</span><div><b>Feasibility &amp; schedule</b><p>Tool permissions, language needs, and shift hours — 8x5, 16x5, or full 24/7.</p></div></li>
                <li><span className="no">3</span><div><b>Pilot proposal</b><p>A transparent 2–4 week scoped trial with success targets agreed before any long-term commitment.</p></div></li>
              </ol>
            </div>
            <div className="contact-briefing-side">
              <dl className="facts">
                <div><dt>Station</dt><dd>Kigali, Rwanda (UTC+2)</dd></div>
                <div><dt>Format</dt><dd>25-min video / audio</dd></div>
                <div><dt>Invites</dt><dd>Google Meet / Zoom</dd></div>
                <div><dt>Response</dt><dd>Pilot scope within 4 hours</dd></div>
              </dl>
              <div className="guarantee">
                <h4>Confidentiality guarantee</h4>
                <p>Zero-obligation consultation. Bilateral DPAs are signed before anyone accesses your software or queue credentials — book a call and we&rsquo;ll walk you through it.</p>
              </div>
              <div className="linkedin-note">
                <b>Follow HELIOS on LinkedIn</b> — launch updates and support thinking from the Kigali team. <a href={LINKEDIN_COMPANY_URL} target="_blank" rel="noopener noreferrer">HELIOS Customer Operations on LinkedIn →</a>
              </div>
            </div>
          </div>

          {/* Full-width dedicated booking calendar row */}
          <div className="contact-card contact-card-full reveal" style={{"--d": ".1s"} as CSSProperties}>
            <div className="tab-panel active" id="panelCal">
              <div className="book-card-header">
                <div>
                  <h3>Book your 25-minute Discovery Call</h3>
                  <p className="intro">Pick a time that suits your day and you&rsquo;ll get a Google Meet / Zoom invite by email. The call covers your channels, volume, and what a good pilot would prove.</p>
                </div>
                <ul className="book-list">
                  <li>25 minutes, video or audio — Google Meet / Zoom</li>
                  <li>Your channels, volume, and bottlenecks, in your words</li>
                  <li>A scoped 14-day pilot proposal, usually within 4 hours</li>
                </ul>
              </div>
              <div className="book-embed" id="bookEmbed" tabIndex={-1}>
                {/* Cal.com full-width inline embed */}
                <CalEmbed />
              </div>
              <p className="form-note">Book directly above — times are shown in your local time zone. If the calendar does not load, <a href={CAL_BOOKING_PAGE_URL} target="_blank" rel="noopener noreferrer">open the booking page in a new tab</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
