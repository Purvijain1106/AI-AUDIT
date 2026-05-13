# Metrics

## North Star

**Qualified audits completed per week where modeled savings exceed $500/mo and the user creates a share link.**  
Why: the product is a lead-gen bridge, not a daily habit tool. A share link signals internal distribution (CFO, board, peers), and the $500 threshold correlates with a conversation worth a human’s time. Vanity “total signups” would let low-intent traffic pollute the signal.

## Three input metrics that drive the North Star

1. **Audit completion rate** — landing visits → finished audits. If this is weak, the form is too long or the promise is unclear.  
2. **High-savings cohort rate** — audits with `highSavings = true` (engine flag). If this is near zero, either traffic is too small-company or pricing assumptions are too conservative.  
3. **Share link creation rate** — audits where `/api/share` succeeds. This is the viral coefficient’s numerator; without shares, the tool is a private calculator.

## What to instrument first

- **Client event:** `audit_run` with anonymized attributes `{ bucketed_team_size, use_case, tool_count, high_savings_bool }`.  
- **Server event:** `share_created` with `{ slug, savings_bucket }` (no email).  
- **Server event:** `lead_submitted` with `{ has_company, has_role }` booleans only.

Use whatever analytics sink you trust (PostHog, Segment, Supabase logs); the important part is keeping **email off the event stream**.

## Pivot triggers

- If **audit completion < 25%** after 1,000 landing sessions, simplify the form (fewer tools shown by default, progressive disclosure).  
- If **share link creation < 5%** of audits, the share UX is failing—likely missing OG preview trust or unclear value of the link.  
- If **high-savings cohort < 8%** of audits for four straight weeks while traffic is on-target ICP, revisit pricing tables and overlap rules—the model may be too timid to be commercially interesting.
