@echo off
set "URL=file:///C:/Users/Chudi/Desktop/Desktop%232/GRE%20COACH/app/index.html"
set "EDGE=C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if exist "%EDGE%" ( start "" "%EDGE%" --app="%URL%" --window-size=1200,860 ) else ( start "" "%URL%" )
