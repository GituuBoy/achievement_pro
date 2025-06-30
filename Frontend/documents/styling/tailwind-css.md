# Tailwind CSS Configuration

This document details the configuration of Tailwind CSS within the Achievement Project.

## `tailwind.config.js`

*   **Location:** [`tailwind.config.js`](achievement-project/tailwind.config.js)
*   **Description:** This file is the primary configuration for Tailwind CSS. It defines the paths to scan for Tailwind classes, custom themes, and any plugins used.
*   **Purpose:** To customize and extend Tailwind's default configuration to match the project's design system.

### Content Configuration

The `content` array specifies the files where Tailwind should look for class names. This is crucial for Tailwind's tree-shaking feature, which removes unused CSS.

```javascript
content: [
  "./index.html", // Vite's entry point HTML file
  "./src/**/*.{js,ts,jsx,tsx}", // All JavaScript/TypeScript/JSX/TSX files in the src directory
],
```

### Theme Customization

The `theme.extend` object allows for extending Tailwind's default theme with custom values without overwriting them.

#### Colors

A custom `primary` color has been defined:

```javascript
colors: {
  'primary': '#00A99D',
},
```

#### Font Family

A custom sans-serif font stack has been defined for consistent typography across different operating systems:

```javascript
fontFamily: {
  'sans': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
}
```

### Plugins

The `plugins` array is currently empty, but it's where you would add official or custom Tailwind CSS plugins.

*   **Code Snippet:**
    ```javascript
    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            'primary': '#00A99D',
          },
          fontFamily: {
            'sans': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
          }
        },
      },
      plugins: [],
    }