# Project Structure

This section details the directory and file structure of the application, explaining the purpose of each significant directory and file.

```
.
├── docs/                     # Documentation files
├── frontend/                 # Frontend application source code
│   ├── public/               # Static assets (e.g., index.html, favicon)
│   │   └── vite.svg
│   ├── src/                  # Main application source code
│   │   ├── assets/           # Static assets like images and fonts
│   │   │   ├── images/       # Application images
│   │   │   └── react.svg
│   │   ├── components/       # Reusable UI components
│   │   │   └── common/       # Generic and shared components
│   │   │       ├── StepIndicator.test.tsx
│   │   │       ├── StepIndicator.tsx
│   │   │       ├── TextInput.test.tsx
│   │   │       └── TextInput.tsx
│   │   ├── screens/          # Application screens/pages
│   │   │   ├── onboarding/   # Screens related to user onboarding
│   │   │   │   ├── ProjectNameScreen.test.tsx
│   │   │   │   └── ProjectNameScreen.tsx
│   │   │   ├── WelcomeScreen.test.tsx
│   │   │   └── WelcomeScreen.tsx
│   │   ├── store/            # Redux store configuration and slices
│   │   │   ├── slices/       # Individual Redux slices for different features
│   │   │   │   ├── onboardingSlice.test.ts
│   │   │   │   └── onboardingSlice.ts
│   │   │   └── index.ts      # Redux store setup
│   │   ├── test/             # Test utilities and setup
│   │   │   ├── coverage/     # Test coverage reports (generated)
│   │   │   ├── fileMock.js
│   │   │   ├── setup.ts      # Test setup file
│   │   │   └── test-utils.tsx # Custom render function for tests
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── App.test.tsx
│   │   ├── App.tsx           # Main application component
│   │   ├── index.css
│   │   ├── main.tsx          # Entry point of the React application
│   │   └── vite-env.d.ts     # Vite environment type definitions
│   ├── .gitignore            # Git ignore file
│   ├── eslint.config.js      # ESLint configuration
│   ├── index.html            # Main HTML file
│   ├── package-lock.json     # npm dependency lock file
│   ├── package.json          # Project metadata and dependencies
│   ├── postcss.config.cjs    # PostCSS configuration
│   ├── README.md             # Project README file
│   ├── tailwind.config.cjs   # Tailwind CSS configuration
│   ├── tsconfig.app.json     # TypeScript configuration for application
│   ├── tsconfig.json         # Base TypeScript configuration
│   ├── tsconfig.node.json    # TypeScript configuration for Node.js environment
│   └── vite.config.ts        # Vite build configuration
└── documentation_plan.md     # The documentation plan itself
```

## Key Directories and Their Purposes

-   **`docs/`**: Contains all the project documentation written in Markdown.
-   **`frontend/`**: The root directory for the frontend application.
-   **`frontend/public/`**: Stores static assets that are served directly by the web server without being processed by the build pipeline.
-   **`frontend/src/`**: Contains the core source code of the React application.
    -   **`assets/`**: For static resources like images, fonts, and icons that are imported into components.
    -   **`components/`**: Houses reusable UI components. These components are typically stateless or manage their own local UI state and can be used across different screens.
        -   **`common/`**: Contains highly generic and shared components that can be used throughout the application.
    -   **`screens/`**: Contains top-level components that represent distinct pages or views of the application. Each screen typically orchestrates multiple components and interacts with the Redux store.
        -   **`onboarding/`**: Specific screens related to the user onboarding process.
    -   **`store/`**: Manages the application's global state using Redux Toolkit.
        -   **`slices/`**: Contains individual Redux slices, each managing the state and actions for a specific feature or domain.
    -   **`test/`**: Contains configuration and utilities for testing.
        -   **`coverage/`**: Automatically generated directory for test coverage reports.