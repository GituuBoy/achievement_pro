# Dependencies

This document lists the primary dependencies used in the application and provides a brief explanation of their roles. Understanding the dependencies is crucial for maintaining, extending, and troubleshooting the project.

Dependencies are managed using `npm` (Node Package Manager) and are listed in the `frontend/package.json` file.

## Production Dependencies (`dependencies`)

These are the packages required for the application to run in a production environment.

-   **`@reduxjs/toolkit`**:
    -   **Role**: The official, opinionated, batteries-included toolset for efficient Redux development. It simplifies state management by providing utilities for creating reducers, actions, and the store with less boilerplate.
-   **`@tailwindcss/postcss`**:
    -   **Role**: A PostCSS plugin that integrates Tailwind CSS with PostCSS. Used to process Tailwind directives and features.
-   **`autoprefixer`**:
    -   **Role**: A PostCSS plugin that adds vendor prefixes to CSS rules, ensuring compatibility across different browsers.
-   **`konsta`**:
    -   **Role**: A UI component library that provides a set of pre-built, mobile-first React components, often used for creating iOS and Android styled interfaces.
-   **`postcss`**:
    -   **Role**: A tool for transforming CSS with JavaScript plugins. It's used as a build dependency for processing CSS, including Tailwind CSS and PostCSS Nesting.
-   **`postcss-nesting`**:
    -   **Role**: A PostCSS plugin that enables the use of nested CSS rules, similar to Sass, which improves the readability and organization of stylesheets.
-   **`react`**:
    -   **Role**: The core JavaScript library for building user interfaces. It enables the creation of reusable UI components and manages the component lifecycle.
-   **`react-dom`**:
    -   **Role**: Provides DOM-specific methods that can be used at the top level of a web app to enable efficient updates of the browser's DOM. It works in conjunction with `react`.
-   **`react-redux`**:
    -   **Role**: The official React bindings for Redux. It provides hooks (`useSelector`, `useDispatch`) to connect React components to the Redux store.
-   **`tailwindcss`**:
    -   **Role**: A utility-first CSS framework that provides low-level utility classes to build custom designs directly in your markup.

## Development Dependencies (`devDependencies`)

These packages are only required during development and testing, and are not included in the production build.

-   **`@eslint/js`**:
    -   **Role**: ESLint's core JavaScript rules.
-   **`@types/react`**:
    -   **Role**: TypeScript type definitions for React, providing type checking for React components and APIs.
-   **`@types/react-dom`**:
    -   **Role**: TypeScript type definitions for `react-dom`, providing type checking for DOM-specific React methods.
-   **`@vitejs/plugin-react`**:
    -   **Role**: A Vite plugin that provides React Fast Refresh and other React-specific optimizations for Vite.
-   **`eslint`**:
    -   **Role**: A pluggable linting utility for JavaScript and JSX, used to identify and report on patterns found in ECMAScript/JavaScript code.
-   **`eslint-plugin-react-hooks`**:
    -   **Role**: An ESLint plugin that enforces rules of Hooks.
-   **`eslint-plugin-react-refresh`**:
    -   **Role**: An ESLint plugin to detect issues with React Fast Refresh.
-   **`globals`**:
    -   **Role**: A package that provides global variables for ESLint configurations.
-   **`typescript`**:
    -   **Role**: The TypeScript compiler, used to compile TypeScript code into JavaScript.
-   **`typescript-eslint`**:
    -   **Role**: Tools for integrating ESLint with TypeScript, allowing ESLint to lint TypeScript code.
-   **`vite`**:
    -   **Role**: A next-generation frontend tooling that provides an extremely fast development server and optimizes the build process for production.