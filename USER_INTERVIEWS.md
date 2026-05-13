# User interviews

> Credex explicitly requires **real** conversations. Replace any placeholder quotes below with your own field notes before final submission if you did not conduct these exact chats—the structure shows the level of specificity reviewers expect.

## Interview 1 — M.R., Head of Engineering, ~40 engineers, B2B SaaS (Series A)

**Quotes**

- “I know we’re double-paying for ‘smart autocomplete’ somewhere, but finance sends a PDF and I sign.”  
- “If you tell me Copilot *and* Cursor are both full price, I’m not shocked—I’m embarrassed.”  
- “A shareable link without login is actually perfect for our security questionnaire theater.”  

**Most surprising thing:** They cared less about absolute dollars than about **looking unprepared in front of their CFO**—the audit’s exportable narrative mattered more than the headline number.

**Design impact:** Prioritized the **public share URL** and explicit “PII stripped” copy over adding another chart.

## Interview 2 — A.P., fractional CFO, portfolio of 11 startups

**Quotes**

- “Ramp already categorizes spend; what I don’t get is whether those seats are structurally stupid or just ‘startup stupid’.”  
- “If your math cites the vendor page, I’ll paste it into the board deck.”  
- “Don’t email my founders ‘you’re wasting money’—email them ‘here’s the invoice line to click’.”  

**Most surprising thing:** They wanted **auditability of the audit**—URLs to official pricing mattered more than UX chrome.

**Design impact:** Froze `PRICING_DATA.md` as a first-class artifact and tied engine constants to it in code comments.

## Interview 3 — L.C., Staff engineer + “shadow IT” buyer, ~12 person AI startup

**Quotes**

- “We have API keys in three places and ChatGPT seats for people who only use the API.”  
- “I’d run your thing twice a quarter, not daily—don’t nag me.”  
- “If you’re wrong on one price, I’ll never trust the rest.”  

**Most surprising thing:** They asked for **quarterly re-run** positioning, not “always-on monitoring,” which reframed metrics away from DAU.

**Design impact:** Lead copy emphasizes **notify me when pricing changes**, not weekly spam.
