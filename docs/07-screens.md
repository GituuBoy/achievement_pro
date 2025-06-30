# Screens

This section provides documentation for all screens (pages) within the application. Screens represent distinct views or user interfaces that users interact with directly.

Each screen's documentation will include:

-   A description of the screen's purpose and its role in the overall user flow.
-   A list of the main components used on the screen.
-   Details on how the screen interacts with the Redux store for state management (which slices it consumes or dispatches actions to).

## List of Screens

The following screens are documented in this section:

-   [`WelcomeScreen`](docs/screens/WelcomeScreen.md)
-   [`ProjectNameScreen`](docs/screens/onboarding/ProjectNameScreen.md)

---

## How to Document a New Screen

When creating a new screen or documenting an existing one, follow these guidelines:

1.  **Create a new Markdown file**: Inside the `docs/screens/` directory (or a relevant sub-directory like `docs/screens/onboarding/`), create a new Markdown file named after the screen (e.g., `MyNewScreen.md`).
2.  **Add Screen Description**: Start with a clear and concise description of the screen's purpose and user journey.
3.  **List Used Components**: Enumerate the key reusable components that compose the screen.
4.  **Describe State Management Interactions**: Explain which Redux slices are used by the screen and what actions are dispatched.