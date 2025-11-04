@echo off
echo Building Samvidhan Gyan for production...
call npm run build
if %errorlevel% neq 0 (
    echo.
    echo Build failed. Please check the error messages above.
    pause
    exit /b %errorlevel%
)
echo.
echo Build completed successfully!
echo Output is in the 'dist' folder
pause
