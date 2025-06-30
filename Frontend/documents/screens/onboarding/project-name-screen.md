# ProjectNameScreen

This document describes the `ProjectNameScreen` component, which serves as the first step in the user onboarding flow, allowing the user to input the name of their new project.

## Purpose

The `ProjectNameScreen` is designed to collect essential information (the project name) at the beginning of the onboarding process. It integrates with the Redux store to manage the project name and displays the user's progress using a step indicator.

## Component Structure

The `ProjectNameScreen` is a functional React component that utilizes Redux hooks for state management and renders a combination of common UI components.

## State Management

*   **Redux Integration:** The screen uses `useDispatch` to dispatch actions and `useSelector` to access the `projectName` and `currentStep` from the `onboarding` slice of the Redux store.
*   **`projectName`:** The value of the text input field is bound to the `projectName` state in the Redux store. Changes to the input field dispatch the `setProjectName` action, updating the global state.
*   **`currentStep`:** The `currentStep` from the Redux store is passed to the `StepIndicator` component to visually represent the current position in the onboarding flow.

## Child Components

This screen utilizes the following common components:

*   **`StepIndicator`**: Displays the current step (fixed at 4 total steps for now) and highlights the active step.
*   **`TextInput`**: A reusable input field component used for collecting the project name. It is configured with a label, ID, current value from Redux, and an `onChange` handler to update the Redux state.

## Event Handlers

### `handleProjectNameChange(e: React.ChangeEvent<HTMLInputElement>)`

This function is triggered whenever the value of the `TextInput` for the project name changes. It dispatches the `setProjectName` action with the new input value to update the Redux store.

## Styling

The screen uses Tailwind CSS for layout and styling:

*   A main container `div` with `container`, `mx-auto`, and `p-4` for basic layout and padding.
*   A heading (`h1`) with `text-2xl`, `font-bold`, and `mb-4` for the screen title.

## File Location

[`achievement-project/src/screens/onboarding/ProjectNameScreen.tsx`](achievement-project/src/screens/onboarding/ProjectNameScreen.tsx)