# DSX Docking Station Network Troubleshooter

A decision tree application to help troubleshoot DSX Docking Station network issues. This tool guides users through a step-by-step troubleshooting process and generates a summary of actions taken.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

Deploys the application to GitHub Pages. Before running this command, make sure to update the `homepage` field in `package.json` with your GitHub username:

```json
"homepage": "https://yourusername.github.io/dsx-troubleshooter"
```

Alternatively, you can deploy to Vercel by connecting your GitHub repository to Vercel and following their deployment instructions.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Project Structure

- `src/components/` - React components for the application
  - `DecisionTree.tsx` - Main component for the decision tree interface
  - `TroubleshootingSummary.tsx` - Component for displaying the troubleshooting summary
  - `Header.tsx` - Application header component
- `src/data/` - Data files
  - `decisionTree.ts` - Contains the decision tree structure and logic
- `src/types.ts` - TypeScript type definitions

## Modifying the Decision Tree

To modify the decision tree logic, edit the `src/data/decisionTree.ts` file. The decision tree is structured as a collection of nodes, each with a question and a set of options that lead to other nodes.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
