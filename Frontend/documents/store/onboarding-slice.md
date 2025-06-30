# Onboarding Redux Slice

This document details the `onboardingSlice` which manages the state related to the user onboarding process.

## Purpose

The `onboardingSlice` is responsible for storing and managing the user's progress through the onboarding flow, including data collected in each step (e.g., project name) and the current active step.

## State Structure

The `OnboardingState` interface defines the structure of the state managed by this slice:

```typescript
interface OnboardingState {
  projectName: string;
  currentStep: number;
}
```

*   `projectName`: A string storing the name of the project entered by the user during onboarding.
*   `currentStep`: A number indicating the current step in the onboarding process.

## Initial State

The initial state for the `onboardingSlice` is defined as:

```typescript
const initialState: OnboardingState = {
  projectName: '',
  currentStep: 1,
};
```

This sets the default project name to an empty string and the initial step to 1.

## Reducers

The `onboardingSlice` includes the following reducer functions to modify its state:

### `setProjectName(state, action: PayloadAction<string>)`

Updates the `projectName` in the state.

*   **Payload:** A string representing the new project name.
*   **Example Usage:**
    ```typescript
    dispatch(setProjectName('My New Project'));
    ```

### `setCurrentStep(state, action: PayloadAction<number>)`

Updates the `currentStep` in the state.

*   **Payload:** A number representing the new current step.
*   **Example Usage:**
    ```typescript
    dispatch(setCurrentStep(2));
    ```

## Integration

This slice is integrated into the main Redux store (typically in `src/store/index.ts`) to make its state and actions available throughout the application.

## File Location

[`achievement-project/src/store/slices/onboardingSlice.ts`](achievement-project/src/store/slices/onboardingSlice.ts)