# Getting Started

This guide will walk you through the process of setting up your development environment and running the application locally.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

-   **Node.js**: Version 18 or higher. You can download it from [nodejs.org](https://nodejs.org/).
-   **npm** (Node Package Manager) or **Yarn**: npm is included with Node.js. If you prefer Yarn, you can install it globally:
    ```bash
    npm install -g yarn
    ```

## Cloning the Repository

First, clone the application repository to your local machine:

```bash
git clone [repository-url]
cd achievement_pro/frontend
```
*Note: Replace `[repository-url]` with the actual URL of your Git repository.*

## Installing Dependencies

Navigate to the `frontend` directory (where `package.json` is located) and install the project dependencies:

```bash
npm install
# or if you are using Yarn
yarn install
```

This command will download and install all the necessary packages listed in `package.json`.

## Running the Application

Once the dependencies are installed, you can start the development server:

```bash
npm run dev
# or if you are using Yarn
yarn dev
```

This command will:
-   Start the Vite development server.
-   Compile the application.
-   Open the application in your default web browser (usually at `http://localhost:5173/`).

The application will automatically reload in the browser whenever you make changes to the source code.

## Environment Variables

If the application requires specific environment variables, you will need to create a `.env` file in the `frontend` directory. Consult the project's documentation or your team for the required variables and their values.

Example `.env` file:

```
VITE_API_BASE_URL=http://localhost:3000/api
```

Remember to restart the development server after making changes to the `.env` file.