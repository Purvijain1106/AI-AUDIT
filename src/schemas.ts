import { z } from "zod";
import type { AuditResult, ToolId, UseCase } from "./audit/types";

export const toolIdSchema = z.enum([
  "cursor",
  "copilot",
  "claude_chat",
  "chatgpt",
  "anthropic_api",
  "openai_api",
  "gemini",
  "v0",
]);

export const spendLineSchema = z.object({
  toolId: toolIdSchema,
  plan: z.string().min(1).max(64),
  monthlySpend: z.number().min(0).max(1_000_000),
  seats: z.number().int().min(0).max(50_000),
});

export const auditFormSchema = z.object({
  teamSize: z.number().int().min(1).max(50_000),
  useCase: z.enum(["coding", "writing", "data", "research", "mixed"]),
  lines: z.array(spendLineSchema).min(1).max(40),
});

export type AuditFormPayload = z.infer<typeof auditFormSchema>;

export const publicAuditPayloadSchema = z.object({
  version: z.literal(1),
  teamSize: z.number().int().min(1),
  useCase: z.enum(["coding", "writing", "data", "research", "mixed"]),
  lines: z.array(
    z.object({
      toolId: toolIdSchema,
      plan: z.string(),
      seats: z.number(),
      currentMonthly: z.number(),
      savingsMonthly: z.number(),
      recommendedMonthly: z.number(),
      recommendedSummary: z.string(),
      reason: z.string(),
    }),
  ),
  totals: z.object({
    currentMonthly: z.number(),
    savingsMonthly: z.number(),
    savingsAnnual: z.number(),
  }),
  overlapHint: z.string().optional(),
  creditMarketHint: z.string().optional(),
  wellOptimized: z.boolean(),
  highSavings: z.boolean(),
});

export type PublicAuditPayload = z.infer<typeof publicAuditPayloadSchema>;

export const leadSchema = z.object({
  email: z.string().email().max(320),
  company: z.string().max(200).optional(),
  role: z.string().max(120).optional(),
  teamSize: z.number().int().min(0).max(50_000).optional(),
  auditSlug: z.string().min(8).max(32).optional(),
  /** Honeypot — must be empty */
  companyWebsite: z.string().max(200).optional(),
});

export type LeadPayload = z.infer<typeof leadSchema>;

export function toPublicPayload(input: {
  teamSize: number;
  useCase: UseCase;
  audit: AuditResult;
}): PublicAuditPayload {
  return {
    version: 1,
    teamSize: input.teamSize,
    useCase: input.useCase,
    lines: input.audit.lines.map((l) => ({
      toolId: l.toolId as ToolId,
      plan: l.planLabel,
      seats: l.seats,
      currentMonthly: l.currentMonthly,
      savingsMonthly: l.savingsMonthly,
      recommendedMonthly: l.recommendedMonthly,
      recommendedSummary: l.recommendedSummary,
      reason: l.reason,
    })),
    totals: {
      currentMonthly: input.audit.totalCurrentMonthly,
      savingsMonthly: input.audit.totalSavingsMonthly,
      savingsAnnual: input.audit.totalSavingsAnnual,
    },
    overlapHint: input.audit.overlapHint,
    creditMarketHint: input.audit.creditMarketHint,
    wellOptimized: input.audit.wellOptimized,
    highSavings: input.audit.highSavings,
  };
}
