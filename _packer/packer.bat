@echo off
set SRCDIR=..\api\
set DSTDIR=..\api_min\

echo.SRC=%SRCDIR%
echo.DST=%DSTDIR%

copy %SRCDIR%plugins\resource.js %DSTDIR%plugins\resource.js /Y

call::fncCompYUI import.js

call::fncCompCC application\core.js
call::fncCompYUI application\functions.js

call::fncCompYUI components\action.js
call::fncCompYUI components\audio.js
call::fncCompYUI components\image.js
call::fncCompYUI components\link.js
call::fncCompYUI components\text.js
call::fncCompYUI components\video.js

call::fncCompYUI plugins\croTools.js

call::fncCompYUI plugins\drawing\drawing.css
call::fncCompYUI plugins\drawing\drawing.js

call::fncCompYUI plugins\memo\memo.css
call::fncCompYUI plugins\memo\memo.js

call::fncCompYUI plugins\pageview\click.js
call::fncCompYUI plugins\pageview\flip.js
call::fncCompYUI plugins\pageview\scroll.js
call::fncCompYUI plugins\pageview\slide.js

call::fncCompYUI plugins\printview\printview.css
call::fncCompYUI plugins\printview\printview.js

call::fncCompYUI plugins\slideshow\slideshow.css
call::fncCompYUI plugins\slideshow\slideshow.js

call::fncCompYUI plugins\zoomview\zoomview.css
call::fncCompYUI plugins\zoomview\zoomview.js

echo.compress done!
echo.&goto:eof

::---------------------
:: js/css file compress by YUI
:fncCompYUI
SETLOCAL
set SRCFILEPATH=%SRCDIR%%~1
set DSTFILEPATH=%DSTDIR%%~1

set EXT=%~1
set EXT=%EXT:~-3%

IF EXIST %DSTFILEPATH% ( del "%DSTFILEPATH%" )
IF .js==%EXT% (
java -jar yuicompressor-2.4.8.jar "%SRCFILEPATH%" -o "%DSTFILEPATH%.tmp"
CScript /nologo "packer.wsf" "%DSTFILEPATH%.tmp" >> %DSTFILEPATH%
del "%DSTFILEPATH%.tmp"
) ELSE (
java -jar yuicompressor-2.4.8.jar "%SRCFILEPATH%" -o "%DSTFILEPATH%"
)
echo.YUI compress complete [ %~1 ]
goto:eof



::---------------------
:: js file compress by ClosureCompress
:fncCompCC
SETLOCAL
set SRCFILEPATH=%SRCDIR%%~1
set DSTFILEPATH=%DSTDIR%%~1

IF EXIST %DSTFILEPATH% ( del "%DSTFILEPATH%" )

java -jar closure-compiler.jar -O SIMPLE --js="%SRCFILEPATH%" --js_output_file="%DSTFILEPATH%.tmp"

CScript /nologo "packer.wsf" "%DSTFILEPATH%.tmp" >> %DSTFILEPATH%
del "%DSTFILEPATH%.tmp"

echo.Closure compress complete [ %~1 ]
goto:eof






