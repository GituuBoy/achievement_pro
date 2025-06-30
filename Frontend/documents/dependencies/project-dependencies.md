# Project Dependencies

This document lists and describes the core dependencies and development dependencies used in the Achievement Project. These packages are managed via `npm` and defined in the [`package.json`](achievement-project/package.json) file.

## Core Dependencies (`dependencies`)

These packages are essential for the application's runtime functionality.

*   **[`@reduxjs/toolkit`](https://redux-toolkit.js.org/)**: A powerful, opinionated, batteries-included toolset for efficient Redux development. It simplifies common Redux tasks and patterns.
*   **[`framer-motion`](https://www.framer.com/motion/)**: A production-ready motion library for React. It provides declarative animations and gestures for building interactive UIs.
*   **[`lucide-react`](https://lucide.dev/icons/)**: A collection of beautiful and customizable open-source icons for React applications.
*   **[`react`](https://react.dev/)**: The JavaScript library for building user interfaces. It is the core framework for this project.
*   **[`react-dom`](https://react.dev/reference/react-dom)**: Provides DOM-specific methods that can be used at the top level of your web app to enable an efficient way of managing DOM elements.
*   **[`react-redux`](https://react-redux.js.org/)**: Official React bindings for Redux, allowing React components to read data from a Redux store, and dispatch actions to the store to update data.
*   **[`react-router-dom`](https://reactrouter.com/en/main)**: DOM bindings for React Router, providing declarative routing for React applications.

## Development Dependencies (`devDependencies`)

These packages are used during development, testing, and building the application, but are not required for the application to run in production.

*   **[`@eslint/js`](https://eslint.org/)**: ESLint's core rules as a flat config object.
*   **[`@types/react`](https://www.npmjs.com/package/@types/react)**: Type definitions for React, enabling TypeScript support for React components.
*   **[`@types/react-dom`](https://www.npmjs.com/package/@types/react-dom)**: Type definitions for ReactDOM, enabling TypeScript support for ReactDOM.
*   **[`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react)**: A Vite plugin that provides React Fast Refresh and other React-specific optimizations.
*   **[`autoprefixer`](https://github.com/postcss/autoprefixer)**: A PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use.
*   **[`eslint`](https://eslint.org/)**: A pluggable linting utility for JavaScript and JSX, used to identify and report on patterns found in ECMAScript/JavaScript code.
*   **[`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)**: ESLint rules for React Hooks.
*   **[`eslint-plugin-react-refresh`](https://www.npmjs.com/package/eslint-plugin-react-refresh)**: An ESLint plugin that warns if your components are not compatible with React Fast Refresh.
*   **[`globals`](https://www.npmjs.com/package/globals)**: A utility to get a list of global variables for various JavaScript environments.
*   **[`postcss`](https://postcss.org/)**: A tool for transforming CSS with JavaScript plugins. Used here for Tailwind CSS and Autoprefixer.
*   **[`tailwindcss`](https://tailwindcss.com/)**: A utility-first CSS framework for rapidly building custom designs.
*   **[`typescript`](https://www.typescriptlang.org/)**: A superset of JavaScript that adds static types, used for type-checking and improved development experience.
*   **[`typescript-eslint`](https://typescript-eslint.io/)**: Tooling which enables ESLint to support TypeScript.
*   **[`vite`](https://vitejs.dev/)**: A next-generation frontend tooling that provides an extremely fast development environment.