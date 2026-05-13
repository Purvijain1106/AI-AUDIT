# Run from repo root after Git is installed.
#   cd "d:\AI Audit"
#   .\scripts\push-to-github.ps1
#
# First-time setup (once):
#   git remote add origin https://github.com/Purvijain1106/AI-AUDIT.git
#
# Auth: GitHub Desktop, `gh auth login`, or HTTPS with a Personal Access Token.

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
Set-Location (Split-Path $PSScriptRoot)

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  Write-Error "Git is not installed or not on PATH. Install: https://git-scm.com/download/win"
}

if (-not (Test-Path ".git")) {
  git init
  git branch -M main
}

git add -A
if (-not (git status --porcelain)) {
  Write-Host "Nothing to commit."
  exit 0
}

git commit -m "chore: sync full Next.js Spend Signal app"
Write-Host "Pushing to origin main..."
git push -u origin main
