# Contribution Guide

We welcome contributions to this project! By following these guidelines, you can help ensure a smooth and efficient collaboration process.

## 1. Getting Started

Please refer to the [`02-getting-started.md`](docs/02-getting-started.md) document for instructions on setting up your development environment and running the application locally.

## 2. Code Style

We adhere to a consistent code style to maintain readability and uniformity across the codebase.

-   **ESLint**: We use ESLint to enforce code style and identify potential issues. Please ensure your code passes all ESLint checks before submitting a pull request.
    -   You can run ESLint manually using:
        ```bash
        npm run lint
        # or
        yarn lint
        ```
    -   Many IDEs (like VS Code) have ESLint extensions that can automatically format and highlight issues as you code.

## 3. Branching Strategy

We follow a GitFlow-like branching strategy:

-   **`main`**: The production-ready branch. Only stable, tested code that is ready for deployment should be merged into `main`.
-   **`develop`**: The integration branch for ongoing development. All new features and bug fixes are merged into `develop` first.
-   **Feature Branches**: For each new feature or significant bug fix, create a new branch from `develop`.
    -   Naming convention: `feature/your-feature-name` or `bugfix/your-bug-description`.
    -   Keep feature branches focused on a single task.
    -   Rebase your feature branch frequently with `develop` to avoid large merge conflicts.

## 4. Pull Request Process

When you're ready to submit your changes, create a Pull Request (PR) to the `develop` branch.

-   **Clear Title**: Provide a concise and descriptive title for your PR.
-   **Detailed Description**: In the PR description, explain:
    -   What problem your PR solves.
    -   How you solved it.
    -   Any relevant design decisions or trade-offs.
    -   Screenshots or GIFs for UI changes.
    -   References to any related issues (e.g., `Closes #123`).
-   **Tests**: Ensure all new features have corresponding tests and that existing tests pass. Mention test coverage if applicable.
-   **Code Review**: Your PR will be reviewed by at least one other team member. Be open to feedback and iterate on your changes as needed.
-   **Merge**: Once approved, your PR will be merged into `develop`.

## 5. Writing Documentation

If your changes introduce new features, components, or alter existing functionality, please update the relevant documentation files in the `docs/` directory. Refer to the `documentation_plan.md` for guidance on documentation structure and content.

## 6. Flagging Gaps

As you contribute, if you identify any missing tests, error handling, or outdated dependencies, please flag them:

-   **Missing Tests**: Create a new issue on the issue tracker with details about the missing test cases.
-   **Error Handling**: If you find areas with inadequate error handling, create an issue or propose a PR to improve it.
-   **Outdated Dependencies**: If you notice dependencies that are significantly outdated, create an issue to discuss potential upgrades.

## 7. Staying Adaptive

We value your input and are always looking to improve our processes. If you have suggestions for improving this guide or other aspects of the development workflow, please open an issue or discuss it with the team.