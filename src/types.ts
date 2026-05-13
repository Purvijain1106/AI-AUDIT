export type UseCase = "coding" | "writing" | "data" | "research" | "mixed";

export type ToolId =
  | "cursor"
  | "copilot"
  | "claude_chat"
  | "chatgpt"
  | "anthropic_api"
  | "openai_api"
  | "gemini"
  | "v0";

export type CursorPlan = "hobby" | "pro" | "business" | "enterprise";
export type CopilotPlan = "individual" | "business" | "enterprise";
export type ClaudeChatPlan =
  | "free"
  | "pro"
  | "max"
  | "team"
  | "enterprise"
  | "api_direct";
export type ChatGptPlan =
  | "plus"
  | "team"
  | "enterprise"
  | "api_direct";
export type GeminiPlan = "pro" | "ultra" | "api";
export type V0Plan = "free" | "team" | "business" | "enterprise";

export type ToolPlan =
  | CursorPlan
  | CopilotPlan
  | ClaudeChatPlan
  | ChatGptPlan
  | GeminiPlan
  | V0Plan;

export interface SpendLineInput {
  toolId: ToolId;
  plan: string;
  monthlySpend: number;
  seats: number;
}

export interface AuditFormInput {
  teamSize: number;
  useCase: UseCase;
  lines: SpendLineInput[];
}

export interface ToolAuditLine {
  toolId: ToolId;
  toolLabel: string;
  planLabel: string;
  seats: number;
  currentMonthly: number;
  recommendedSummary: string;
  recommendedMonthly: number;
  savingsMonthly: number;
  reason: string;
  /** Optional alternative vendor / stack hint */
  alternativeHint?: string;
}

export interface AuditResult {
  lines: ToolAuditLine[];
  totalCurrentMonthly: number;
  totalSavingsMonthly: number;
  totalSavingsAnnual: number;
  overlapHint?: string;
  /** Conservative estimate for API-heavy stacks (committed spend / routing) */
  creditMarketHint?: string;
  wellOptimized: boolean;
  /** True when model estimates meaningful structural savings */
  highSavings: boolean;
}
