# Manual Deployment Guide for DSX Troubleshooter

Since Git is not installed on your system, here's how to manually deploy the application to GitHub Pages.

## Step 1: Prepare the deployment files

1. Run the `deploy.bat` script by double-clicking it or running it from the command prompt:
   ```
   deploy.bat
   ```

2. This will create a folder called `dsx-deployment` in the parent directory containing all the necessary files.

## Step 2: Upload files to GitHub

### Option A: Using GitHub Web Interface

1. Go to your GitHub repository: https://github.com/mattfelber/dsx

2. If the repository is empty:
   - Click on "uploading an existing file" link
   - Drag and drop all files from the `dsx-deployment` folder
   - Click "Commit changes"

3. If the repository already has files:
   - You'll need to upload files in batches
   - Start with smaller files first
   - Then upload larger files
   - Commit after each batch

### Option B: Using GitHub Desktop

1. Download and install GitHub Desktop from: https://desktop.github.com/

2. Sign in with your GitHub account

3. Clone your repository:
   - File > Clone repository > URL
   - Enter: https://github.com/mattfelber/dsx.git
   - Choose a local path and click "Clone"

4. Copy all files from the `dsx-deployment` folder to the cloned repository folder

5. In GitHub Desktop:
   - You'll see all the changed files
   - Enter a summary like "Deploy DSX Troubleshooter"
   - Click "Commit to main"
   - Click "Push origin"

## Step 3: Enable GitHub Pages

1. Go to your GitHub repository: https://github.com/mattfelber/dsx

2. Click on "Settings" tab

3. In the left sidebar, click on "Pages"

4. Under "Source", select:
   - Branch: main
   - Folder: / (root)

5. Click "Save"

6. Wait a few minutes for GitHub to build and deploy your site

7. Your site will be available at: https://mattfelber.github.io/dsx/

## Troubleshooting

- If your site shows a 404 error, make sure GitHub Pages is enabled correctly
- If your site is blank, check that all files were uploaded properly
- If you see path errors, check that the `homepage` field in `package.json` is set to `"https://mattfelber.github.io/dsx"`

## Updating the Application

When you need to update the application:

1. Make your changes to the code
2. Run `deploy.bat` again to generate new deployment files
3. Upload the new files to GitHub following the steps above
