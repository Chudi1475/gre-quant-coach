# daily-coach.ps1 — runs once a day (via Scheduled Task) to review what you studied,
# remember it, and make one small improvement to the GRE Quant Coach. Safe to run by hand.
$ErrorActionPreference = 'SilentlyContinue'

$proj = 'C:\Users\Chudi\Desktop\Desktop#2\GRE COACH'
$progress = Join-Path $proj 'gre-quant\progress'
$dailyDir = Join-Path $proj 'gre-quant\daily'
New-Item -ItemType Directory -Force $progress | Out-Null
New-Item -ItemType Directory -Force $dailyDir | Out-Null

# Collect candidate snapshots from common Downloads locations + the project folder
$downloads = @(
  (Join-Path $env:USERPROFILE 'Downloads'),
  (Join-Path $env:USERPROFILE 'OneDrive\Downloads')
) | Where-Object { Test-Path $_ }

$cands = @()
foreach ($d in $downloads) {
  $cands += Get-ChildItem $d -Filter 'gre-coach-state*.json' -ErrorAction SilentlyContinue
  $cands += Get-ChildItem $d -Filter 'gre-coach-backup*.json' -ErrorAction SilentlyContinue
}
$cands += Get-ChildItem $proj -Filter 'gre-coach-*.json' -ErrorAction SilentlyContinue

$newest = $cands | Sort-Object LastWriteTime -Descending | Select-Object -First 1
if ($newest) {
  Copy-Item $newest.FullName (Join-Path $progress 'app-state.latest.json') -Force
  Write-Output ("snapshot: " + $newest.FullName)
} else {
  Write-Output "snapshot: none found"
}

$promptPath = Join-Path $proj 'app\daily\daily-coach.prompt.md'
$prompt = Get-Content $promptPath -Raw
$log = Join-Path $dailyDir ('run-' + (Get-Date -Format 'yyyy-MM-dd') + '.log')

Set-Location $proj
"=== daily-coach run $(Get-Date -Format 'yyyy-MM-dd HH:mm') ===" | Out-File -FilePath $log -Append -Encoding utf8

# Headless Claude Code run. --dangerously-skip-permissions lets it edit/commit/push unattended,
# scoped to this project folder. Remove the flag (or the scheduled task) to disable.
& claude -p $prompt --dangerously-skip-permissions 2>&1 | Tee-Object -FilePath $log -Append

"=== done $(Get-Date -Format 'HH:mm') ===" | Out-File -FilePath $log -Append -Encoding utf8
