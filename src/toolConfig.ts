import type { ToolId } from "./audit/types";

export const TOOL_ORDER: ToolId[] = [
  "cursor",
  "copilot",
  "claude_chat",
  "chatgpt",
  "anthropic_api",
  "openai_api",
  "gemini",
  "v0",
];

export const PLAN_OPTIONS: Record<
  ToolId,
  { value: string; label: string }[]
> = {
  cursor: [
    { value: "hobby", label: "Hobby" },
    { value: "pro", label: "Pro (Individual)" },
    { value: "business", label: "Business (Teams)" },
    { value: "enterprise", label: "Enterprise" },
  ],
  copilot: [
    { value: "individual", label: "Individual (Pro)" },
    { value: "business", label: "Business" },
    { value: "enterprise", label: "Enterprise" },
  ],
  claude_chat: [
    { value: "free", label: "Free" },
    { value: "pro", label: "Pro" },
    { value: "max", label: "Max" },
    { value: "team", label: "Team" },
    { value: "enterprise", label: "Enterprise" },
    { value: "api_direct", label: "API (direct)" },
  ],
  chatgpt: [
    { value: "plus", label: "Plus" },
    { value: "team", label: "Team / Business workspace" },
    { value: "enterprise", label: "Enterprise" },
    { value: "api_direct", label: "API (direct)" },
  ],
  anthropic_api: [{ value: "api", label: "Usage-based API" }],
  openai_api: [{ value: "api", label: "Usage-based API" }],
  gemini: [
    { value: "pro", label: "Google AI Pro" },
    { value: "ultra", label: "Google AI Ultra" },
    { value: "api", label: "Gemini API" },
  ],
  v0: [
    { value: "free", label: "Free" },
    { value: "team", label: "Team" },
    { value: "business", label: "Business" },
    { value: "enterprise", label: "Enterprise" },
  ],
};
