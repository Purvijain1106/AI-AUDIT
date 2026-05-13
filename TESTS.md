# Automated tests

All tests use **Vitest** and live in `src/lib/audit/engine.test.ts`.

| Test | What it covers |
|------|----------------|
| `listBenchmarkMonthly` — Cursor Business | Asserts `$40 × seats` matches PRICING_DATA.md list math. |
| `listBenchmarkMonthly` — Copilot Business | Asserts `$19 × seats` from GitHub billing documentation. |
| `listBenchmarkMonthly` — ChatGPT Team | Asserts minimum 2-seat published math (`25 × max(2, seats)`). |
| `runAudit` — Cursor Business single seat | Right-size path recommends Individual (`$20`) vs `$40` Teams seat. |
| `runAudit` — spend at list | Ensures we **do not** manufacture savings when spend equals list. |
| `runAudit` — OpenAI API cap | Verifies the ~12% conservative FinOps cap and resulting recommendation. |
| `runAudit` — Claude Max writing | Validates Max → Pro downgrade recommendation for writing-heavy profile. |
| `runAudit` — overlap hint | Confirms overlap narrative appears when both Cursor and Copilot carry meaningful spend. |

## How to run

```bash
npm run test
```

CI runs the same command on every push to `main` (`.github/workflows/ci.yml`).
