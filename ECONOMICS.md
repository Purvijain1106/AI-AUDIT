# Unit economics (Credex lens)

This section models Spend Signal as a **B2B lead-gen wedge** where revenue is downstream credit sales, not SaaS subscriptions.

## What a converted lead is worth (rough)

Assume a median enterprise buys **$60k of annualized AI credits** after negotiation (some mix of Cursor, OpenAI, Anthropic). Credex’s take is highly variable, but use **8% gross margin** on facilitated GMV as a placeholder for broker economics after vendor pass-through: **$4.8k gross profit per closed account per year**. If you prefer contribution after human sales time, cut that in half—**$2.4k**—and the math below still works directionally.

## CAC by channel (from the GTM plan)

| Channel | CAC estimate | Reasoning |
|---------|--------------|-----------|
| Warm X DM audits | $0 cash, ~$40 time cost | 20 DMs × 10 minutes at a fully loaded $120/hr manager rate. |
| Fractional CFO forwards | $150 | One nice dinner / thank-you gift or reciprocal intro, amortized across 5 forwarded audits. |
| HN Show | $0 | Sunk engineering time already spent building. |
| Newsletter blurbs | $0–$200 | Some editors want a small sponsorship; others take free if the tool is useful. |

Blended **30-day CAC** for the first hundred users should stay **under $500 total cash** if the team leans on outbound and community, not ads.

## Conversion funnel math

Let:

- `A` = audits completed  
- `C1` = audit → Credex consultation booked  
- `C2` = consultation → credit purchase  

Illustrative path to **$50k contribution/year** (conservative win):

- Need **~11 closes** at $4.8k margin each.  
- If `C2 = 25%`, need **44 consultations**.  
- If `C1 = 12%` of audits, need **~367 audits/month** sustained—high for month one, plausible by month six with SEO + repeats.

More important than exact constants: **if `C1` < 5%`**, the product is entertainment, not lead gen—pivot the CTA or tighten ICP messaging. **If `C2` < 15%`**, the consultation offer is mistargeted (wrong buyer in room).

## Path to $1M ARR in 18 months (what must be true)

Using **$4.8k margin/year per customer** again:

- $1,000,000 / $4.8k ≈ **209 active credit customers** at steady state.  
- At **18 months**, you need net new velocity of ~12 customers/month late in the window if ramp is linear (simplified).  

What must be true:

1. **Average GMV per customer** rises above the $60k placeholder (deeper seats, multi-vendor bundles).  
2. **Sales cycle** stays under 45 days for sub-$100k deals so pipeline coverage is manageable.  
3. **Audit → consult** conversion exceeds **8%** among accounts with **>$500/mo modeled savings** (the in-product flag).  
4. **Churn** on credits is low—enterprises renew models annually; if churn is high, LTV collapses.

Even if all inputs move ±30%, the exercise says the same thing: **this tool only works as ARR infrastructure if the high-savings cohort is nurtured manually**, not with automated drip spam.
