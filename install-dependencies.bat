@echo off
echo Installing Samvidhan Gyan dependencies...
call npm install
if %errorlevel% neq 0 (
    echo.
    echo Installation failed. Please check the error messages above.
    pause
    exit /b %errorlevel%
)
echo.
echo Dependencies installed successfully!
echo.
echo To start the development server, run: npm run dev
echo or double-click start-dev.bat
pause
