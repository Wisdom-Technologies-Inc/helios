"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { FAQS, FAQ_CATEGORIES } from "@/lib/data";


export default function Faq() {
  const [term, setTerm] = useState("");
  const [cat, setCat] = useState<string>("all");
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));
  const listRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const shown = useMemo(() => {
    const t = term.trim().toLowerCase();
    return FAQS.map((f, i) => ({ f, i })).filter(({ f }) => {
      const matchCat = cat === "all" || f.cat === cat;
      const matchTerm = !t || (f.q + " " + f.a + " " + f.tag).toLowerCase().includes(t);
      return matchCat && matchTerm;
    });
  }, [term, cat]);

  // Mirror the source behaviour: animate answer height from scrollHeight.
  useEffect(() => {
    listRef.current?.querySelectorAll<HTMLElement>(".faq-item").forEach((item) => {
      const ans = item.querySelector<HTMLElement>(".faq-a");
      const isOpen = item.dataset.open === "true";
      if (ans) ans.style.maxHeight = isOpen ? ans.scrollHeight + "px" : "0px";
    });
  }, [open, shown]);

  function toggle(i: number) {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  }

  function askTeam() {
    const dest = document.getElementById("bookEmbed") || document.getElementById("contact");
    dest?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => dest?.focus({ preventScroll: true }), 450);
  }

  return (
    <>
      <section className="section section-white" id="faq" aria-labelledby="faq-h">
        <div className="wrap">
          <div className="faq-layout">
            <div className="faq-side reveal">
              <p className="eyebrow">Common Inquiries</p>
              <h2 id="faq-h">Answers, <span className="serif-i blue">before you ask.</span></h2>
              <p className="lede">Onboarding, tools, coverage, security, and quality — the questions every team asks before a pilot.</p>
              <div className="search-box">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                <input type="text" id="faqSearch" aria-label="Search questions" placeholder="Search — try “SOPs”, “tools”, or “security”" autoComplete="off" ref={searchRef} value={term} onChange={(e) => setTerm(e.target.value)} />
                <button className={"search-clear" + (term.length > 0 ? " show" : "")} id="faqClear" type="button" aria-label="Clear search" onClick={() => { setTerm(""); searchRef.current?.focus(); }}>×</button>
              </div>
              <div className="faq-chips" role="group" aria-label="Filter questions by topic" id="faqChips">
                {FAQ_CATEGORIES.map((c) => (
                  <button key={c.cat} className="fchip" type="button" data-cat={c.cat} aria-pressed={cat === c.cat} onClick={() => setCat(c.cat)}>{c.label}</button>
                ))}
              </div>
              <p className="faq-count" id="faqCount" role="status">{"Showing " + shown.length + " of 10 questions" + (term.trim() ? " for \u201C" + term.trim() + "\u201D" : "")}</p>
            </div>
            <div className="reveal" style={{"--d": ".1s"} as CSSProperties}>
              <div className="faq-list" id="faqList" ref={listRef}>
                {shown.map(({ f, i }) => (
                  <div key={f.q} className={"faq-item" + (open.has(i) ? " open" : "")} data-cat={f.cat} data-open={open.has(i)}>
                    <button className="faq-q" type="button" aria-expanded={open.has(i)} onClick={() => toggle(i)}>
                      <span>{f.q}</span>
                      <span className="chev"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></span>
                    </button>
                    <div className="faq-a">
                      <span className="tagline">{f.tag}</span>
                      <p>{f.a}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={"faq-empty" + (shown.length === 0 ? " show" : "")} id="faqEmpty">Nothing matches that search. Try “pilot”, “Zendesk”, or “DPA” — or ask the team directly below and we&rsquo;ll answer plainly.</div>
              <p className="faq-foot">Still unsure about something? <button type="button" id="askTeamBtn" onClick={askTeam}>Book a call with our team</button> — you&rsquo;ll get a straight answer, not a sales script.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
