@echo off
set DEST=.\.exvim.test
set TOOLS=C:\exVim\vimfiles\tools\
set EXCLUDE_FOLDERS=
set TMP=%DEST%\_ID
set TARGET=%DEST%\ID
call %TOOLS%\shell\batch\update-idutils.bat
