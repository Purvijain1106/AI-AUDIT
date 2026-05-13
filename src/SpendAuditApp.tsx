"use client";

import { useCallback, useEffect, useState } from "react";
import { LeadCapture } from "@/components/LeadCapture";
import type { AuditResult, SpendLineInput, UseCase } from "@/lib/audit/types";
import { runAudit } from "@/lib/audit/engine";
import { TOOL_LABEL } from "@/lib/audit/labels";
import { PLAN_OPTIONS, TOOL_ORDER } from "@/lib/toolConfig";
import { toPublicPayload, type PublicAuditPayload } from "@/lib/schemas";

const STORAGE_KEY = "spend-signal-form-v1";

type FormState = {
  teamSize: number;
  useCase: UseCase;
  lines: SpendLineInput[];
};

const defaultLine = (): SpendLineInput => ({
  toolId: "cursor",
  plan: PLAN_OPTIONS.cursor[1]!.value,
  monthlySpend: 20,
  seats: 1,
});

function loadForm(): FormState {
  if (typeof window === "undefined") {
    return { teamSize: 5, useCase: "coding", lines: [defaultLine()] };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { teamSize: 5, useCase: "coding", lines: [defaultLine()] };
    const parsed = JSON.parse(raw) as FormState;
    if (!parsed.lines?.length) throw new Error("empty");
    return parsed;
  } catch {
    return { teamSize: 5, useCase: "coding", lines: [defaultLine()] };
  }
}

export function SpendAuditApp() {
  const [form, setForm] = useState<FormState>(() => ({
    teamSize: 5,
    useCase: "coding",
    lines: [defaultLine()],
  }));
  const [hydrated, setHydrated] = useState(false);
  const [audit, setAudit] = useState<AuditResult | null>(null);
  const [publicPayload, setPublicPayload] = useState<PublicAuditPayload | null>(
    null,
  );
  const [summary, setSummary] = useState<string | null>(null);
  const [summaryLoading, setSummaryLoading] = useState(false);
  const [shareUrl, setShareUrl] = useState<string | null>(null);
  const [shareError, setShareError] = useState<string | null>(null);

  useEffect(() => {
    // Hydrate from localStorage after mount (avoid SSR/localStorage mismatch).
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional one-time client restore
    setForm(loadForm());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
  }, [form, hydrated]);

  const onRun = useCallback(() => {
    const res = runAudit({
      teamSize: form.teamSize,
      useCase: form.useCase,
      lines: form.lines.filter((l) => l.monthlySpend > 0),
    });
    setAudit(res);
    const pub = toPublicPayload({
      teamSize: form.teamSize,
      useCase: form.useCase,
      audit: res,
    });
    setPublicPayload(pub);
    setShareUrl(null);
    setShareError(null);
    setSummary(null);
    setSummaryLoading(true);
    void fetch("/api/summary", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pub),
    })
      .then((r) => r.json())
      .then((j: { summary?: string }) => {
        if (j.summary) setSummary(j.summary);
      })
      .finally(() => {
        setSummaryLoading(false);
      });
  }, [form]);

  const credexProminent = audit && audit.totalSavingsMonthly > 500;

  const addLine = () =>
    setForm((f) => ({ ...f, lines: [...f.lines, defaultLine()] }));

  const updateLine = (idx: number, patch: Partial<SpendLineInput>) => {
    setForm((f) => {
      const lines = f.lines.map((l, i) => (i === idx ? { ...l, ...patch } : l));
      const next = lines[idx];
      if (!next) return f;
      if (patch.toolId) {
        const opts = PLAN_OPTIONS[patch.toolId];
        const still = opts.some((o) => o.value === next.plan);
        if (!still) next.plan = opts[0]!.value;
      }
      return { ...f, lines };
    });
  };

  const removeLine = (idx: number) =>
    setForm((f) => ({
      ...f,
      lines: f.lines.filter((_, i) => i !== idx),
    }));

  const onShare = async () => {
    if (!publicPayload) return;
    setShareError(null);
    const res = await fetch("/api/share", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(publicPayload),
    });
    const j = (await res.json()) as { slug?: string; url?: string; error?: string };
    if (!res.ok) {
      setShareError(
        j.error === "storage_unavailable"
          ? "Sharing requires Supabase env vars—see README."
          : "Could not create share link.",
      );
      return;
    }
    if (j.url) setShareUrl(j.url);
  };

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-12 sm:px-6">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/90">
          Spend Signal
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          The two-minute AI spend audit
        </h1>
        <p className="max-w-2xl text-lg text-zinc-400">
          Benchmark your stack against published vendor pricing, spot tier
          mismatches, and see where credits could stretch the budget further.
        </p>
      </header>

      <section className="rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900/80 to-zinc-950 p-6 shadow-2xl shadow-cyan-500/5 sm:p-8">
        <div className="mb-6 flex flex-wrap items-end gap-4">
          <label className="grid gap-1 text-sm">
            <span className="text-zinc-400">Team size</span>
            <input
              type="number"
              min={1}
              value={form.teamSize}
              onChange={(e) =>
                setForm((f) => ({
                  ...f,
                  teamSize: Number(e.target.value) || 1,
                }))
              }
              className="w-28 rounded-lg border border-white/10 bg-zinc-950 px-3 py-2 text-white outline-none focus:border-cyan-400/60"
            />
          </label>
          <label className="grid gap-1 text-sm">
            <span className="text-zinc-400">Primary use case</span>
            <select
              value={form.useCase}
              onChange={(e) =>
                setForm((f) => ({
                  ...f,
                  useCase: e.target.value as UseCase,
                }))
              }
              className="rounded-lg border border-white/10 bg-zinc-950 px-3 py-2 text-white outline-none focus:border-cyan-400/60"
            >
              <option value="coding">Coding</option>
              <option value="writing">Writing</option>
              <option value="data">Data</option>
              <option value="research">Research</option>
              <option value="mixed">Mixed</option>
            </select>
          </label>
        </div>

        <div className="space-y-4">
          {form.lines.map((line, idx) => (
            <div
              key={idx}
              className="grid gap-3 rounded-2xl border border-white/5 bg-black/20 p-4 sm:grid-cols-12 sm:items-end"
            >
              <label className="grid gap-1 text-sm sm:col-span-3">
                <span className="text-zinc-400">Tool</span>
                <select
                  value={line.toolId}
                  onChange={(e) =>
                    updateLine(idx, {
                      toolId: e.target.value as SpendLineInput["toolId"],
                    })
                  }
                  className="rounded-lg border border-white/10 bg-zinc-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400/60"
                >
                  {TOOL_ORDER.map((id) => (
                    <option key={id} value={id}>
                      {TOOL_LABEL[id]}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-1 text-sm sm:col-span-2">
                <span className="text-zinc-400">Plan</span>
                <select
                  value={line.plan}
                  onChange={(e) => updateLine(idx, { plan: e.target.value })}
                  className="rounded-lg border border-white/10 bg-zinc-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400/60"
                >
                  {PLAN_OPTIONS[line.toolId].map((p) => (
                    <option key={p.value} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-1 text-sm sm:col-span-2">
                <span className="text-zinc-400">Monthly spend ($)</span>
                <input
                  type="number"
                  min={0}
                  step="1"
                  value={line.monthlySpend}
                  onChange={(e) =>
                    updateLine(idx, {
                      monthlySpend: Number(e.target.value) || 0,
                    })
                  }
                  className="rounded-lg border border-white/10 bg-zinc-950 px-3 py-2 text-white outline-none focus:border-cyan-400/60"
                />
              </label>
              <label className="grid gap-1 text-sm sm:col-span-2">
                <span className="text-zinc-400">Seats</span>
                <input
                  type="number"
                  min={0}
                  value={line.seats}
                  onChange={(e) =>
                    updateLine(idx, { seats: Number(e.target.value) || 0 })
                  }
                  className="rounded-lg border border-white/10 bg-zinc-950 px-3 py-2 text-white outline-none focus:border-cyan-400/60"
                />
              </label>
              <div className="flex gap-2 sm:col-span-3 sm:justify-end">
                <button
                  type="button"
                  onClick={() => removeLine(idx)}
                  disabled={form.lines.length <= 1}
                  className="rounded-lg border border-white/10 px-3 py-2 text-sm text-zinc-300 hover:bg-white/5 disabled:opacity-30"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={addLine}
            className="rounded-xl border border-white/15 px-4 py-2.5 text-sm font-medium text-zinc-200 hover:bg-white/5"
          >
            Add tool
          </button>
          <button
            type="button"
            onClick={onRun}
            className="rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400"
          >
            Run audit
          </button>
        </div>
      </section>

      {audit && publicPayload && (
        <section className="space-y-8" id="results">
          <div className="grid gap-6 rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-zinc-900 to-zinc-950 p-8 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-emerald-200/80">
                Modeled monthly savings
              </p>
              <p className="mt-2 text-5xl font-semibold tracking-tight text-white">
                ${Math.round(audit.totalSavingsMonthly).toLocaleString()}
                <span className="text-2xl text-zinc-400">/mo</span>
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                ~${Math.round(audit.totalSavingsAnnual).toLocaleString()} / yr
                annualized (illustrative, not tax advice)
              </p>
            </div>
            <div className="flex flex-col justify-center gap-2 text-sm text-zinc-300">
              {audit.wellOptimized ? (
                <p>
                  You are spending thoughtfully relative to published tiers—no
                  fake inflation here. Still worth capturing the report so we can
                  ping you when vendors change pricing.
                </p>
              ) : (
                <p>
                  Savings come from published price ladders, seat math, and a few
                  conservative overlap rules—see each line for the rationale.
                </p>
              )}
            </div>
          </div>

          {credexProminent && (
            <div className="rounded-3xl border border-cyan-400/30 bg-cyan-500/10 p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white">
                Capture the rest with Credex
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-cyan-50/90">
                Plan changes recover part of the gap; discounted AI
                infrastructure credits (Cursor, Claude, ChatGPT Enterprise, and
                others) often close the remainder for high-usage teams. Book a
                short consultation if you want a human to pressure-test these
                numbers against your invoices.
              </p>
              <a
                className="mt-4 inline-flex rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900"
                href="https://www.credex.com"
                target="_blank"
                rel="noreferrer"
              >
                Talk to Credex
              </a>
            </div>
          )}

          <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-white">AI summary</h2>
            <p className="mt-3 min-h-[4.5rem] text-sm leading-relaxed text-zinc-300">
              {summaryLoading && !summary ? "Generating summary…" : null}
              {summary}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Per-tool view</h2>
            <div className="space-y-3">
              {audit.lines.map((l) => (
                <div
                  key={`${l.toolId}-${l.planLabel}-${l.currentMonthly}`}
                  className="rounded-2xl border border-white/5 bg-black/25 p-4 sm:flex sm:justify-between sm:gap-6"
                >
                  <div>
                    <p className="font-medium text-white">
                      {l.toolLabel}{" "}
                      <span className="text-zinc-500">·</span>{" "}
                      <span className="text-zinc-400">{l.planLabel}</span>
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">
                      {l.seats} seat{l.seats === 1 ? "" : "s"} · Current $
                      {l.currentMonthly.toLocaleString()}/mo
                    </p>
                    <p className="mt-2 text-sm text-zinc-300">{l.reason}</p>
                    {l.alternativeHint && (
                      <p className="mt-1 text-xs text-cyan-200/80">
                        {l.alternativeHint}
                      </p>
                    )}
                  </div>
                  <div className="mt-3 shrink-0 text-right sm:mt-0">
                    <p className="text-xs uppercase tracking-wide text-zinc-500">
                      Action
                    </p>
                    <p className="text-sm font-medium text-emerald-300">
                      {l.recommendedSummary}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      −${l.savingsMonthly.toLocaleString()}
                      <span className="text-sm text-zinc-500">/mo</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {audit.overlapHint && (
              <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-4 text-sm text-amber-100/90">
                <span className="font-semibold text-amber-200">Overlap note: </span>
                {audit.overlapHint}
              </div>
            )}
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-900/50 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-white">
              Share &amp; keep this audit
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              Public links strip email and company names—only tools and savings
              math travel with the URL.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => void onShare()}
                className="rounded-xl border border-white/15 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/5"
              >
                Create public link
              </button>
              {shareUrl && (
                <span className="break-all text-sm text-cyan-300">{shareUrl}</span>
              )}
            </div>
            {shareError && (
              <p className="mt-2 text-sm text-rose-400">{shareError}</p>
            )}
            <LeadCapture shareUrl={shareUrl} />
          </div>
        </section>
      )}
    </div>
  );
}
