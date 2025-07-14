# Sample Blog by Copilot

A sample blog application built with the Remix framework, showcasing a modern web development stack.

## Features

- **Blog Posts:** Create and manage blog posts using Markdown.
- **Responsive Design:** Styled with Tailwind CSS for a great experience on all devices.
- **Code Quality:** Includes ESLint and Prettier for clean and consistent code.
- **Type Safety:** Built with TypeScript to reduce errors in production.

## Tech Stack

- **Node.js** - Runtime environment
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **Remix** - Full-stack web framework
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Vite** - Build tool

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or later)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/sample-blog-by-copilot.git
   cd sample-blog-by-copilot
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

### Development

Run the development server:

```sh
npm run dev
```

The application will be available at http://localhost:5173/.

## Code Quality

This project includes ESLint and Prettier for maintaining code quality:

```sh
# Run linting
npm run lint

# Check code formatting
npm run format:check

# Auto-format code
npm run format

# Type checking
npm run typecheck
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`:

- `build/server`
- `build/client`

## Coding and Naming Rules

### Coding Rules

*   **Framework:** Use Remix-specific features and conventions (e.g., `loader` functions, `meta` exports, `@remix-run/react` hooks).
*   **Styling:** Use Tailwind CSS for all styling.
*   **Components:** Create functional components using arrow functions.
*   **State Management:** Use the `useState` hook for component-level state.
*   **File Structure:** Place reusable components in `app/components` and page-level components in `app/routes`.
*   **Imports:** Use named imports for modules like `react` and `@remix-run/react`. Default imports are used for components.

### Naming Rules

*   **Components:** Use PascalCase for component names (e.g., `Header`, `Footer`).
*   **Variables:** Use camelCase for variables and functions (e.g., `mobileMenuOpen`, `navLinks`).
*   **Files:** Use PascalCase for component files (e.g., `Header.tsx`) and kebab-case for route files (e.g., `_index.tsx`, `about.tsx`).
