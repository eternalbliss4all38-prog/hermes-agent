#!/usr/bin/env node
// Generates the 5-email S.A.M.S. nurture sequence as email-client-safe HTML
// into public/campaigns/sme-compliance/emails/. The files double as Listmonk
// templates ({{ UnsubscribeURL }} is Listmonk's tag). Re-run after edits.
const fs = require("fs");
const path = require("path");

const BRAND = {
  name: "S.A.M.S. Compliance",
  bg: "#08070b",
  panel: "#0f0d15",
  border: "#1e1a29",
  accent: "#22d3ee",
  accent2: "#10b981",
  text: "#e7e5f0",
  muted: "#8b87a0",
  toolUrl: "https://audit.samsystem.org",
  offerUrl: "https://payhip.com/b/PRODUCT_ID",
};

const wrap = ({ preheader, title, body, cta }) => `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
</head>
<body style="margin:0;padding:0;background-color:${BRAND.bg};font-family:'Segoe UI',Helvetica,Arial,sans-serif;">
<div style="display:none;max-height:0;overflow:hidden;">${preheader}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BRAND.bg};">
<tr><td align="center" style="padding:32px 16px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
  <tr><td style="padding:0 8px 20px;">
    <span style="font-size:15px;font-weight:700;letter-spacing:0.3em;color:${BRAND.accent2};">S.A.M.S.</span>
    <span style="font-size:12px;letter-spacing:0.1em;color:${BRAND.muted};"> &nbsp;COMPLIANCE</span>
  </td></tr>
  <tr><td style="background-color:${BRAND.panel};border:1px solid ${BRAND.border};border-radius:16px;padding:36px 32px;">
    <h1 style="margin:0 0 18px;font-size:24px;line-height:1.3;color:#ffffff;">${title}</h1>
    <div style="font-size:15px;line-height:1.65;color:${BRAND.text};">${body}</div>
    ${
      cta
        ? `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:28px auto 4px;"><tr><td style="border-radius:10px;background:linear-gradient(90deg,${BRAND.accent2},${BRAND.accent});">
    <a href="${cta.url}" style="display:inline-block;padding:14px 34px;font-size:15px;font-weight:700;color:#04060a;text-decoration:none;">${cta.label}</a>
    </td></tr></table>`
        : ""
    }
  </td></tr>
  <tr><td style="padding:22px 8px;text-align:center;font-size:12px;line-height:1.6;color:${BRAND.muted};">
    You're receiving this because you ran a free compliance audit at
    <a href="${BRAND.toolUrl}" style="color:${BRAND.accent};text-decoration:none;">audit.samsystem.org</a>.<br>
    ${BRAND.name} &middot; <a href="{{ UnsubscribeURL }}" style="color:${BRAND.muted};">Unsubscribe</a>
  </td></tr>
</table>
</td></tr>
</table>
</body>
</html>
`;

const p = (t) => `<p style="margin:0 0 16px;">${t}</p>`;
const li = (items) =>
  `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 16px;">` +
  items
    .map(
      (t) =>
        `<tr><td valign="top" style="padding:5px 12px 5px 0;"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background-color:${BRAND.accent2};"></span></td><td style="font-size:15px;line-height:1.6;color:${BRAND.text};padding:2px 0;">${t}</td></tr>`,
    )
    .join("") +
  `</table>`;
const accent = (t) => `<span style="color:${BRAND.accent};font-weight:600;">${t}</span>`;

const EMAILS = [
  {
    file: "email-1-welcome.html",
    subject: "Your compliance scorecard is ready",
    preheader: "Your risk score, fine exposure, and top gaps — plus what to do first.",
    body:
      p(`Thanks for running your free compliance audit. Your scorecard — risk score, estimated fine exposure, and your top compliance gaps — is ready anytime, and you can re-run it whenever your business changes:`) +
      p(`Here's the honest truth most vendors won't say: a score is only useful if it changes what you do <em>this week</em>. Over the next few days I'll send you exactly ${accent("four short emails")} — what your score means, the mistakes that actually cost businesses money, a 20-minute cleanup, and how to stay audit-ready without thinking about it.`) +
      p(`No spam, no daily blasts. Unsubscribe anytime with one click.`),
    cta: { label: "Open my scorecard", url: BRAND.toolUrl },
  },
  {
    file: "email-2-score-meaning.html",
    subject: "What your risk score actually means",
    preheader: "The three bands, and the one number that matters more than your score.",
    body:
      p(`Your score puts you in one of three bands:`) +
      li([
        `${accent("0–39 · Exposed")} — gaps an auditor would flag on day one. Usually fixable in a week.`,
        `${accent("40–69 · Partial cover")} — the basics exist, but stale documents and missed renewals create quiet risk.`,
        `${accent("70–100 · Audit-ready")} — your job is maintenance, not rescue.`,
      ]) +
      p(`But the number that matters more is your ${accent("estimated fine exposure")} — that's what a single complaint, audit, or missed filing could actually cost. Most owners we score are carrying 5-figure exposure for problems that take under an hour each to fix.`) +
      p(`Tomorrow: the three mistakes that generate most of that exposure.`),
    cta: { label: "Re-check my score", url: BRAND.toolUrl },
  },
  {
    file: "email-3-costly-mistakes.html",
    subject: "The 3 compliance mistakes that cost small businesses the most",
    preheader: "Contractor misclassification, stale privacy policies, lapsed licenses.",
    body:
      p(`Across industries, three mistakes drive the bulk of real-world fines:`) +
      li([
        `${accent("1. Contractor misclassification.")} Treating employees as 1099 contractors is the single most expensive routine violation — back taxes, penalties, and interest stack per worker, per year.`,
        `${accent("2. A privacy policy that doesn't match reality.")} If your site collects emails (like your scorecard did!), your policy must say what you collect and why. Regulators check the gap between the policy and the practice.`,
        `${accent("3. Lapsed licenses & registrations.")} Renewals are boring, so they slip — and operating unlicensed converts every day of business into a separate violation in many states.`,
      ]) +
      p(`Your scorecard flags which of these apply to you. Next email: the 20-minute cleanup that clears the fastest ones.`),
    cta: { label: "See my flagged gaps", url: BRAND.toolUrl },
  },
  {
    file: "email-4-quick-cleanup.html",
    subject: "The 20-minute compliance cleanup",
    preheader: "Four fixes you can finish before your coffee goes cold.",
    body:
      p(`Block 20 minutes. Do these four, in order:`) +
      li([
        `${accent("Minute 0–5:")} List every worker you pay. Anyone working set hours with your tools under your direction is likely an employee — flag them for reclassification review.`,
        `${accent("Minute 5–10:")} Open your website's privacy policy. Delete anything you don't actually do; add what you do collect (email capture counts).`,
        `${accent("Minute 10–15:")} Find your business license and every permit. Put each renewal date in your calendar with a 30-day reminder.`,
        `${accent("Minute 15–20:")} Re-run your scorecard and watch the number move.`,
      ]) +
      p(`Doing this monthly is the difference between the 40s and the 80s on your score. If monthly-manual sounds like exactly the thing you'll stop doing by October — that's what the last email in this series is about.`),
    cta: { label: "Run the audit again", url: BRAND.toolUrl },
  },
  {
    file: "email-5-offer.html",
    subject: "Stay audit-ready all year (without thinking about it)",
    preheader: "S.A.M.S. Compliance Tracker — continuous monitoring for your business.",
    body:
      p(`The free scorecard tells you where you stand ${accent("today")}. The problem is that compliance drifts: licenses lapse, rules change, teams grow.`) +
      p(`${accent("S.A.M.S. Compliance Tracker")} keeps the audit running continuously:`) +
      li([
        `Renewal & filing calendar with reminders that don't let dates slip`,
        `Score tracking over time — see drift before it becomes exposure`,
        `Plain-English alerts when rules change for your industry & state`,
        `Audit-ready document checklist, always current`,
      ]) +
      p(`It's built for owners, not compliance officers — the whole point is that you stop thinking about this.`) +
      p(`This is the last email in this series. Either way, keep the free scorecard — it's yours.`),
    cta: { label: "Start staying audit-ready", url: BRAND.offerUrl },
  },
];

const outDir = path.join(__dirname, "..", "public", "campaigns", "sme-compliance", "emails");
fs.mkdirSync(outDir, { recursive: true });

for (const email of EMAILS) {
  fs.writeFileSync(
    path.join(outDir, email.file),
    wrap({ preheader: email.preheader, title: email.subject, body: email.body, cta: email.cta }),
  );
  console.log("wrote", email.file);
}

const index = `<!doctype html><html><head><meta charset="utf-8"><title>S.A.M.S. Nurture Sequence</title></head>
<body style="margin:0;background:${BRAND.bg};color:${BRAND.text};font-family:'Segoe UI',Helvetica,Arial,sans-serif;padding:40px 16px;">
<div style="max-width:640px;margin:0 auto;">
<h1 style="color:#fff;"><span style="color:${BRAND.accent2};letter-spacing:0.2em;">S.A.M.S.</span> 5-Email Nurture Sequence</h1>
<p style="color:${BRAND.muted};">Click through each email preview. Subjects shown as sent.</p>
${EMAILS.map(
  (e, i) =>
    `<a href="${e.file}" style="display:block;background:${BRAND.panel};border:1px solid ${BRAND.border};border-radius:12px;padding:18px 22px;margin-bottom:12px;color:${BRAND.text};text-decoration:none;">
  <span style="color:${BRAND.accent};font-weight:700;">Email ${i + 1}</span> &nbsp; ${e.subject}<br>
  <span style="font-size:13px;color:${BRAND.muted};">${e.preheader}</span></a>`,
).join("\n")}
</div></body></html>`;
fs.writeFileSync(path.join(outDir, "index.html"), index);
console.log("wrote index.html");
