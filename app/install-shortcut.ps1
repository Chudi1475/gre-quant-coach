# Creates / refreshes the "GRE Quant Coach" desktop shortcut (Edge app-window mode).
# Safe to re-run any time (e.g. if you move the folder).
$ErrorActionPreference = 'Stop'

$appDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$html   = Join-Path $appDir 'index.html'
$icon   = Join-Path $appDir 'assets\icon.ico'
$url    = ([Uri]$html).AbsoluteUri   # encodes spaces -> %20 and # -> %23

# locate Microsoft Edge
$edge = $null
$cands = @(
  (Join-Path ${env:ProgramFiles(x86)} 'Microsoft\Edge\Application\msedge.exe'),
  (Join-Path $env:ProgramFiles 'Microsoft\Edge\Application\msedge.exe')
)
foreach ($p in $cands) { if ($p -and (Test-Path $p)) { $edge = $p; break } }
if (-not $edge) {
  try { $edge = (Get-ItemProperty 'HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\msedge.exe' -ErrorAction Stop).'(default)' } catch {}
}

# dedicated profile -> own taskbar identity (not grouped with your browsing Edge) + isolated storage
$udd = Join-Path $env:LOCALAPPDATA 'GREQuantCoach'
$edgeArgs = '--app="' + $url + '" --user-data-dir="' + $udd + '" --no-first-run --no-default-browser-check --window-size=1200,860'

$desktop = [Environment]::GetFolderPath('Desktop')
$lnk = Join-Path $desktop 'GRE Quant Coach.lnk'
$ws = New-Object -ComObject WScript.Shell
$sc = $ws.CreateShortcut($lnk)
if ($edge) {
  $sc.TargetPath = $edge
  $sc.Arguments  = $edgeArgs
} else {
  # no Edge -> open in default browser
  $sc.TargetPath = $url
}
$sc.WorkingDirectory = $appDir
if (Test-Path $icon) { $sc.IconLocation = "$icon,0" }
$sc.Description = 'GRE Quantitative Reasoning Coach'
$sc.Save()

# keep a backup copy of the shortcut inside the project
$backup = Join-Path $appDir 'launch\GRE Quant Coach.lnk'
Copy-Item $lnk $backup -Force

# also write a double-clickable .cmd launcher (fallback)
$cmd = @"
@echo off
set "URL=$url"
set "EDGE=$edge"
set "UDD=$udd"
if exist "%EDGE%" ( start "" "%EDGE%" --app="%URL%" --user-data-dir="%UDD%" --no-first-run --no-default-browser-check --window-size=1200,860 ) else ( start "" "%URL%" )
"@
Set-Content -Path (Join-Path $appDir 'launch\Launch GRE Quant Coach.cmd') -Value $cmd -Encoding ASCII

$edgeMsg = if ($edge) { $edge } else { '(not found - will use default browser)' }
Write-Output "Shortcut created: $lnk"
Write-Output "Edge: $edgeMsg"
Write-Output "URL:  $url"
