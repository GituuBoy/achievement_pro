# WelcomeScreen

The `WelcomeScreen` is the initial screen presented to users when they first open the application. It serves as an introduction to the application's purpose and prompts the user to get started.

## Purpose

-   To provide a visually appealing and informative introduction to the application.
-   To convey the core value proposition of the application ("Turn your idea into a real-world, tangible project in just four weeks").
-   To encourage users to begin their journey by navigating to the next step (e.g., onboarding).

## Components Used

The `WelcomeScreen` is composed of several smaller, functional components:

-   **`WelcomeHeader`**: Displays a hero image and a subtle gradient overlay.
-   **`WelcomeMain`**: Contains the main heading and a descriptive paragraph about the application's goal.
-   **`WelcomeFooter`**: Houses the "Get Started" button, which typically initiates the onboarding process.
-   **`Page` (from Konsta/React)**: A layout component that provides a consistent page structure.
-   **`Button` (from Konsta/React)**: A UI component for interactive buttons.
-   **`Toolbar` (from Konsta/React)**: A container for placing buttons or other interactive elements, often at the bottom of a page.

## State Management Interactions

The `WelcomeScreen` is primarily a presentational screen and does not directly interact with the Redux store by dispatching actions or consuming global state. Its main function is to display introductory content and provide a navigation point.

The "Get Started" button, when clicked, would typically trigger a navigation action (e.g., using a routing library) that leads to the first step of the onboarding process, which might then interact with the `onboardingSlice` in the Redux store. However, the `WelcomeScreen` itself remains decoupled from direct state management.

## Test File

-   [`frontend/src/screens/WelcomeScreen.test.tsx`](frontend/src/screens/WelcomeScreen.test.tsx)