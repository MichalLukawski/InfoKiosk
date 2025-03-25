@echo off
:: Odczekanie 30 sekund przed pierwszym F5
timeout /t 30 /nobreak

:: Wysłanie klawisza F5 (odświeżenie)
powershell -WindowStyle Hidden -command "$wshell = New-Object -ComObject wscript.shell; $wshell.SendKeys('{F5}')"

:loop
:: Wysłanie klawisza Ctrl + 0 (przywrócenie domyślnego zoomu)
powershell -WindowStyle Hidden -command "$wshell = New-Object -ComObject wscript.shell; $wshell.SendKeys('^0')"

:: Odczekanie 45 sekund przed kolejną iteracją
timeout /t 45 /nobreak
goto loop
