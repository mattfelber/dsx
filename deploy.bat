@echo off
echo Preparing DSX Troubleshooter files for GitHub Pages...

rem Build the React application if not already built
if not exist "build" (
    echo Building the application...
    call npm run build
)

rem Create a deployment directory at the same level as the project directory
set DEPLOY_DIR=..\dsx-deployment

rem Create or clear the deployment directory
if exist "%DEPLOY_DIR%" rmdir /s /q "%DEPLOY_DIR%"
mkdir "%DEPLOY_DIR%"

rem Copy the build files to the deployment directory
echo Copying files to %DEPLOY_DIR%...
xcopy /E /I "build\*" "%DEPLOY_DIR%"

rem Create a .nojekyll file to prevent GitHub Pages from processing with Jekyll
type nul > "%DEPLOY_DIR%\.nojekyll"

echo.
echo Deployment files prepared in %DEPLOY_DIR%
echo.
echo Since Git is not installed, you will need to:
echo 1. Upload these files to your GitHub repository manually
echo 2. You can use the GitHub web interface to upload files
echo 3. Or install GitHub Desktop from https://desktop.github.com/
echo.
echo Next steps:
echo 1. Upload the files from %DEPLOY_DIR% to: https://github.com/mattfelber/dsx
echo 2. Enable GitHub Pages in your repository settings (Settings -> Pages)
echo 3. Set the source to the main branch and root folder
echo.
echo Your site will be available at: https://mattfelber.github.io/dsx/
pause
