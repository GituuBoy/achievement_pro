# Components

This section provides documentation for all reusable UI components within the application. Components are the building blocks of the user interface, designed to be modular, reusable, and easy to test.

Each component's documentation will include:

-   A brief description of its purpose.
-   A table of its `props` (properties) detailing their name, type, default value, and description.
-   Code snippets demonstrating common usage examples.
-   A link to its corresponding test file for quick reference.

## List of Components

The following components are documented in this section:

-   [`TextInput`](docs/components/TextInput.md)
-   [`StepIndicator`](docs/components/StepIndicator.md)

---

## How to Document a New Component

When creating a new component or documenting an existing one, follow these guidelines:

1.  **Create a new Markdown file**: Inside the `docs/components/` directory, create a new Markdown file named after the component (e.g., `MyNewComponent.md`).
2.  **Add Component Description**: Start with a clear and concise description of what the component does.
3.  **Define Props Table**: Create a Markdown table for the component's props.
    | Prop Name | Type | Default | Description |
    |---|---|---|---|
    | `myProp` | `string` | `''` | A brief explanation of what `myProp` does. |
4.  **Provide Usage Examples**: Include code blocks showing how to use the component in various scenarios.
5.  **Link to Test File**: Add a link to the component's corresponding test file.