/* Service selector + FAQ data — ported verbatim from the approved HTML site. */

export interface SvcData {
  title: string;
  tools: string[];
  desc: string;
  checks: string[];
  kpis: [string, string][];
  kpiLabel: string;
  kpiValue: string;
  /** Contains a <b> lead-in, as in the source site. */
  promise: string;
  tab: string;
}

export type SvcKey = "email" | "chat" | "tech" | "ops";

export const SVC_DATA = {
    email: {title:"Email & Helpdesk Ticketing", tools:["Zendesk","Intercom","Gorgias"], desc:"Your inbox, handled like it belongs to you — billing, access, and product questions resolved in your voice, within your SLAs, with every decision traceable in your own workspace.", checks:["First response under 15 minutes during shift hours","Structured tagging so bugs reach engineering with context intact","Macros refined continuously from real customer repeats"], kpis:[["< 15 min","First response in shift"],["80%+","Resolved at Tier 1"],["100%","Answered in your brand voice"]], kpiLabel:"First response", kpiValue:"Under 15 min", promise:"<b>Your queue, owned.</b> No ticket left aging, no customer left guessing.", tab:"tab-email"},
    chat: {title:"Live Chat & In-App Messaging", tools:["Intercom","Zendesk","Front"], desc:"Help at the exact moment a visitor needs it. The pod answers in real time, unblocks trials, and hands warm, qualified leads to your team with full context.", checks:["Live coverage through your busiest visitor hours","Trial troubleshooting with a clear next step, every time","Warm handoffs — sales sees the conversation, not a cold lead"], kpis:[["Live","Covering peak visitor hours"],["Same visit","Questions answered in-session"],["Warm","Handoffs with full context"]], kpiLabel:"Coverage", kpiValue:"Peak hours, live", promise:"<b>Fewer drop-offs.</b> Visitors get answers before they give up and leave.", tab:"tab-chat"},
    tech: {title:"Tier-1 Technical & Bug Reproduction", tools:["Linear","Slack","Zendesk"], desc:"Vague bug reports become clean, reproducible evidence. The pod diagnoses errors, gathers logs, and writes repro steps your engineers can act on immediately.", checks:["Structured repro logs: steps, environment, console output","Error details gathered before anything escalates","80%+ of technical tickets resolved without engineering time"], kpis:[["80%+","Tier-1 resolution rate"],["Steps + logs","In every escalation"],["Hours saved","For your engineers, weekly"]], kpiLabel:"Tier-1 resolution", kpiValue:"80%+", promise:"<b>Signal, not noise.</b> Engineering gets repro steps — never “it’s broken”.", tab:"tab-tech"},
    ops: {title:"KYC & Back-Office Processing", tools:["Notion","HubSpot","Salesforce"], desc:"The repetitive work that quietly eats afternoons: ID reviews, account approvals, refunds, and CRM hygiene — executed to the letter of written SOPs, on schedule.", checks:["ID review and approvals against documented criteria","Refunds processed strictly inside your stated boundaries","CRM records kept clean, consistent, and trustworthy"], kpis:[["SOP-first","Every task, documented"],["On schedule","Daily and weekly cycles"],["Clean","CRM you can rely on"]], kpiLabel:"How it runs", kpiValue:"SOP-governed", promise:"<b>Done properly, every time.</b> Back-office work your team never has to redo.", tab:"tab-ops"}
  }

export interface Faq {
  cat: string;
  tag: string;
  q: string;
  a: string;
}

export const FAQS = [
    {cat:"onboarding", tag:"Onboarding · SOP training", q:"How does onboarding and SOP training work?", a:"It runs over the first one to two weeks. Your runbooks, knowledge-base articles, and past resolutions become the pod's training material. Agents practise on mock tickets with your lead, draft pre-approved macros together, and agree explicit resolve-vs-escalate criteria before any live queue is touched."},
    {cat:"tools", tag:"Tools · Integrations", q:"Can HELIOS agents work inside our Zendesk, Intercom, or Freshdesk?", a:"Yes — that is the whole model. Agents work directly in your Zendesk, Intercom, Freshdesk, Gorgias, or Slack, under role-based permissions you control. There is no new platform for your team to learn, and a bilateral DPA is signed before anyone is invited in."},
    {cat:"coverage", tag:"Coverage · Timezones", q:"Which timezones and hours can HELIOS cover?", a:"The Kigali hub runs on Central Africa Time (CAT / UTC+2): full-day overlap with the UK and Europe, plus morning coverage for US East Coast teams. Standard coverage is 08:00–20:00 CAT, with custom 24/7 follow-the-sun coverage when your volume needs it."},
    {cat:"coverage", tag:"Coverage · Shift models", q:"What shift models do you offer?", a:"8x5, 16x5, and 24/7 — including evening and weekend expansion after the pilot. The model is chosen on the discovery call from your actual volume and the hours your customers write in, not from a fixed menu."},
    {cat:"onboarding", tag:"Onboarding · Pilot", q:"Can we start with a trial before committing?", a:"Yes. The standard start is a 14-day evaluation pilot on a contained volume of real tickets, with success targets agreed in advance and no long-term commitment. Larger scoped trials of two to four weeks are structured the same way on the discovery call."},
    {cat:"security", tag:"Security · Data protection", q:"How is our customer data safeguarded?", a:"Agents work only inside your tools — HELIOS stores no customer data locally and never copies or exports ticket data. Access uses isolated corporate credentials with mandatory MFA and role-scoped permissions, on managed encrypted devices, under a bilateral DPA aligned with Rwanda's Law No. 058/2021 and EU GDPR principles."},
    {cat:"quality", tag:"Quality · Coaching", q:"How do you keep quality high — and answers human?", a:"Three mechanisms, every week: random ticket audits, CSAT breakdowns, and SLA scorecards shared in your Slack channel. Macros are pre-approved and calibrated from real tickets, and coaching targets the actual problem in each answer — so agents solve, rather than paste."},
    {cat:"quality", tag:"Quality · Escalations", q:"What happens when an issue needs engineering or product?", a:"Written SOPs draw the line in advance: what agents resolve immediately, and what escalates. Escalations travel with structured bug-reproduction logs — steps, environment, console details — to your engineering or finance team on Slack, so context is never dropped between teams."},
    {cat:"onboarding", tag:"Onboarding · People", q:"Who are the agents, and why do they stay?", a:"Dedicated career specialists: university graduates in Kigali, paid competitive career wages, with structured training and local career development. Annual turnover is under 8%, and your pod works only for your brand — so the product knowledge your customers rely on stays with your team."},
    {cat:"coverage", tag:"Coverage · Ramp-up", q:"How fast can a new pod actually start?", a:"Ten to fourteen days from discovery call to first live tickets. Vetted talent is ready to begin the evaluation pilot immediately, with SOP review, tool setup, and mock-ticket training completed alongside your lead before live work begins."}
  ]

export const FAQ_CATEGORIES = [
  { cat: "all", label: "All questions" },
  { cat: "onboarding", label: "Onboarding" },
  { cat: "tools", label: "Tools" },
  { cat: "coverage", label: "Coverage" },
  { cat: "security", label: "Security" },
  { cat: "quality", label: "Quality" },
] as const;
