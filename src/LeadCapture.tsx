"use client";

import { useState } from "react";

export function LeadCapture({ shareUrl }: { shareUrl: string | null }) {
  const [leadStatus, setLeadStatus] = useState<
    "idle" | "saving" | "done" | "err"
  >("idle");

  return (
    <form
      className="relative mt-6 grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
      onSubmit={async (e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const website = String(fd.get("companyWebsite") || "");
        if (website.trim()) return;
        setLeadStatus("saving");
        const slug = shareUrl?.split("/r/")[1];
        const res = await fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: fd.get("email"),
            company: fd.get("company") || undefined,
            role: fd.get("role") || undefined,
            teamSize: Number(fd.get("teamSize") || 0) || undefined,
            auditSlug: slug || undefined,
            companyWebsite: website,
          }),
        });
        setLeadStatus(res.ok ? "done" : "err");
      }}
    >
      <p className="text-sm text-zinc-300">
        Email yourself the report and get notified when new optimizations match
        your stack.
      </p>
      <div className="sr-only" aria-hidden>
        <label>
          Company website
          <input name="companyWebsite" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <label className="grid gap-1 text-sm">
        <span className="text-zinc-400">Work email</span>
        <input
          required
          name="email"
          type="email"
          className="rounded-lg border border-white/10 bg-zinc-950 px-3 py-2 text-white outline-none focus:border-cyan-400/60"
          placeholder="you@company.com"
        />
      </label>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1 text-sm">
          <span className="text-zinc-400">Company (optional)</span>
          <input
            name="company"
            className="rounded-lg border border-white/10 bg-zinc-950 px-3 py-2 text-white outline-none focus:border-cyan-400/60"
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="text-zinc-400">Role (optional)</span>
          <input
            name="role"
            className="rounded-lg border border-white/10 bg-zinc-950 px-3 py-2 text-white outline-none focus:border-cyan-400/60"
          />
        </label>
      </div>
      <label className="grid gap-1 text-sm">
        <span className="text-zinc-400">Team size (optional)</span>
        <input
          name="teamSize"
          type="number"
          min={1}
          className="rounded-lg border border-white/10 bg-zinc-950 px-3 py-2 text-white outline-none focus:border-cyan-400/60"
        />
      </label>
      <button
        type="submit"
        disabled={leadStatus === "saving" || leadStatus === "done"}
        className="rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-400 disabled:opacity-50"
      >
        {leadStatus === "done"
          ? "Saved — check your inbox"
          : leadStatus === "saving"
            ? "Sending…"
            : "Email me the audit"}
      </button>
      {leadStatus === "err" && (
        <p className="text-sm text-rose-400">
          Could not save — verify Supabase + network, or try again shortly.
        </p>
      )}
    </form>
  );
}
