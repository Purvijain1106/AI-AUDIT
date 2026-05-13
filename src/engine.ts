import { TOOL_LABEL } from "./labels";
import type {
  AuditFormInput,
  AuditResult,
  ToolAuditLine,
  ToolId,
  UseCase,
} from "./types";

/** Published list benchmarks (USD/mo). See PRICING_DATA.md for URLs. */
export function listBenchmarkMonthly(
  toolId: ToolId,
  plan: string,
  seats: number,
): number | null {
  const s = Math.max(1, Math.round(seats));

  switch (toolId) {
    case "cursor": {
      if (plan === "hobby") return 0;
      if (plan === "pro") return 20;
      if (plan === "business") return 40 * s;
      if (plan === "enterprise") return null;
      return null;
    }
    case "copilot": {
      if (plan === "individual") return 10 * s;
      if (plan === "business") return 19 * s;
      if (plan === "enterprise") return null;
      return null;
    }
    case "claude_chat": {
      if (plan === "free") return 0;
      if (plan === "pro") return 20;
      if (plan === "max") return 100;
      if (plan === "team") return 25 * s;
      if (plan === "enterprise" || plan === "api_direct") return null;
      return null;
    }
    case "chatgpt": {
      if (plan === "plus") return 20;
      if (plan === "team") return 25 * Math.max(2, s);
      if (plan === "enterprise" || plan === "api_direct") return null;
      return null;
    }
    case "anthropic_api":
    case "openai_api":
      return null;
    case "gemini": {
      if (plan === "pro") return 19.99;
      if (plan === "ultra") return 249.99;
      if (plan === "api") return null;
      return null;
    }
    case "v0": {
      if (plan === "free") return 0;
      if (plan === "team") return 30 * s;
      if (plan === "business") return 100 * s;
      if (plan === "enterprise") return null;
      return null;
    }
    default:
      return null;
  }
}

export function roundMoney(n: number): number {
  return Math.round(n * 100) / 100;
}

function apiFinopsSavingsCap(monthlySpend: number): number {
  if (monthlySpend <= 0) return 0;
  return roundMoney(Math.min(monthlySpend * 0.12, 2500));
}

function rightSizeClaudeChat(
  plan: string,
  seats: number,
  teamSize: number,
  useCase: UseCase,
  spend: number,
): { targetPlan: string; targetCost: number; reason: string } | null {
  if (plan === "team" && seats <= 2 && teamSize <= 2) {
    const soloPro = 20 * Math.max(1, seats);
    if (spend > soloPro + 5) {
      return {
        targetPlan: "pro",
        targetCost: soloPro,
        reason:
          "Claude Team adds org billing, SSO, and seat administration—valuable for larger groups, but for 1–2 people the Pro plan matches published chat pricing without the per-seat Team uplift.",
      };
    }
  }
  if (plan === "max" && (useCase === "writing" || useCase === "mixed")) {
    const pro = 20;
    if (spend > pro + 15) {
      return {
        targetPlan: "pro",
        targetCost: pro,
        reason:
          "Claude Max is built for materially higher usage than Pro; if your work is mostly drafting and light analysis, Pro’s published cap is usually the better economic fit unless you consistently hit Max limits.",
      };
    }
  }
  return null;
}

function rightSizeGemini(
  plan: string,
  useCase: UseCase,
  spend: number,
): { targetPlan: string; targetCost: number; reason: string } | null {
  if (plan === "ultra" && (useCase === "coding" || useCase === "data")) {
    const pro = 19.99;
    if (spend > pro + 30) {
      return {
        targetPlan: "pro",
        targetCost: pro,
        reason:
          "Google AI Ultra bundles the highest consumer limits; for engineering-heavy Gemini Code Assist / CLI usage, compare against Google AI Pro’s published rate—many teams keep Pro and buy top-ups instead of defaulting to Ultra.",
      };
    }
  }
  return null;
}

function rightSizeV0(
  plan: string,
  seats: number,
  teamSize: number,
  spend: number,
): { targetPlan: string; targetCost: number; reason: string } | null {
  if (plan === "business" && teamSize <= 10 && seats <= 5) {
    const team = 30 * Math.max(1, seats);
    if (spend > team + 20) {
      return {
        targetPlan: "team",
        targetCost: team,
        reason:
          "v0 Business adds training opt-out defaults and higher support; if you mainly need shared team credits and collaboration, the Team tier’s published per-seat price is materially lower for small seat counts.",
      };
    }
  }
  return null;
}

function rightSizeCursor(
  plan: string,
  seats: number,
  teamSize: number,
  spend: number,
): { targetPlan: string; targetCost: number; reason: string } | null {
  if (plan === "business" && seats === 1 && teamSize <= 2) {
    const pro = 20;
    if (spend > pro + 5) {
      return {
        targetPlan: "pro",
        targetCost: pro,
        reason:
          "Cursor Teams is priced per seat for shared org rules and SSO; a single active developer rarely needs that overhead versus the Individual plan’s published flat rate.",
      };
    }
  }
  return null;
}

function rightSizeChatGpt(
  plan: string,
  seats: number,
  teamSize: number,
  spend: number,
): { targetPlan: string; targetCost: number; reason: string } | null {
  if (plan === "team" && teamSize === 1 && seats <= 2) {
    const plus = 20;
    if (spend > plus + 10) {
      return {
        targetPlan: "plus",
        targetCost: plus,
        reason:
          "ChatGPT Business (formerly Team) has a published 2-seat minimum for standard ChatGPT seats; solo operators often over-buy a workspace when Plus covers individual productivity at a lower published price.",
      };
    }
  }
  return null;
}

function overlapCodingAssistants(
  lines: AuditFormInput["lines"],
  spends: Map<ToolId, number>,
): { savings: number; hint: string } | null {
  const cursor = spends.get("cursor") ?? 0;
  const copilot = spends.get("copilot") ?? 0;
  if (cursor < 25 || copilot < 25) return null;
  const stacked = lines.filter(
    (l) =>
      (l.toolId === "cursor" || l.toolId === "copilot") && l.monthlySpend > 0,
  );
  if (stacked.length < 2) return null;
  const minSpend = Math.min(cursor, copilot);
  const savings = roundMoney(minSpend * 0.55);
  return {
    savings,
    hint:
      "You are paying for both Cursor and GitHub Copilot at meaningful monthly rates. Most engineering orgs pick one primary in-IDE assistant to avoid duplicated premium model access; retiring the secondary line item is often the fastest savings without losing capability.",
  };
}

export function runAudit(input: AuditFormInput): AuditResult {
  const teamSize = Math.max(1, input.teamSize);
  const useCase = input.useCase;
  const toolSpend = new Map<ToolId, number>();

  for (const line of input.lines) {
    if (line.monthlySpend <= 0) continue;
    toolSpend.set(
      line.toolId,
      (toolSpend.get(line.toolId) ?? 0) + line.monthlySpend,
    );
  }

  const auditLines: ToolAuditLine[] = [];
  let totalCurrent = 0;
  let totalSavings = 0;

  for (const line of input.lines) {
    const spend = roundMoney(line.monthlySpend);
    if (spend <= 0) continue;

    const label = TOOL_LABEL[line.toolId];
    let recommendedMonthly = spend;
    let recommendedSummary = "No change";
    let reason =
      "Spend matches or falls below published benchmarks for the selected plan.";

    const isApi =
      line.toolId === "anthropic_api" ||
      line.toolId === "openai_api" ||
      line.plan === "api_direct" ||
      line.plan === "api";

    if (isApi) {
      const cap = apiFinopsSavingsCap(spend);
      recommendedMonthly = roundMoney(spend - cap);
      recommendedSummary = "FinOps + committed use";
      reason =
        "API bills are usage-driven; we model conservative savings from contract commits, routing cheaper models, and cache—not from swapping vendors in a spreadsheet.";
    } else {
      const bench = listBenchmarkMonthly(
        line.toolId,
        line.plan,
        line.seats,
      );
      if (bench != null) {
        const target = roundMoney(Math.min(spend, bench));
        if (target + 0.01 < spend) {
          recommendedMonthly = target;
          recommendedSummary = "Align to published list";
          reason =
            "Your entered spend is above the vendor’s published list for this plan and seat count—often add-on usage, true-ups, or currency—worth reconciling on the invoice.";
        } else {
          recommendedMonthly = spend;
        }
      }

      const rs =
        line.toolId === "claude_chat"
          ? rightSizeClaudeChat(
              line.plan,
              line.seats,
              teamSize,
              useCase,
              spend,
            )
          : line.toolId === "gemini"
            ? rightSizeGemini(line.plan, useCase, spend)
            : line.toolId === "v0"
              ? rightSizeV0(line.plan, line.seats, teamSize, spend)
              : line.toolId === "cursor"
                ? rightSizeCursor(line.plan, line.seats, teamSize, spend)
                : line.toolId === "chatgpt"
                  ? rightSizeChatGpt(
                      line.plan,
                      line.seats,
                      teamSize,
                      spend,
                    )
                  : null;

      if (rs && rs.targetCost + 0.5 < recommendedMonthly) {
        recommendedMonthly = rs.targetCost;
        recommendedSummary = `Move to ${rs.targetPlan} tier`;
        reason = rs.reason;
      }

      if (line.toolId === "copilot" && line.plan === "enterprise") {
        const biz = roundMoney(19 * Math.max(1, line.seats));
        if (biz + 25 < spend) {
          recommendedMonthly = biz;
          recommendedSummary = "Shift to Copilot Business";
          reason =
            "Copilot Enterprise adds github.com-wide knowledge surfacing; if you primarily use Copilot inside the IDE, Business seats are the cheaper published tier per GitHub’s billing docs.";
        }
      }
    }

    const savingsLine = roundMoney(Math.max(0, spend - recommendedMonthly));
    totalSavings += savingsLine;
    totalCurrent += spend;

    auditLines.push({
      toolId: line.toolId,
      toolLabel: label,
      planLabel: line.plan,
      seats: line.seats,
      currentMonthly: spend,
      recommendedSummary,
      recommendedMonthly,
      savingsMonthly: savingsLine,
      reason,
      alternativeHint:
        line.toolId === "copilot" && line.plan === "enterprise"
          ? "If GitHub.com Copilot chat is business-critical, keep Enterprise—otherwise validate seat assignments."
          : undefined,
    });
  }

  const overlap = overlapCodingAssistants(input.lines, toolSpend);

  totalSavings = roundMoney(totalSavings);
  const totalSavingsAnnual = roundMoney(totalSavings * 12);

  const highSavings = totalSavings > 500;
  const wellOptimized = totalSavings < 100;

  return {
    lines: auditLines,
    totalCurrentMonthly: roundMoney(totalCurrent),
    totalSavingsMonthly: totalSavings,
    totalSavingsAnnual,
    overlapHint: overlap ? overlap.hint : undefined,
    creditMarketHint: highSavings
      ? "High savings audits often include retail list prices—discounted infrastructure credits can stack on top of plan changes for additional runway."
      : undefined,
    wellOptimized,
    highSavings,
  };
}
