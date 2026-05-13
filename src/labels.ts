import type { ToolId } from "./types";

export const TOOL_LABEL: Record<ToolId, string> = {
  cursor: "Cursor",
  copilot: "GitHub Copilot",
  claude_chat: "Claude (chat)",
  chatgpt: "ChatGPT",
  anthropic_api: "Anthropic API",
  openai_api: "OpenAI API",
  gemini: "Gemini",
  v0: "v0 (Vercel)",
};
