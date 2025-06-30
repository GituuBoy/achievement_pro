# ProjectNameScreen

The `ProjectNameScreen` is a crucial part of the onboarding process, allowing users to define the name for their new project. It integrates with the Redux store to manage the `projectName` state.

## Purpose

-   To capture the user-defined name for their project.
-   To provide an intuitive input field for project naming.
-   To update the global application state (`onboardingSlice`) with the entered project name.

## Components Used

The `ProjectNameScreen` utilizes several UI components, primarily from the Konsta UI library, and a custom `TextInput` component.

-   **`Page` (from Konsta/React)**: Provides the main page layout.
-   **`Navbar` (from Konsta/React)**: Displays a header for the screen, typically with the screen title.
-   **`List` (from Konsta/React)**: A container for grouping related form elements or information.
-   **`ListInput` (from Konsta/React)**: A specialized input component designed for use within Konsta `List` components, providing a consistent look and feel.
-   **`Button` (from Konsta/React)**: An interactive element to proceed to the next step.

## State Management Interactions

The `ProjectNameScreen` actively interacts with the Redux store, specifically the `onboardingSlice`.

-   **Reading State**: It uses the `useSelector` hook to read the current `projectName` from the `onboardingSlice` of the Redux store. This ensures that if the user navigates back to this screen, the previously entered project name is pre-filled.
    ```typescript
    const { projectName } = useSelector((state: RootState) => state.onboarding);
    ```
-   **Dispatching Actions**: It uses the `useDispatch` hook to dispatch the `setProjectName` action whenever the input field's value changes. This updates the `projectName` in the `onboardingSlice`.
    ```typescript
    const dispatch = useDispatch();
    const handleProjectNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setProjectName(e.target.value));
    };
    ```

## Test File

-   [`frontend/src/screens/onboarding/ProjectNameScreen.test.tsx`](frontend/src/screens/onboarding/ProjectNameScreen.test.tsx)