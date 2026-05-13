# LLM prompts

## Feature: personalized audit blurb (~100 words)

**Model:** `claude-3-5-haiku-20241022` (Anthropic Messages API)  
**Where:** `src/app/api/summary/route.ts`

### System / user content (single user turn)

The route sends one user message:

```
You are Spend Signal, an AI-spend analyst. Write ONE tight paragraph, max 100 words, in confident neutral tone. No markdown. Reference concrete numbers from the JSON. Do not invent tools not listed.

DATA:
{JSON blob with teamSize, useCase, totals, lines[], wellOptimized, highSavings}
```

### Why this shape

- **Single paragraph** keeps the UI scannable next to deterministic math; users should trust numbers from the engine, not prose.  
- **Explicit JSON** avoids the model “hallucinating” tools the user never entered.  
- **Max 100 words** matches the assignment and keeps latency/cost low on Haiku.  
- **No markdown** simplifies rendering (plain `<p>`).  

### Failure handling

If `ANTHROPIC_API_KEY` is missing or the API errors, we fall back to templated copy derived only from `totals` and flags (`wellOptimized`, `highSavings`) so the page never blocks.

### What did not work (during design)

- Asking the model to “recompute savings” produced inconsistent totals vs `runAudit()` — we removed that and hard-banned arithmetic in the prompt.  
- Long system prompts with marketing superlatives read generic; short analyst voice tested better with interviewees (see `USER_INTERVIEWS.md`).
