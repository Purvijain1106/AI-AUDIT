import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import { publicAuditPayloadSchema } from "@/lib/schemas";

function fallbackSummary(payload: {
  totals: { savingsMonthly: number; currentMonthly: number };
  wellOptimized: boolean;
  highSavings: boolean;
}): string {
  if (payload.wellOptimized) {
    return `Your modeled stack is already close to published list prices, with about $${Math.round(payload.totals.savingsMonthly)} per month left on the table. The next wins are mostly operational—invoice hygiene, seat audits, and making sure API usage is not duplicated by redundant chat licenses.`;
  }
  if (payload.highSavings) {
    return `The audit points to roughly $${Math.round(payload.totals.savingsMonthly)} per month in structural savings before any credit-market discounts. That usually means tier mismatches, overlapping coding assistants, or API bills that deserve a committed-use conversation—not small line-item noise.`;
  }
  return `Across the tools you entered, we estimate about $${Math.round(payload.totals.savingsMonthly)} per month in addressable savings versus published pricing and common right-sizing patterns. Focus on the highest per-seat deltas first, then validate whether overlapping assistants are intentional.`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = publicAuditPayloadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "invalid_payload" }, { status: 400 });
    }
    const p = parsed.data;
    const key = process.env.ANTHROPIC_API_KEY;
    if (!key) {
      return NextResponse.json({ summary: fallbackSummary(p) });
    }

    const client = new Anthropic({ apiKey: key });
    const userJson = JSON.stringify({
      teamSize: p.teamSize,
      useCase: p.useCase,
      totals: p.totals,
      lines: p.lines.map((l) => ({
        tool: l.toolId,
        plan: l.plan,
        seats: l.seats,
        spend: l.currentMonthly,
        savings: l.savingsMonthly,
      })),
      wellOptimized: p.wellOptimized,
      highSavings: p.highSavings,
    });

    try {
      const msg = await client.messages.create({
        model: "claude-3-5-haiku-20241022",
        max_tokens: 220,
        messages: [
          {
            role: "user",
            content: `You are Spend Signal, an AI-spend analyst. Write ONE tight paragraph, max 100 words, in confident neutral tone. No markdown. Reference concrete numbers from the JSON. Do not invent tools not listed.\n\nDATA:\n${userJson}`,
          },
        ],
      });
      const text = msg.content
        .filter((b) => b.type === "text")
        .map((b) => b.text)
        .join("")
        .trim();
      if (!text) {
        return NextResponse.json({ summary: fallbackSummary(p) });
      }
      return NextResponse.json({ summary: text });
    } catch {
      return NextResponse.json({ summary: fallbackSummary(p) });
    }
  } catch {
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
