import { createHash } from "node:crypto";
import { createAdminClient, isSupabaseConfigured } from "@/lib/supabase/admin";

const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 25;

export function hashIp(ip: string | null): string {
  const raw = ip?.trim() || "unknown";
  return createHash("sha256").update(raw).digest("hex");
}

export async function assertRateLimit(ipHash: string): Promise<void> {
  if (!isSupabaseConfigured()) return;
  const supabase = createAdminClient();
  const since = new Date(Date.now() - WINDOW_MS).toISOString();
  const { count, error } = await supabase
    .from("submission_events")
    .select("*", { count: "exact", head: true })
    .eq("ip_hash", ipHash)
    .gte("created_at", since);

  if (error) throw new Error(error.message);
  if ((count ?? 0) >= MAX_PER_WINDOW) {
    throw new Error("rate_limited");
  }
}

export async function recordSubmissionEvent(
  ipHash: string,
  kind: string,
): Promise<void> {
  if (!isSupabaseConfigured()) return;
  const supabase = createAdminClient();
  const { error } = await supabase.from("submission_events").insert({
    ip_hash: ipHash,
    kind,
  });
  if (error) throw new Error(error.message);
}
