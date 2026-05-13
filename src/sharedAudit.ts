import { publicAuditPayloadSchema } from "@/lib/schemas";
import { createAdminClient, isSupabaseConfigured } from "@/lib/supabase/admin";
import type { PublicAuditPayload } from "@/lib/schemas";

export async function loadSharedAudit(
  slug: string,
): Promise<PublicAuditPayload | null> {
  if (!slug || slug.length > 40) return null;
  if (!isSupabaseConfigured()) return null;
  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("shared_audits")
      .select("payload")
      .eq("slug", slug)
      .maybeSingle();
    if (error || !data?.payload) return null;
    const parsed = publicAuditPayloadSchema.safeParse(data.payload);
    return parsed.success ? parsed.data : null;
  } catch {
    return null;
  }
}
