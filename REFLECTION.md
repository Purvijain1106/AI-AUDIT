# Reflection

## 1. The hardest bug you hit this week, and how you debugged it

The nastiest issue was **double-counting savings** when we introduced an “overlap” rule for teams paying for both Cursor and GitHub Copilot. The UI headline summed per-line deltas, and the overlap heuristic also added a blended “cancel the cheaper assistant” number. Finance-style users would (correctly) call that fraud. I formed three hypotheses: (a) overlap was added to totals twice in the reducer, (b) overlap was conceptually duplicate with per-line right-sizing, or (c) the UI was mixing annualized figures with monthly figures. I logged intermediate totals per line in Vitest fixtures, then printed the running total inside `runAudit()` before and after the overlap block—only then was it obvious the overlap belonged strictly in narrative guidance, not the headline sum. The fix was to **detach overlap from `totalSavingsMonthly`** while still surfacing the hint. I locked the behavior with a Vitest case so we cannot regress quietly.

## 2. A decision you reversed mid-week, and what made you reverse it

Mid-week I wired the **Anthropic summary** to run inside a `useEffect()` whenever the public payload changed. It was clean React, but ESLint’s new `react-hooks/set-state-in-effect` rule (via `eslint-config-next`) flagged cascading renders, and more importantly the summary fetch could race if someone clicked “Run audit” twice quickly. I reversed course and moved the fetch **inline into the audit action** so the network call is tied to user intent, not render timing. That removed the race, silenced the lint error without disabling rules globally, and made the UX deterministic: every audit run triggers exactly one summary request.

## 3. What you would build in week 2 if you had it

Week two would focus on **invoice ingestion**—not for ML extraction on day one, but for a guided CSV upload (QuickBooks / Ramp export) that maps line items to known SKUs. I’d add a **seat utilization survey** (“how many Copilot seats logged in last 30d?”) because static pricing without utilization still leaves money on the table. Finally, I’d ship a **Slack share card** renderer so the viral loop isn’t only Twitter links. The hardest part is legal/compliance wording on uploaded finance files, so I’d pair with a simple data retention policy (delete uploads after 24h).

## 4. How you used AI tools (and where they were wrong)

I used **ChatGPT** for brainstorming GTM channels and **Cursor Agent** for boilerplate (API route scaffolding, Zod shapes). I did **not** trust models for pricing numbers—every figure was pulled from vendor pages and copied into `PRICING_DATA.md` first. One concrete failure: ChatGPT insisted ChatGPT Business was still priced like an older “Team” rumor ($30); the Help Center article explicitly listed **$25 monthly / $20 annual** standard seats. If I had trusted the model, the audit engine would have mis-sized savings for one of the most common stacks. That mistake is exactly why the spec’s “LLM for prose only” rule matches how I want to ship.

## 5. Self-rating (1–10) with one sentence each

- **Discipline — 7:** Shipping was steady, but I still chased a few polish items before locking schema migrations.  
- **Code quality — 8:** The audit math is isolated, typed, and tested; API routes are thinner than average side projects.  
- **Design sense — 7:** Visual hierarchy is intentional, though a designer would push the share page further.  
- **Problem-solving — 8:** The double-counting bug needed systematic reasoning, not random tweaks.  
- **Entrepreneurial thinking — 7:** GTM specifics are credible, but real distribution always surprises you once you touch the market.
