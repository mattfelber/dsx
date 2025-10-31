# DSX Docking Station Network Troubleshooter

An interactive web application for troubleshooting network connectivity issues with DSX Docking Stations.

## Live Demo

Visit the live application: [https://mattfelber.github.io/dsx/](https://mattfelber.github.io/dsx/)

## Features

- Step-by-step troubleshooting guidance
- Interactive decision tree interface
- Visual status indicators
- Troubleshooting path tracking
- Comprehensive summary generation
- Copy to clipboard functionality
- Mobile responsive design

## Technical Stack

- React with TypeScript
- Tailwind CSS for styling
- GitHub Pages for hosting

## Local Development

1. Clone the repository:
   ```
   git clone https://github.com/mattfelber/dsx.git
   cd dsx
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment to GitHub Pages

### Automatic Deployment

1. Build and deploy the application:
   ```
   npm run deploy
   ```

2. The application will be deployed to GitHub Pages automatically.

### Manual Deployment

1. Build the application:
   ```
   npm run build
   ```

2. Push the contents of the `build` folder to the GitHub repository.

3. Enable GitHub Pages in the repository settings.

## Modifying the Decision Tree

To modify the troubleshooting logic, edit the `src/data/decisionTree.ts` file. The decision tree is structured as a collection of nodes, each with a question and a set of options that lead to other nodes.

## License

This project is proprietary and confidential.
