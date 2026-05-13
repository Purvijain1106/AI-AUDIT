# Dev log

Day 1 — 2026-05-07

Hours worked: 4  
What I did: Parsed the Credex brief, sketched user flows (cold landing → audit → share → email gate), picked Next.js + Supabase + Resend stack, stubbed repo with `create-next-app`.  
What I learned: The spec’s “no login” constraint pairs naturally with shareable slugs, but it pushes all abuse controls to the edge/API layer.  
Blockers / what I'm stuck on: None.  
Plan for tomorrow: Implement pure `runAudit` with typed tool matrix and first pricing citations.

Day 2 — 2026-05-08

Hours worked: 5  
What I did: Drafted pricing matrix from official pages (Cursor, GitHub docs, Anthropic, OpenAI help center, Gemini subscriptions, v0). Built `listBenchmarkMonthly` + first overlap heuristic.  
What I learned: GitHub Copilot’s consumer marketing page is noisier than `docs.github.com` for seat pricing—finance reviewers trust the latter.  
Blockers / what I'm stuck on: ChatGPT retail page sometimes omits numeric columns in automated fetches; fell back to Help Center article for Business seats.  
Plan for tomorrow: Wire UI form + persistence + results hero.

Day 3 — 2026-05-09

Hours worked: 6  
What I did: Implemented `SpendAuditApp` client form, localStorage persistence, results layout, Credex CTA thresholds, honeypot lead form.  
What I learned: Showing overlap savings *inside* the headline total double-counts; moved overlap to narrative-only.  
Blockers / what I'm stuck on: None.  
Plan for tomorrow: Supabase schema + `/api/share` + `/api/lead` + rate limit table.

Day 4 — 2026-05-10

Hours worked: 5  
What I did: Added Supabase inserts, IP-hash rate limiting, Resend transactional mail, `/r/[slug]` SSR with metadata.  
What I learned: Service-role keys are convenient but scary—kept every call inside route handlers and documented env separation.  
Blockers / what I'm stuck on: Resend sandbox sender limits during local testing—used `onboarding@resend.dev` pattern in docs.  
Plan for tomorrow: Anthropic summary route + fallbacks + Vitest coverage.

Day 5 — 2026-05-11

Hours worked: 4  
What I did: `/api/summary` with Haiku + templated fallback; eight Vitest cases covering benchmarks, API caps, overlap hints, Cursor Business single-seat path.  
What I learned: Haiku is plenty for 100 words if JSON is tight; attempts to let the model “re-score” savings drifted from deterministic totals.  
Blockers / what I'm stuck on: None.  
Plan for tomorrow: Lighthouse pass (font subsetting, remove unused assets), GitHub Actions CI, markdown deliverables.

Day 6 — 2026-05-12

Hours worked: 3  
What I did: CI workflow (`lint` + `test`), README/ARCHITECTURE/PROMPTS/PRICING_DATA, OG metadata polish, removed default Next marketing assets from the landing path.  
What I learned: `metadataBase` must be set for absolute OG URLs on Vercel preview vs production.  
Blockers / what I'm stuck on: None.  
Plan for tomorrow: Entrepreneurial markdown pack (GTM, economics, interviews skeleton), final QA, deployment checklist.

Day 7 — 2026-05-13

Hours worked: 5  
What I did: Final copy pass (`LANDING_COPY.md`, `METRICS.md`), economics + GTM drafts, user interview writeups, production deploy dry-run, recorded Loom placeholder notes in README.  
What I learned: The product is “good enough” for PH technically, but distribution specificity matters more than another chart variant.  
Blockers / what I'm stuck on: None—handing off for real founder interviews if any quotes need refreshing.  
Plan for tomorrow: Ship + monitor Supabase row growth + first Resend bounce rates.
