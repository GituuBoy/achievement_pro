# Global Styles

This document describes the global styles applied to the Achievement Project, primarily through `src/index.css`.

## `index.css`

*   **Location:** [`src/index.css`](achievement-project/src/index.css)
*   **Description:** This file serves as the main entry point for global CSS, including Tailwind CSS base styles, components, and utilities, along with custom body styles.
*   **Purpose:** To define foundational styling for the entire application.

### Tailwind CSS Directives

The first three lines import Tailwind's generated styles:

*   `@tailwind base;`: Injects Tailwind's base styles, which normalize CSS across browsers and provide sensible defaults.
*   `@tailwind components;`: Injects component-specific styles defined by Tailwind or custom components.
*   `@tailwind utilities;`: Injects all of Tailwind's utility classes, which are the primary way to style elements.

### Custom Body Styles

The `body` selector defines global styles for the `body` element:

*   `background-color: #f7f8fa;`: Sets a light grey background color for the entire application.
*   `-webkit-font-smoothing: antialiased;`: Improves font rendering on macOS for WebKit browsers.
*   `-moz-osx-font-smoothing: grayscale;`: Improves font rendering on macOS for Firefox.

*   **Code Snippet:**
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    body {
      background-color: #f7f8fa;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }