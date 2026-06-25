# setup-daily-coach.ps1 — RUN THIS ONCE to enable the daily coach.
# It registers a Windows Scheduled Task that runs app\daily-coach.ps1 every day at 7:00 PM:
# the task reviews what you studied, updates your learner memory, makes one small improvement
# to the app, and commits/pushes. The daily run uses Claude Code in unattended mode
# (--dangerously-skip-permissions) scoped to this project folder.
#
# To DISABLE later:  Unregister-ScheduledTask -TaskName 'GRE Coach Daily' -Confirm:$false
$ErrorActionPreference = 'Stop'

$runner = Join-Path (Split-Path -Parent $MyInvocation.MyCommand.Path) 'daily-coach.ps1'
if (-not (Test-Path $runner)) { throw "daily-coach.ps1 not found next to this script." }

$arg = '-NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File "' + $runner + '"'
$action  = New-ScheduledTaskAction -Execute 'powershell.exe' -Argument $arg
$trigger = New-ScheduledTaskTrigger -Daily -At '7:00PM'
$settings = New-ScheduledTaskSettingsSet -StartWhenAvailable -ExecutionTimeLimit (New-TimeSpan -Hours 1) `
              -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries

Register-ScheduledTask -TaskName 'GRE Coach Daily' -Action $action -Trigger $trigger -Settings $settings `
  -Description 'Daily GRE Quant Coach review + improvement' -Force | Out-Null

$info = Get-ScheduledTaskInfo -TaskName 'GRE Coach Daily'
Write-Host "Daily coach enabled. Next run:" $info.NextRunTime -ForegroundColor Green
Write-Host "Run it now to test:  powershell -ExecutionPolicy Bypass -File `"$runner`""
Write-Host "Disable any time:    Unregister-ScheduledTask -TaskName 'GRE Coach Daily' -Confirm:`$false"
