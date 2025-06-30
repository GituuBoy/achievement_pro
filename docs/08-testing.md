# Testing

This section outlines the testing strategy employed in the application, covering the tools used, how to run tests, and guidelines for writing new tests. A robust testing suite ensures the reliability, maintainability, and quality of the codebase.

## 1. Testing Stack

The application utilizes the following technologies for testing:

-   **Vitest**: A blazing fast unit-test framework powered by Vite. It provides a familiar API (similar to Jest) and integrates seamlessly with the Vite development environment.
-   **React Testing Library (RTL)**: A set of utilities for testing React components. RTL focuses on testing components the way users interact with them, promoting accessible and robust tests.
-   **JSDOM**: A JavaScript implementation of the DOM, used by Vitest to simulate a browser environment for running tests.

## 2. How to Run Tests

All tests are configured to run using Vitest.

-   **Running all tests**:
    To execute all unit and integration tests, use the following command from the `frontend/` directory:
    ```bash
    npm test
    # or
    yarn test
    ```
    This command will run tests in watch mode, re-running tests whenever changes are detected in the source code or test files.

-   **Running tests in a specific file**:
    To run tests only for a particular file, specify the file path:
    ```bash
    npm test frontend/src/components/common/TextInput.test.tsx
    # or
    yarn test frontend/src/components/common/TextInput.test.tsx
    ```

-   **Running tests that match a pattern**:
    You can filter tests by name using the `-t` or `--testNamePattern` flag:
    ```bash
    npm test -t "renders the input"
    # or
    yarn test -t "renders the input"
    ```

## 3. How to View Test Coverage

Test coverage reports provide insights into which parts of the codebase are covered by tests.

To generate and view a test coverage report, use the following command:
```bash
npm run coverage
# or
yarn coverage
```
This command will:
1.  Run all tests.
2.  Generate a detailed HTML coverage report in the `frontend/src/test/coverage/` directory.
3.  Open the `index.html` file in your default web browser, allowing you to explore coverage statistics per file and see uncovered lines of code.

## 4. Guidelines for Writing New Tests

When writing new tests, consider the following best practices:

-   **Test User Behavior**: Focus on testing how a user would interact with your components, rather than internal implementation details. Use queries from React Testing Library (e.g., `getByRole`, `getByText`, `findByLabelText`) to simulate user interactions.
-   **Arrange, Act, Assert (AAA)**: Structure your tests with these three phases:
    -   **Arrange**: Set up the test environment, render components, and define initial state.
    -   **Act**: Perform actions that simulate user interaction (e.g., clicking a button, typing into an input).
    -   **Assert**: Verify that the expected outcome occurred (e.g., text appeared, state changed, function was called).
-   **Mock Dependencies**: When testing a component in isolation, mock any external dependencies (e.g., API calls, Redux store) to ensure the test is focused solely on the component's logic.
-   **Accessibility**: Use `screen.getByRole` and other semantic queries to ensure your tests promote accessible UI.
-   **Clear Assertions**: Make assertions clear and specific, stating exactly what you expect to happen.
-   **Test Setup**: Use `frontend/src/test/setup.ts` for global test setup (e.g., importing `@testing-library/jest-dom` for extended matchers).
-   **Custom Render**: For testing components that rely on Redux or other context providers, use the custom `render` function provided in `frontend/src/test/test-utils.tsx` to wrap your components with necessary providers.

### Example Test Structure (from `TextInput.test.tsx`)

```typescript
// frontend/src/components/common/TextInput.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextInput from './TextInput';

describe('TextInput', () => {
  test('renders the input with the correct label', () => {
    render(<TextInput label="Username" id="username" />);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
  });

  test('calls onChange handler when input value changes', async () => {
    const handleChange = vi.fn(); // Mock function using Vitest's vi.fn()
    render(<TextInput label="Email" id="email" onChange={handleChange} />);
    const input = screen.getByLabelText('Email');
    await userEvent.type(input, 'test@example.com');
    expect(handleChange).toHaveBeenCalledTimes(16); // 16 characters typed
    expect(input).toHaveValue('test@example.com');
  });

  // Add more tests for different props, states, and interactions
});