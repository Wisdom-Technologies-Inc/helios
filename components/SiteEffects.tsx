"use client";

import { useEffect } from "react";

/**
 * Site-wide behaviours ported from the source site's script:
 * reveal-on-scroll, count-up numbers, live Kigali/London/New York clocks
 * (+ shift marker), gentle hero queue variation, marquee duplication,
 * active nav highlighting, and the global booking click behaviour for
 * every [data-book] element (all booking CTAs scroll to the Cal.com
 * embed in the booking section — the site's only contact method).
 */
export default function SiteEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: (() => void)[] = [];

    /* Reveal on scroll */
    const revealEls = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && !reduceMotion) {
      const rio = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("rise");
              rio.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -4% 0px" }
      );
      revealEls.forEach((el) => rio.observe(el));
      cleanups.push(() => rio.disconnect());
    }

    /* Active nav highlighting */
    const navLinks = document.querySelectorAll("nav.main a[data-nav]");
    if ("IntersectionObserver" in window) {
      const nio = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              navLinks.forEach((l) => l.classList.toggle("active", l.getAttribute("data-nav") === e.target.id));
            }
          });
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      ["services", "process", "why-helios", "rwanda", "faq"].forEach((id) => {
        const s = document.getElementById(id);
        if (s) nio.observe(s);
      });
      cleanups.push(() => nio.disconnect());
    }

    /* Marquee: duplicate for seamless loop */
    const track = document.getElementById("marqueeTrack");
    if (track && !track.dataset.duplicated) {
      track.dataset.duplicated = "1";
      track.innerHTML += track.innerHTML;
    }

    /* Count-up numbers */
    function animateCount(el: HTMLElement) {
      const target = parseFloat(el.getAttribute("data-count") || "");
      const decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
      const suffix = el.getAttribute("data-suffix") || "";
      if (reduceMotion || !isFinite(target)) {
        el.textContent = target.toFixed(decimals) + suffix;
        return;
      }
      let start: number | null = null;
      const dur = 1300;
      function frame(ts: number) {
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * eased).toFixed(decimals) + suffix;
        if (p < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    }
    const counters = document.querySelectorAll<HTMLElement>("[data-count]");
    const runCount = (el: HTMLElement) => {
      if (el.dataset.done) return;
      el.dataset.done = "1";
      animateCount(el);
    };
    if ("IntersectionObserver" in window) {
      const cio = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              runCount(e.target as HTMLElement);
              cio.unobserve(e.target);
            }
          });
        },
        { threshold: 0.4 }
      );
      counters.forEach((c) => cio.observe(c));
      cleanups.push(() => cio.disconnect());
    } else {
      counters.forEach(runCount);
    }
    const counterTimeout = setTimeout(() => counters.forEach(runCount), 2600);
    cleanups.push(() => clearTimeout(counterTimeout));

    /* Live clocks + shift bar */
    function fmtTime(tz: string, d: Date, withSec: boolean) {
      try {
        return new Intl.DateTimeFormat("en-GB", {
          timeZone: tz,
          hour: "2-digit",
          minute: "2-digit",
          second: withSec ? "2-digit" : undefined,
          hour12: false,
        }).format(d);
      } catch {
        return "";
      }
    }
    function fmtDate(tz: string, d: Date) {
      try {
        return new Intl.DateTimeFormat("en-GB", { timeZone: tz, weekday: "short", day: "numeric", month: "short" }).format(d);
      } catch {
        return "";
      }
    }
    function catParts(d: Date) {
      try {
        const p = new Intl.DateTimeFormat("en-CA", {
          timeZone: "Africa/Kigali",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).formatToParts(d);
        const o: Record<string, string> = {};
        p.forEach((x) => {
          o[x.type] = x.value;
        });
        return { h: parseInt(o.hour, 10) % 24, m: parseInt(o.minute, 10) };
      } catch {
        return { h: d.getUTCHours() + 2, m: d.getUTCMinutes() };
      }
    }
    function tick() {
      const now = new Date();
      const k = document.getElementById("clockKigali");
      const l = document.getElementById("clockLondon");
      const n = document.getElementById("clockNY");
      if (k) {
        k.textContent = fmtTime("Africa/Kigali", now, true);
        k.setAttribute("datetime", now.toISOString());
      }
      if (l) l.textContent = fmtTime("Europe/London", now, true);
      if (n) n.textContent = fmtTime("America/New_York", now, true);
      const dk = document.getElementById("dateKigali");
      if (dk) dk.textContent = fmtDate("Africa/Kigali", now);
      const dl = document.getElementById("dateLondon");
      if (dl) dl.textContent = fmtDate("Europe/London", now);
      const dn = document.getElementById("dateNY");
      if (dn) dn.textContent = fmtDate("America/New_York", now);
      const hc = document.getElementById("heroClock");
      if (hc) {
        hc.textContent = fmtTime("Africa/Kigali", now, true) + " CAT";
        hc.setAttribute("datetime", now.toISOString());
      }
      const cp = catParts(now);
      const frac = ((cp.h * 60 + cp.m) / 1440) * 100;
      const marker = document.getElementById("shiftNow");
      if (marker) marker.style.left = frac.toFixed(2) + "%";
      const inShift = cp.h >= 8 && cp.h < 20;
      const fl = document.getElementById("fitLondon");
      if (fl) {
        fl.textContent = inShift ? "100% core-hours overlap — pod is live now" : "100% core-hours overlap — next shift 08:00 CAT";
        fl.classList.toggle("off", !inShift);
      }
      const fn = document.getElementById("fitNY");
      if (fn) {
        fn.textContent = inShift ? "Morning-hours overlap — pod is live now" : "Morning-hours overlap — next shift 08:00 CAT";
        fn.classList.toggle("off", !inShift);
      }
    }
    tick();
    const clockInterval = setInterval(tick, 1000);
    cleanups.push(() => clearInterval(clockInterval));

    /* Hero queue: gentle live movement */
    const queueEl = document.getElementById("queueCount");
    const slaEl = document.getElementById("slaMin");
    if (queueEl && !reduceMotion) {
      const qInterval = setInterval(() => {
        if (document.hidden) return;
        queueEl.textContent = String(144 + Math.floor(Math.random() * 9));
        if (slaEl) slaEl.textContent = String(10 + Math.floor(Math.random() * 3));
      }, 5000);
      cleanups.push(() => clearInterval(qInterval));
    }

    /* Global click behaviour: booking CTAs scroll to the Cal.com embed */
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const calEl = target.closest<HTMLElement>("[data-book]");
      if (calEl && !calEl.hasAttribute("data-cal-link")) {
        e.preventDefault();
        const dest = document.getElementById("bookEmbed") || document.getElementById("contact");
        if (dest) {
          dest.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
          setTimeout(() => dest.focus({ preventScroll: true }), reduceMotion ? 0 : 450);
        }
      }
    }
    document.addEventListener("click", onClick);
    cleanups.push(() => document.removeEventListener("click", onClick));

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
