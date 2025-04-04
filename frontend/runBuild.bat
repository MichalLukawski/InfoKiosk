@echo off
cd /d %~dp0

:: Uruchomienie backendu w trybie produkcyjnym
npm run build
