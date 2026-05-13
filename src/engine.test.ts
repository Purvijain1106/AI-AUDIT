import { describe, expect, it } from "vitest";
import { listBenchmarkMonthly, runAudit } from "./engine";

describe("listBenchmarkMonthly", () => {
  it("Cursor Business multiplies $40 by seats", () => {
    expect(listBenchmarkMonthly("cursor", "business", 5)).toBe(200);
  });

  it("Copilot Business uses $19 per seat from GitHub docs", () => {
    expect(listBenchmarkMonthly("copilot", "business", 4)).toBe(76);
  });

  it("ChatGPT Team enforces 2-seat published minimum in model", () => {
    expect(listBenchmarkMonthly("chatgpt", "team", 1)).toBe(50);
  });
});

describe("runAudit", () => {
  it("flags Cursor Business single seat vs Individual pricing", () => {
    const r = runAudit({
      teamSize: 1,
      useCase: "coding",
      lines: [
        {
          toolId: "cursor",
          plan: "business",
          monthlySpend: 40,
          seats: 1,
        },
      ],
    });
    expect(r.lines[0].savingsMonthly).toBeGreaterThan(0);
    expect(r.lines[0].recommendedMonthly).toBe(20);
  });

  it("does not inflate spend below list price", () => {
    const r = runAudit({
      teamSize: 5,
      useCase: "coding",
      lines: [
        {
          toolId: "copilot",
          plan: "business",
          monthlySpend: 57,
          seats: 3,
        },
      ],
    });
    expect(r.totalSavingsMonthly).toBe(0);
  });

  it("models conservative API savings cap", () => {
    const r = runAudit({
      teamSize: 8,
      useCase: "mixed",
      lines: [
        {
          toolId: "openai_api",
          plan: "api",
          monthlySpend: 1000,
          seats: 1,
        },
      ],
    });
    expect(r.lines[0].savingsMonthly).toBeCloseTo(120, 1);
    expect(r.lines[0].recommendedMonthly).toBeCloseTo(880, 1);
  });

  it("suggests Claude Max → Pro for writing-heavy stacks", () => {
    const r = runAudit({
      teamSize: 1,
      useCase: "writing",
      lines: [
        {
          toolId: "claude_chat",
          plan: "max",
          monthlySpend: 100,
          seats: 1,
        },
      ],
    });
    expect(r.lines[0].recommendedMonthly).toBe(20);
    expect(r.lines[0].savingsMonthly).toBe(80);
  });

  it("surfaces overlap guidance when both Copilot and Cursor are paid", () => {
    const r = runAudit({
      teamSize: 6,
      useCase: "coding",
      lines: [
        {
          toolId: "cursor",
          plan: "business",
          monthlySpend: 120,
          seats: 3,
        },
        {
          toolId: "copilot",
          plan: "business",
          monthlySpend: 95,
          seats: 5,
        },
      ],
    });
    expect(r.overlapHint).toBeTruthy();
  });
});
