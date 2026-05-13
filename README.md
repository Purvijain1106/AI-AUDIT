# Spend Signal

Spend Signal is a free, no-login web audit that benchmarks a startup’s AI tool stack against **published vendor list prices**, flags tier mismatches and overlapping coding assistants, and produces a **shareable, PII-free URL** with Open Graph metadata. It is aimed at **founders and engineering managers** who own the AI tooling budget and want a second opinion before renewing contracts.

**Live demo:** add your deployed URL after `vercel deploy` (see README Quick start).

## Screenshots

_Add 3+ screenshots here (hero + form, results hero, share view) or a 30s Loom/YouTube link._

## Quick start

```bash
npm install
cp .env.example .env.local
# Fill Supabase + optional Resend + Anthropic keys (see README env section)
npm run dev
```

Open http://localhost:3000

### Supabase setup

1. Create a Supabase project.  
2. Run SQL in `supabase/schema.sql` in the SQL editor.  
3. Copy **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`  
4. Copy **service role** key → `SUPABASE_SERVICE_ROLE_KEY` (server only; never expose to client).

### Deploy (Vercel)

1. Push this repo to GitHub.  
2. Import in Vercel; set the same environment variables.  
3. Set `NEXT_PUBLIC_APP_URL` to the production origin (used for share links + metadata).  
4. `npm run build` must pass locally first.

## Environment variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `NEXT_PUBLIC_APP_URL` | Prod strongly recommended | Canonical URL for share links + `metadataBase` |
| `NEXT_PUBLIC_SUPABASE_URL` | For share + leads | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | For share + leads | Inserts reads for shared audits + leads (server only) |
| `RESEND_API_KEY` | Optional | Transactional email on lead capture |
| `RESEND_FROM_EMAIL` | Optional | Verified sender in Resend |
| `ANTHROPIC_API_KEY` | Optional | AI summary; falls back to template if missing |

## Abuse protection

We combine:

1. **Honeypot field** (`companyWebsite`) hidden off-screen — bots that auto-fill every input trip it and get a silent 200 with no DB side effect for spam payloads.  
2. **Per-IP soft rate limit** — hashed IP (`sha256` of `x-forwarded-for` / `x-real-ip`) max **25** submissions/hour to `submission_events` in Supabase. Prevents spray attacks without friction for humans.  

Why not hCaptcha on day one: honeypot + IP throttling ship without third-party keys and keep Lighthouse frictionless; hCaptcha is the obvious upgrade if spam persists.

## Decisions (trade-offs)

1. **Hardcoded audit engine vs LLM math** — Rules + published prices are auditable by finance; the LLM only narrates. Slightly more maintenance when vendors change prices.  
2. **Supabase service role on server routes** — Simplifies RLS for a tiny schema; everything sensitive stays server-side.  
3. **Overlap savings shown as narrative only** — Prevents double-counting overlap with per-line deltas while still surfacing the “two IDEs” issue.  
4. **Haiku for summaries** — Cost/latency friendly; quality is “good enough” for a paragraph beside hard numbers.  
5. **No auth** — Faster cold traffic conversion; share links rely on unguessable slugs instead of accounts.

## Scripts

- `npm run dev` — local dev  
- `npm run build` / `npm start` — production  
- `npm run lint` — ESLint  
- `npm run test` — Vitest (`src/lib/audit/engine.test.ts`)

## License

Private / assessment use — adjust for your org.
