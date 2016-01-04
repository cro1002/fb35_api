@echo off
set SRCDIR=..\api\
set DSTDIR=..\api_min\

echo.SRC=%SRCDIR%
echo.DST=%DSTDIR%

call::fncCompressYUI import.js

call::fncCompressCC application\core.js
call::fncCompressYUI application\functions.js

call::fncCompressYUI components\action.js
call::fncCompressYUI components\audio.js
call::fncCompressYUI components\image.js
call::fncCompressYUI components\link.js
call::fncCompressYUI components\text.js
call::fncCompressYUI components\video.js

call::fncCompressYUI plugins\croTools.js

call::fncCompressYUI plugins\drawing\drawing.css
call::fncCompressYUI plugins\drawing\drawing.js

call::fncCompressYUI plugins\memo\memo.css
call::fncCompressYUI plugins\memo\memo.js

call::fncCompressYUI plugins\pageview\click.js
call::fncCompressYUI plugins\pageview\flip.js
call::fncCompressYUI plugins\pageview\scroll.js
call::fncCompressYUI plugins\pageview\slide.js

call::fncCompressYUI plugins\printview\printview.css
call::fncCompressYUI plugins\printview\printview.js

call::fncCompressYUI plugins\slideshow\slideshow.css
call::fncCompressYUI plugins\slideshow\slideshow.js

call::fncCompressYUI plugins\zoomview\zoomview.css
call::fncCompressYUI plugins\zoomview\zoomview.js

echo.compress done!
echo.&goto:eof

::---------------------
:: js/css file compress by YUI
:fncCompressYUI
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
:fncCompressCC
SETLOCAL
set SRCFILEPATH=%SRCDIR%%~1
set DSTFILEPATH=%DSTDIR%%~1

IF EXIST %DSTFILEPATH% ( del "%DSTFILEPATH%" )

java -jar closure-compiler.jar -O SIMPLE --js="%SRCFILEPATH%" --js_output_file="%DSTFILEPATH%.tmp"

CScript /nologo "packer.wsf" "%DSTFILEPATH%.tmp" >> %DSTFILEPATH%
del "%DSTFILEPATH%.tmp"

echo.Closure compress complete [ %~1 ]
goto:eof






