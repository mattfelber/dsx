# Deployment Guide for DSX Troubleshooter

This guide provides step-by-step instructions for deploying the DSX Troubleshooter application to GitHub Pages.

## Prerequisites

- Git installed on your computer
- Node.js and npm installed
- Access to the GitHub repository: https://github.com/mattfelber/dsx.git

## Option 1: Using npm run deploy (Recommended)

1. **Clone the repository** (if you haven't already):
   ```
   git clone https://github.com/mattfelber/dsx.git
   cd dsx
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Deploy to GitHub Pages**:
   ```
   npm run deploy
   ```

   This command will:
   - Build the application
   - Push the build files to the `gh-pages` branch of your repository
   - Make the application available at https://mattfelber.github.io/dsx/

## Option 2: Using the deploy.bat script (Windows only)

1. **Run the deployment script**:
   ```
   deploy.bat
   ```

2. **Copy the files** from the `deployment` directory to your GitHub repository.

3. **Push to GitHub**:
   ```
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

## Option 3: Manual deployment

1. **Build the application**:
   ```
   npm run build
   ```

2. **Copy the contents** of the `build` directory to the root of your GitHub repository.

3. **Push to GitHub**:
   ```
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

## Configuring GitHub Pages

1. Go to your GitHub repository: https://github.com/mattfelber/dsx

2. Click on **Settings** > **Pages**

3. Under **Source**, select:
   - Branch: `gh-pages` (if using Option 1) or `main` (if using Option 2 or 3)
   - Folder: `/ (root)`

4. Click **Save**

5. Your site will be published at https://mattfelber.github.io/dsx/

## Troubleshooting

- If you see a blank page, check the browser console for errors
- Ensure the `homepage` field in `package.json` is set correctly
- Make sure GitHub Pages is enabled in your repository settings
- If using a custom domain, update the `homepage` field accordingly

## Updating the Application

After making changes to the application:

1. Rebuild the application
2. Redeploy using one of the options above
3. The changes will be reflected on the GitHub Pages site

For any issues, please contact the development team.
