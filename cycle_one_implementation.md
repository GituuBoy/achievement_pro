### **Implementation Plan: Welcome Screen**

**1. Create the `WelcomeScreen` Component**

*   **Action:** Create a new file named `WelcomeScreen.tsx` in the `src/screens` directory.
*   **Location:** `achievement-project/src/screens/WelcomeScreen.tsx`
*   **Expected Change:**
    *   **Before:** The file does not exist.
    *   **After:** The file is created with the following content:

        ```tsx
        // src/screens/WelcomeScreen.tsx
        import React from 'react';
        import heroImage from '../assets/images/welcome-hero.jpg';

        function WelcomeScreen() {
          return (
            <div className="flex flex-col h-full justify-between bg-white" data-testid="welcome-screen">
              {/* Top Section: Hero Image */}
              <div
                className="w-full h-[50vh] bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${heroImage})` }}
              />

              {/* Middle Section: Text Content */}
              <div className="px-6 pt-8 text-center">
                <h1 className="text-gray-900 text-[32px] font-bold leading-tight">
                  Begin Your Achievement Journey
                </h1>
                <p className="text-gray-700 text-lg font-normal leading-relaxed mt-3">
                  Turn your idea into a real-world, tangible project in just four weeks.
                </p>
              </div>

              {/* Bottom Section: Action Button */}
              <div className="px-6 pb-12 pt-4">
                <button
                  className="flex w-full cursor-pointer items-center justify-center rounded-xl h-14 bg-primary text-white text-lg font-semibold leading-normal transition-opacity hover:opacity-90 active:opacity-80"
                >
                  <span className="truncate">Get Started</span>
                </button>
              </div>
            </div>
          );
        }

        export default WelcomeScreen;
        ```

**2. Create the Test File for `WelcomeScreen`**

*   **Action:** Create a new file named `WelcomeScreen.test.tsx` in the `src/screens` directory.
*   **Location:** `achievement-project/src/screens/WelcomeScreen.test.tsx`
*   **Expected Change:**
    *   **Before:** The file does not exist.
    *   **After:** The file is created with the following content:

        ```tsx
        // src/screens/WelcomeScreen.test.tsx
        import { render, screen } from '@testing-library/react';
        import WelcomeScreen from './WelcomeScreen';
        import { describe, it, expect } from 'vitest';

        describe('WelcomeScreen', () => {
          it('renders the main headline', () => {
            render(<WelcomeScreen />);

            // Check if the heading text is in the document
            const headline = screen.getByRole('heading', {
              name: /Begin Your Achievement Journey/i
            });
            expect(headline).toBeInTheDocument();
          });

          it('renders the "Get Started" button', () => {
            render(<WelcomeScreen />);

            // Check if the button is in the document
            const button = screen.getByRole('button', { name: /Get Started/i });
            expect(button).toBeInTheDocument();
          });
        });
        ```

**3. Create the Vitest Setup File**

*   **Action:** Create a new file named `setup.ts` in the `src/test` directory.
*   **Location:** `achievement-project/src/test/setup.ts`
*   **Expected Change:**
    *   **Before:** The file does not exist.
    *   **After:** The file is created with the following content:

        ```typescript
        // src/test/setup.ts
        import '@testing-library/jest-dom';
        ```

**4. Configure Vitest in `vite.config.ts`**

*   **Action:** Add the `test` configuration to the `vite.config.ts` file.
*   **Location:** `achievement-project/vite.config.ts`
*   **Expected Change:**
    *   **Before:**

        ```typescript
        import { defineConfig } from 'vite'
        import react from '@vitejs/plugin-react'

        // https://vite.dev/config/
        export default defineConfig({
          plugins: [react()],
        })
        ```

    *   **After:**

        ```typescript
        import { defineConfig } from 'vite'
        import react from '@vitejs/plugin-react'

        // https://vite.dev/config/
        export default defineConfig({
          plugins: [react()],
          test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: './src/test/setup.ts',
          },
        })
        ```

**5. Add the Test Script to `package.json`**

*   **Action:** Add a `test` script to the `scripts` section of `package.json`.
*   **Location:** `achievement-project/package.json`
*   **Expected Change:**
    *   **Before:**

        ```json
        "scripts": {
          "dev": "vite",
          "build": "tsc -b && vite build",
          "lint": "eslint .",
          "preview": "vite preview"
        },
        ```

    *   **After:**

        ```json
        "scripts": {
          "dev": "vite",
          "build": "tsc -b && vite build",
          "lint": "eslint .",
          "preview": "vite preview",
          "test": "vitest"
        },
        ```

**6. Integrate the `WelcomeScreen` into `App.tsx`**

*   **Action:** Replace the content of `App.tsx` to render the `WelcomeScreen` component.
*   **Location:** `achievement-project/src/App.tsx`
*   **Expected Change:**
    *   **Before:** The content of `App.tsx` will vary.
    *   **After:**

        ```tsx
        // src/App.tsx
        import WelcomeScreen from './screens/WelcomeScreen';

        function App() {
          return (
            // This container simulates a mobile screen on desktop for easier development
            <div className="max-w-md mx-auto h-screen shadow-2xl bg-white overflow-hidden">
              <WelcomeScreen />
            </div>
          );
        }

        export default App;