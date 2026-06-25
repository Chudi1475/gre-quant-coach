@echo off
set "URL=file:///C:/Users/Chudi/Desktop/Desktop%232/GRE%20COACH/app/index.html"
set "EDGE=C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
set "UDD=C:\Users\Chudi\AppData\Local\GREQuantCoach"
if exist "%EDGE%" ( start "" "%EDGE%" --app="%URL%" --user-data-dir="%UDD%" --no-first-run --no-default-browser-check --window-size=1200,860 ) else ( start "" "%URL%" )
