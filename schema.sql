-- Run in Supabase SQL editor (https://supabase.com/dashboard) for Spend Signal.
-- Table names are generic so the schema is portable.

create extension if not exists pgcrypto;

create table if not exists public.shared_audits (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  payload jsonb not null,
  created_at timestamptz not null default now()
);

create index if not exists shared_audits_created_at_idx on public.shared_audits (created_at desc);

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  company text,
  role text,
  team_size int,
  audit_slug text,
  created_at timestamptz not null default now()
);

create index if not exists leads_email_created_idx on public.leads (email, created_at desc);

create table if not exists public.submission_events (
  id bigserial primary key,
  ip_hash text not null,
  kind text not null,
  created_at timestamptz not null default now()
);

create index if not exists submission_events_ip_created_idx
  on public.submission_events (ip_hash, created_at desc);

alter table public.shared_audits enable row level security;
alter table public.leads enable row level security;
alter table public.submission_events enable row level security;

-- Service role bypasses RLS; no public policies (server-only access).
