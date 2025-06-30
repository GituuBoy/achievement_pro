# Common Components

This document details the common and reusable UI components within the Achievement Project.

## App

*   **Location:** [`src/App.jsx`](achievement-project/src/App.jsx)
*   **Description:** The main application component that serves as the root of the React component tree. It currently displays a simple "Achievement Project" heading.
*   **Purpose:** To provide a base layout and entry point for the application's UI.
*   **Props:** None
*   **State:** None
*   **Dependencies:** None
*   **Usage Example:**
    ```jsx
    // src/main.jsx
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './App.jsx';
    import './index.css';

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
    ```
*   **Code Snippet:**
    ```jsx
    function App() {
      return (
        <div className="text-primary text-xl font-bold p-4">
          Achievement Project
        </div>
      );
    }
    export default App;
## TextInput

The `TextInput` component provides a reusable and styled input field for text-based data entry.
For more details, refer to the [TextInput Component Documentation](text-input.md).
## StepIndicator

The `StepIndicator` component visually represents the user's progress through a multi-step process.
For more details, refer to the [StepIndicator Component Documentation](step-indicator.md).