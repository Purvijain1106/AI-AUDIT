module.exports = [
"[project]/src/components/LeadCapture.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LeadCapture",
    ()=>LeadCapture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function LeadCapture({ shareUrl }) {
    const [leadStatus, setLeadStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "relative mt-6 grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4",
        onSubmit: async (e)=>{
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const website = String(fd.get("companyWebsite") || "");
            if (website.trim()) return;
            setLeadStatus("saving");
            const slug = shareUrl?.split("/r/")[1];
            const res = await fetch("/api/lead", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: fd.get("email"),
                    company: fd.get("company") || undefined,
                    role: fd.get("role") || undefined,
                    teamSize: Number(fd.get("teamSize") || 0) || undefined,
                    auditSlug: slug || undefined,
                    companyWebsite: website
                })
            });
            setLeadStatus(res.ok ? "done" : "err");
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-zinc-300",
                children: "Email yourself the report and get notified when new optimizations match your stack."
            }, void 0, false, {
                fileName: "[project]/src/components/LeadCapture.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sr-only",
                "aria-hidden": true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    children: [
                        "Company website",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            name: "companyWebsite",
                            tabIndex: -1,
                            autoComplete: "off"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LeadCapture.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LeadCapture.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/LeadCapture.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "grid gap-1 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-zinc-400",
                        children: "Work email"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LeadCapture.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        required: true,
                        name: "email",
                        type: "email",
                        className: "rounded-lg border border-white/10 bg-zinc-950 px-3 py-2 text-white outline-none focus:border-cyan-400/60",
                        placeholder: "you@company.com"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LeadCapture.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LeadCapture.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3 sm:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "grid gap-1 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-zinc-400",
                                children: "Company (optional)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LeadCapture.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "company",
                                className: "rounded-lg border border-white/10 bg-zinc-950 px-3 py-2 text-white outline-none focus:border-cyan-400/60"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LeadCapture.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LeadCapture.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "grid gap-1 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-zinc-400",
                                children: "Role (optional)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LeadCapture.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "role",
                                className: "rounded-lg border border-white/10 bg-zinc-950 px-3 py-2 text-white outline-none focus:border-cyan-400/60"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LeadCapture.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LeadCapture.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LeadCapture.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "grid gap-1 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-zinc-400",
                        children: "Team size (optional)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LeadCapture.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "teamSize",
                        type: "number",
                        min: 1,
                        className: "rounded-lg border border-white/10 bg-zinc-950 px-3 py-2 text-white outline-none focus:border-cyan-400/60"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LeadCapture.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LeadCapture.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: leadStatus === "saving" || leadStatus === "done",
                className: "rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-400 disabled:opacity-50",
                children: leadStatus === "done" ? "Saved — check your inbox" : leadStatus === "saving" ? "Sending…" : "Email me the audit"
            }, void 0, false, {
                fileName: "[project]/src/components/LeadCapture.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            leadStatus === "err" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-rose-400",
                children: "Could not save — verify Supabase + network, or try again shortly."
            }, void 0, false, {
                fileName: "[project]/src/components/LeadCapture.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LeadCapture.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/audit/labels.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TOOL_LABEL",
    ()=>TOOL_LABEL
]);
const TOOL_LABEL = {
    cursor: "Cursor",
    copilot: "GitHub Copilot",
    claude_chat: "Claude (chat)",
    chatgpt: "ChatGPT",
    anthropic_api: "Anthropic API",
    openai_api: "OpenAI API",
    gemini: "Gemini",
    v0: "v0 (Vercel)"
};
}),
"[project]/src/lib/audit/engine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "listBenchmarkMonthly",
    ()=>listBenchmarkMonthly,
    "roundMoney",
    ()=>roundMoney,
    "runAudit",
    ()=>runAudit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2f$labels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/audit/labels.ts [app-ssr] (ecmascript)");
;
function listBenchmarkMonthly(toolId, plan, seats) {
    const s = Math.max(1, Math.round(seats));
    switch(toolId){
        case "cursor":
            {
                if (plan === "hobby") return 0;
                if (plan === "pro") return 20;
                if (plan === "business") return 40 * s;
                if (plan === "enterprise") return null;
                return null;
            }
        case "copilot":
            {
                if (plan === "individual") return 10 * s;
                if (plan === "business") return 19 * s;
                if (plan === "enterprise") return null;
                return null;
            }
        case "claude_chat":
            {
                if (plan === "free") return 0;
                if (plan === "pro") return 20;
                if (plan === "max") return 100;
                if (plan === "team") return 25 * s;
                if (plan === "enterprise" || plan === "api_direct") return null;
                return null;
            }
        case "chatgpt":
            {
                if (plan === "plus") return 20;
                if (plan === "team") return 25 * Math.max(2, s);
                if (plan === "enterprise" || plan === "api_direct") return null;
                return null;
            }
        case "anthropic_api":
        case "openai_api":
            return null;
        case "gemini":
            {
                if (plan === "pro") return 19.99;
                if (plan === "ultra") return 249.99;
                if (plan === "api") return null;
                return null;
            }
        case "v0":
            {
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
function roundMoney(n) {
    return Math.round(n * 100) / 100;
}
function apiFinopsSavingsCap(monthlySpend) {
    if (monthlySpend <= 0) return 0;
    return roundMoney(Math.min(monthlySpend * 0.12, 2500));
}
function rightSizeClaudeChat(plan, seats, teamSize, useCase, spend) {
    if (plan === "team" && seats <= 2 && teamSize <= 2) {
        const soloPro = 20 * Math.max(1, seats);
        if (spend > soloPro + 5) {
            return {
                targetPlan: "pro",
                targetCost: soloPro,
                reason: "Claude Team adds org billing, SSO, and seat administration—valuable for larger groups, but for 1–2 people the Pro plan matches published chat pricing without the per-seat Team uplift."
            };
        }
    }
    if (plan === "max" && (useCase === "writing" || useCase === "mixed")) {
        const pro = 20;
        if (spend > pro + 15) {
            return {
                targetPlan: "pro",
                targetCost: pro,
                reason: "Claude Max is built for materially higher usage than Pro; if your work is mostly drafting and light analysis, Pro’s published cap is usually the better economic fit unless you consistently hit Max limits."
            };
        }
    }
    return null;
}
function rightSizeGemini(plan, useCase, spend) {
    if (plan === "ultra" && (useCase === "coding" || useCase === "data")) {
        const pro = 19.99;
        if (spend > pro + 30) {
            return {
                targetPlan: "pro",
                targetCost: pro,
                reason: "Google AI Ultra bundles the highest consumer limits; for engineering-heavy Gemini Code Assist / CLI usage, compare against Google AI Pro’s published rate—many teams keep Pro and buy top-ups instead of defaulting to Ultra."
            };
        }
    }
    return null;
}
function rightSizeV0(plan, seats, teamSize, spend) {
    if (plan === "business" && teamSize <= 10 && seats <= 5) {
        const team = 30 * Math.max(1, seats);
        if (spend > team + 20) {
            return {
                targetPlan: "team",
                targetCost: team,
                reason: "v0 Business adds training opt-out defaults and higher support; if you mainly need shared team credits and collaboration, the Team tier’s published per-seat price is materially lower for small seat counts."
            };
        }
    }
    return null;
}
function rightSizeCursor(plan, seats, teamSize, spend) {
    if (plan === "business" && seats === 1 && teamSize <= 2) {
        const pro = 20;
        if (spend > pro + 5) {
            return {
                targetPlan: "pro",
                targetCost: pro,
                reason: "Cursor Teams is priced per seat for shared org rules and SSO; a single active developer rarely needs that overhead versus the Individual plan’s published flat rate."
            };
        }
    }
    return null;
}
function rightSizeChatGpt(plan, seats, teamSize, spend) {
    if (plan === "team" && teamSize === 1 && seats <= 2) {
        const plus = 20;
        if (spend > plus + 10) {
            return {
                targetPlan: "plus",
                targetCost: plus,
                reason: "ChatGPT Business (formerly Team) has a published 2-seat minimum for standard ChatGPT seats; solo operators often over-buy a workspace when Plus covers individual productivity at a lower published price."
            };
        }
    }
    return null;
}
function overlapCodingAssistants(lines, spends) {
    const cursor = spends.get("cursor") ?? 0;
    const copilot = spends.get("copilot") ?? 0;
    if (cursor < 25 || copilot < 25) return null;
    const stacked = lines.filter((l)=>(l.toolId === "cursor" || l.toolId === "copilot") && l.monthlySpend > 0);
    if (stacked.length < 2) return null;
    const minSpend = Math.min(cursor, copilot);
    const savings = roundMoney(minSpend * 0.55);
    return {
        savings,
        hint: "You are paying for both Cursor and GitHub Copilot at meaningful monthly rates. Most engineering orgs pick one primary in-IDE assistant to avoid duplicated premium model access; retiring the secondary line item is often the fastest savings without losing capability."
    };
}
function runAudit(input) {
    const teamSize = Math.max(1, input.teamSize);
    const useCase = input.useCase;
    const toolSpend = new Map();
    for (const line of input.lines){
        if (line.monthlySpend <= 0) continue;
        toolSpend.set(line.toolId, (toolSpend.get(line.toolId) ?? 0) + line.monthlySpend);
    }
    const auditLines = [];
    let totalCurrent = 0;
    let totalSavings = 0;
    for (const line of input.lines){
        const spend = roundMoney(line.monthlySpend);
        if (spend <= 0) continue;
        const label = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2f$labels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOOL_LABEL"][line.toolId];
        let recommendedMonthly = spend;
        let recommendedSummary = "No change";
        let reason = "Spend matches or falls below published benchmarks for the selected plan.";
        const isApi = line.toolId === "anthropic_api" || line.toolId === "openai_api" || line.plan === "api_direct" || line.plan === "api";
        if (isApi) {
            const cap = apiFinopsSavingsCap(spend);
            recommendedMonthly = roundMoney(spend - cap);
            recommendedSummary = "FinOps + committed use";
            reason = "API bills are usage-driven; we model conservative savings from contract commits, routing cheaper models, and cache—not from swapping vendors in a spreadsheet.";
        } else {
            const bench = listBenchmarkMonthly(line.toolId, line.plan, line.seats);
            if (bench != null) {
                const target = roundMoney(Math.min(spend, bench));
                if (target + 0.01 < spend) {
                    recommendedMonthly = target;
                    recommendedSummary = "Align to published list";
                    reason = "Your entered spend is above the vendor’s published list for this plan and seat count—often add-on usage, true-ups, or currency—worth reconciling on the invoice.";
                } else {
                    recommendedMonthly = spend;
                }
            }
            const rs = line.toolId === "claude_chat" ? rightSizeClaudeChat(line.plan, line.seats, teamSize, useCase, spend) : line.toolId === "gemini" ? rightSizeGemini(line.plan, useCase, spend) : line.toolId === "v0" ? rightSizeV0(line.plan, line.seats, teamSize, spend) : line.toolId === "cursor" ? rightSizeCursor(line.plan, line.seats, teamSize, spend) : line.toolId === "chatgpt" ? rightSizeChatGpt(line.plan, line.seats, teamSize, spend) : null;
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
                    reason = "Copilot Enterprise adds github.com-wide knowledge surfacing; if you primarily use Copilot inside the IDE, Business seats are the cheaper published tier per GitHub’s billing docs.";
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
            alternativeHint: line.toolId === "copilot" && line.plan === "enterprise" ? "If GitHub.com Copilot chat is business-critical, keep Enterprise—otherwise validate seat assignments." : undefined
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
        creditMarketHint: highSavings ? "High savings audits often include retail list prices—discounted infrastructure credits can stack on top of plan changes for additional runway." : undefined,
        wellOptimized,
        highSavings
    };
}
}),
"[project]/src/lib/toolConfig.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PLAN_OPTIONS",
    ()=>PLAN_OPTIONS,
    "TOOL_ORDER",
    ()=>TOOL_ORDER
]);
const TOOL_ORDER = [
    "cursor",
    "copilot",
    "claude_chat",
    "chatgpt",
    "anthropic_api",
    "openai_api",
    "gemini",
    "v0"
];
const PLAN_OPTIONS = {
    cursor: [
        {
            value: "hobby",
            label: "Hobby"
        },
        {
            value: "pro",
            label: "Pro (Individual)"
        },
        {
            value: "business",
            label: "Business (Teams)"
        },
        {
            value: "enterprise",
            label: "Enterprise"
        }
    ],
    copilot: [
        {
            value: "individual",
            label: "Individual (Pro)"
        },
        {
            value: "business",
            label: "Business"
        },
        {
            value: "enterprise",
            label: "Enterprise"
        }
    ],
    claude_chat: [
        {
            value: "free",
            label: "Free"
        },
        {
            value: "pro",
            label: "Pro"
        },
        {
            value: "max",
            label: "Max"
        },
        {
            value: "team",
            label: "Team"
        },
        {
            value: "enterprise",
            label: "Enterprise"
        },
        {
            value: "api_direct",
            label: "API (direct)"
        }
    ],
    chatgpt: [
        {
            value: "plus",
            label: "Plus"
        },
        {
            value: "team",
            label: "Team / Business workspace"
        },
        {
            value: "enterprise",
            label: "Enterprise"
        },
        {
            value: "api_direct",
            label: "API (direct)"
        }
    ],
    anthropic_api: [
        {
            value: "api",
            label: "Usage-based API"
        }
    ],
    openai_api: [
        {
            value: "api",
            label: "Usage-based API"
        }
    ],
    gemini: [
        {
            value: "pro",
            label: "Google AI Pro"
        },
        {
            value: "ultra",
            label: "Google AI Ultra"
        },
        {
            value: "api",
            label: "Gemini API"
        }
    ],
    v0: [
        {
            value: "free",
            label: "Free"
        },
        {
            value: "team",
            label: "Team"
        },
        {
            value: "business",
            label: "Business"
        },
        {
            value: "enterprise",
            label: "Enterprise"
        }
    ]
};
}),
"[project]/src/lib/schemas.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auditFormSchema",
    ()=>auditFormSchema,
    "leadSchema",
    ()=>leadSchema,
    "publicAuditPayloadSchema",
    ()=>publicAuditPayloadSchema,
    "spendLineSchema",
    ()=>spendLineSchema,
    "toPublicPayload",
    ()=>toPublicPayload,
    "toolIdSchema",
    ()=>toolIdSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-ssr] (ecmascript) <export * as z>");
;
const toolIdSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    "cursor",
    "copilot",
    "claude_chat",
    "chatgpt",
    "anthropic_api",
    "openai_api",
    "gemini",
    "v0"
]);
const spendLineSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    toolId: toolIdSchema,
    plan: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).max(64),
    monthlySpend: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1_000_000),
    seats: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0).max(50_000)
});
const auditFormSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    teamSize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(1).max(50_000),
    useCase: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "coding",
        "writing",
        "data",
        "research",
        "mixed"
    ]),
    lines: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(spendLineSchema).min(1).max(40)
});
const publicAuditPayloadSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(1),
    teamSize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(1),
    useCase: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "coding",
        "writing",
        "data",
        "research",
        "mixed"
    ]),
    lines: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        toolId: toolIdSchema,
        plan: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        seats: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        currentMonthly: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        savingsMonthly: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        recommendedMonthly: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        recommendedSummary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        reason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })),
    totals: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        currentMonthly: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        savingsMonthly: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        savingsAnnual: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    }),
    overlapHint: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    creditMarketHint: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    wellOptimized: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    highSavings: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
});
const leadSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email().max(320),
    company: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(200).optional(),
    role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(120).optional(),
    teamSize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0).max(50_000).optional(),
    auditSlug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(8).max(32).optional(),
    /** Honeypot — must be empty */ companyWebsite: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(200).optional()
});
function toPublicPayload(input) {
    return {
        version: 1,
        teamSize: input.teamSize,
        useCase: input.useCase,
        lines: input.audit.lines.map((l)=>({
                toolId: l.toolId,
                plan: l.planLabel,
                seats: l.seats,
                currentMonthly: l.currentMonthly,
                savingsMonthly: l.savingsMonthly,
                recommendedMonthly: l.recommendedMonthly,
                recommendedSummary: l.recommendedSummary,
                reason: l.reason
            })),
        totals: {
            currentMonthly: input.audit.totalCurrentMonthly,
            savingsMonthly: input.audit.totalSavingsMonthly,
            savingsAnnual: input.audit.totalSavingsAnnual
        },
        overlapHint: input.audit.overlapHint,
        creditMarketHint: input.audit.creditMarketHint,
        wellOptimized: input.audit.wellOptimized,
        highSavings: input.audit.highSavings
    };
}
}),
"[project]/src/components/SpendAuditApp.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpendAuditApp",
    ()=>SpendAuditApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LeadCapture$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LeadCapture.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/audit/engine.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2f$labels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/audit/labels.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$toolConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/toolConfig.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/schemas.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const STORAGE_KEY = "spend-signal-form-v1";
const defaultLine = ()=>({
        toolId: "cursor",
        plan: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$toolConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLAN_OPTIONS"].cursor[1].value,
        monthlySpend: 20,
        seats: 1
    });
function loadForm() {
    if ("TURBOPACK compile-time truthy", 1) {
        return {
            teamSize: 5,
            useCase: "coding",
            lines: [
                defaultLine()
            ]
        };
    }
    //TURBOPACK unreachable
    ;
}
function SpendAuditApp() {
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>({
            teamSize: 5,
            useCase: "coding",
            lines: [
                defaultLine()
            ]
        }));
    const [hydrated, setHydrated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [audit, setAudit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [publicPayload, setPublicPayload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [summary, setSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [summaryLoading, setSummaryLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shareUrl, setShareUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [shareError, setShareError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Hydrate from localStorage after mount (avoid SSR/localStorage mismatch).
        // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional one-time client restore
        setForm(loadForm());
        setHydrated(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!hydrated) return;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
    }, [
        form,
        hydrated
    ]);
    const onRun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runAudit"])({
            teamSize: form.teamSize,
            useCase: form.useCase,
            lines: form.lines.filter((l)=>l.monthlySpend > 0)
        });
        setAudit(res);
        const pub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPublicPayload"])({
            teamSize: form.teamSize,
            useCase: form.useCase,
            audit: res
        });
        setPublicPayload(pub);
        setShareUrl(null);
        setShareError(null);
        setSummary(null);
        setSummaryLoading(true);
        void fetch("/api/summary", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pub)
        }).then((r)=>r.json()).then((j)=>{
            if (j.summary) setSummary(j.summary);
        }).finally(()=>{
            setSummaryLoading(false);
        });
    }, [
        form
    ]);
    const credexProminent = audit && audit.totalSavingsMonthly > 500;
    const addLine = ()=>setForm((f)=>({
                ...f,
                lines: [
                    ...f.lines,
                    defaultLine()
                ]
            }));
    const updateLine = (idx, patch)=>{
        setForm((f)=>{
            const lines = f.lines.map((l, i)=>i === idx ? {
                    ...l,
                    ...patch
                } : l);
            const next = lines[idx];
            if (!next) return f;
            if (patch.toolId) {
                const opts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$toolConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLAN_OPTIONS"][patch.toolId];
                const still = opts.some((o)=>o.value === next.plan);
                if (!still) next.plan = opts[0].value;
            }
            return {
                ...f,
                lines
            };
        });
    };
    const removeLine = (idx)=>setForm((f)=>({
                ...f,
                lines: f.lines.filter((_, i)=>i !== idx)
            }));
    const onShare = async ()=>{
        if (!publicPayload) return;
        setShareError(null);
        const res = await fetch("/api/share", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(publicPayload)
        });
        const j = await res.json();
        if (!res.ok) {
            setShareError(j.error === "storage_unavailable" ? "Sharing requires Supabase env vars—see README." : "Could not create share link.");
            return;
        }
        if (j.url) setShareUrl(j.url);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto flex max-w-5xl flex-col gap-10 px-4 py-12 sm:px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/90",
                        children: "Spend Signal"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-semibold tracking-tight text-white sm:text-4xl",
                        children: "The two-minute AI spend audit"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-2xl text-lg text-zinc-400",
                        children: "Benchmark your stack against published vendor pricing, spot tier mismatches, and see where credits could stretch the budget further."
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SpendAuditApp.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900/80 to-zinc-950 p-6 shadow-2xl shadow-cyan-500/5 sm:p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 flex flex-wrap items-end gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "grid gap-1 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-zinc-400",
                                        children: "Team size"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: 1,
                                        value: form.teamSize,
                                        onChange: (e)=>setForm((f)=>({
                                                    ...f,
                                                    teamSize: Number(e.target.value) || 1
                                                })),
                                        className: "w-28 rounded-lg border border-white/10 bg-zinc-950 px-3 py-2 text-white outline-none focus:border-cyan-400/60"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "grid gap-1 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-zinc-400",
                                        children: "Primary use case"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: form.useCase,
                                        onChange: (e)=>setForm((f)=>({
                                                    ...f,
                                                    useCase: e.target.value
                                                })),
                                        className: "rounded-lg border border-white/10 bg-zinc-950 px-3 py-2 text-white outline-none focus:border-cyan-400/60",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "coding",
                                                children: "Coding"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                                lineNumber: 189,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "writing",
                                                children: "Writing"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                                lineNumber: 190,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "data",
                                                children: "Data"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                                lineNumber: 191,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "research",
                                                children: "Research"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                                lineNumber: 192,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "mixed",
                                                children: "Mixed"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                                lineNumber: 193,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: form.lines.map((line, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-3 rounded-2xl border border-white/5 bg-black/20 p-4 sm:grid-cols-12 sm:items-end",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "grid gap-1 text-sm sm:col-span-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-zinc-400",
                                                children: "Tool"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                                lineNumber: 205,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: line.toolId,
                                                onChange: (e)=>updateLine(idx, {
                                                        toolId: e.target.value
                                                    }),
                                                className: "rounded-lg border border-white/10 bg-zinc-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400/60",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$toolConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOOL_ORDER"].map((id)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: id,
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2f$labels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOOL_LABEL"][id]
                                                    }, id, false, {
                                                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                                lineNumber: 206,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "grid gap-1 text-sm sm:col-span-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-zinc-400",
                                                children: "Plan"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                                lineNumber: 223,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: line.plan,
                                                onChange: (e)=>updateLine(idx, {
                                                        plan: e.target.value
                                                    }),
                                                className: "rounded-lg border border-white/10 bg-zinc-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400/60",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$toolConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLAN_OPTIONS"][line.toolId].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: p.value,
                                                        children: p.label
                                                    }, p.value, false, {
                                                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                                                        lineNumber: 230,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                                lineNumber: 224,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                                        lineNumber: 222,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "grid gap-1 text-sm sm:col-span-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-zinc-400",
                                                children: "Monthly spend ($)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                                lineNumber: 237,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: 0,
                                                step: "1",
                                                value: line.monthlySpend,
                                                onChange: (e)=>updateLine(idx, {
                                                        monthlySpend: Number(e.target.value) || 0
                                                    }),
                                                className: "rounded-lg border border-white/10 bg-zinc-950 px-3 py-2 text-white outline-none focus:border-cyan-400/60"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                                lineNumber: 238,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                                        lineNumber: 236,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "grid gap-1 text-sm sm:col-span-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-zinc-400",
                                                children: "Seats"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                                lineNumber: 252,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: 0,
                                                value: line.seats,
                                                onChange: (e)=>updateLine(idx, {
                                                        seats: Number(e.target.value) || 0
                                                    }),
                                                className: "rounded-lg border border-white/10 bg-zinc-950 px-3 py-2 text-white outline-none focus:border-cyan-400/60"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                                lineNumber: 253,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                                        lineNumber: 251,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 sm:col-span-3 sm:justify-end",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>removeLine(idx),
                                            disabled: form.lines.length <= 1,
                                            className: "rounded-lg border border-white/10 px-3 py-2 text-sm text-zinc-300 hover:bg-white/5 disabled:opacity-30",
                                            children: "Remove"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SpendAuditApp.tsx",
                                            lineNumber: 264,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                                        lineNumber: 263,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex flex-wrap gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: addLine,
                                className: "rounded-xl border border-white/15 px-4 py-2.5 text-sm font-medium text-zinc-200 hover:bg-white/5",
                                children: "Add tool"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onRun,
                                className: "rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400",
                                children: "Run audit"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                lineNumber: 285,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SpendAuditApp.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            audit && publicPayload && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "space-y-8",
                id: "results",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-6 rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-zinc-900 to-zinc-950 p-8 sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-emerald-200/80",
                                        children: "Modeled monthly savings"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                                        lineNumber: 299,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-5xl font-semibold tracking-tight text-white",
                                        children: [
                                            "$",
                                            Math.round(audit.totalSavingsMonthly).toLocaleString(),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl text-zinc-400",
                                                children: "/mo"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                                lineNumber: 304,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                                        lineNumber: 302,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-sm text-zinc-400",
                                        children: [
                                            "~$",
                                            Math.round(audit.totalSavingsAnnual).toLocaleString(),
                                            " / yr annualized (illustrative, not tax advice)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                                        lineNumber: 306,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                lineNumber: 298,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col justify-center gap-2 text-sm text-zinc-300",
                                children: audit.wellOptimized ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "You are spending thoughtfully relative to published tiers—no fake inflation here. Still worth capturing the report so we can ping you when vendors change pricing."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SpendAuditApp.tsx",
                                    lineNumber: 313,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Savings come from published price ladders, seat math, and a few conservative overlap rules—see each line for the rationale."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SpendAuditApp.tsx",
                                    lineNumber: 319,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                lineNumber: 311,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                        lineNumber: 297,
                        columnNumber: 11
                    }, this),
                    credexProminent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-3xl border border-cyan-400/30 bg-cyan-500/10 p-6 sm:p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold text-white",
                                children: "Capture the rest with Credex"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                lineNumber: 329,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 max-w-2xl text-sm leading-relaxed text-cyan-50/90",
                                children: "Plan changes recover part of the gap; discounted AI infrastructure credits (Cursor, Claude, ChatGPT Enterprise, and others) often close the remainder for high-usage teams. Book a short consultation if you want a human to pressure-test these numbers against your invoices."
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                lineNumber: 332,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "mt-4 inline-flex rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900",
                                href: "https://www.credex.com",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Talk to Credex"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                lineNumber: 339,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                        lineNumber: 328,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-3xl border border-white/10 bg-zinc-900/40 p-6 sm:p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold text-white",
                                children: "AI summary"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                lineNumber: 351,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 min-h-[4.5rem] text-sm leading-relaxed text-zinc-300",
                                children: [
                                    summaryLoading && !summary ? "Generating summary…" : null,
                                    summary
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                lineNumber: 352,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                        lineNumber: 350,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold text-white",
                                children: "Per-tool view"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                lineNumber: 359,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: audit.lines.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-white/5 bg-black/25 p-4 sm:flex sm:justify-between sm:gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium text-white",
                                                        children: [
                                                            l.toolLabel,
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-zinc-500",
                                                                children: "·"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                                                lineNumber: 369,
                                                                columnNumber: 23
                                                            }, this),
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-zinc-400",
                                                                children: l.planLabel
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                                                lineNumber: 370,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                                                        lineNumber: 367,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-xs text-zinc-500",
                                                        children: [
                                                            l.seats,
                                                            " seat",
                                                            l.seats === 1 ? "" : "s",
                                                            " · Current $",
                                                            l.currentMonthly.toLocaleString(),
                                                            "/mo"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                                                        lineNumber: 372,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-sm text-zinc-300",
                                                        children: l.reason
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                                                        lineNumber: 376,
                                                        columnNumber: 21
                                                    }, this),
                                                    l.alternativeHint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-xs text-cyan-200/80",
                                                        children: l.alternativeHint
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                                                        lineNumber: 378,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                                lineNumber: 366,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 shrink-0 text-right sm:mt-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs uppercase tracking-wide text-zinc-500",
                                                        children: "Action"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                                                        lineNumber: 384,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium text-emerald-300",
                                                        children: l.recommendedSummary
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                                                        lineNumber: 387,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-lg font-semibold text-white",
                                                        children: [
                                                            "−$",
                                                            l.savingsMonthly.toLocaleString(),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-zinc-500",
                                                                children: "/mo"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                                                lineNumber: 392,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                                                        lineNumber: 390,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                                lineNumber: 383,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, `${l.toolId}-${l.planLabel}-${l.currentMonthly}`, true, {
                                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                                        lineNumber: 362,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                lineNumber: 360,
                                columnNumber: 13
                            }, this),
                            audit.overlapHint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-amber-500/30 bg-amber-500/5 p-4 text-sm text-amber-100/90",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-amber-200",
                                        children: "Overlap note: "
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                                        lineNumber: 400,
                                        columnNumber: 17
                                    }, this),
                                    audit.overlapHint
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                lineNumber: 399,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                        lineNumber: 358,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-3xl border border-white/10 bg-zinc-900/50 p-6 sm:p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold text-white",
                                children: "Share & keep this audit"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                lineNumber: 407,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm text-zinc-400",
                                children: "Public links strip email and company names—only tools and savings math travel with the URL."
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                lineNumber: 410,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex flex-wrap gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>void onShare(),
                                        className: "rounded-xl border border-white/15 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/5",
                                        children: "Create public link"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                                        lineNumber: 415,
                                        columnNumber: 15
                                    }, this),
                                    shareUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "break-all text-sm text-cyan-300",
                                        children: shareUrl
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                                        lineNumber: 423,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                lineNumber: 414,
                                columnNumber: 13
                            }, this),
                            shareError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm text-rose-400",
                                children: shareError
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                lineNumber: 427,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LeadCapture$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LeadCapture"], {
                                shareUrl: shareUrl
                            }, void 0, false, {
                                fileName: "[project]/src/components/SpendAuditApp.tsx",
                                lineNumber: 429,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SpendAuditApp.tsx",
                        lineNumber: 406,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SpendAuditApp.tsx",
                lineNumber: 296,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SpendAuditApp.tsx",
        lineNumber: 146,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_0fbe6q1._.js.map