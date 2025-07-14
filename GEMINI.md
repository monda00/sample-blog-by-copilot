# Project Overview

This document provides an overview of the project to help Gemini Code Assistant understand the codebase and assist with development tasks.

## Project Description

This is a blog application built with the Remix framework. It uses Tailwind CSS for styling and Markdown for blog post content.

## Technologies Used

- **Framework**: [Remix](https://remix.run/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI**: [React](https://reactjs.org/)
- **Linting**: [ESLint](https://eslint.org/)
- **Formatting**: [Prettier](https://prettier.io/)
- **Package Manager**: [npm](https://www.npmjs.com/)

## Project Structure

- `app/`: Contains the core application code.
  - `components/`: Reusable React components.
  - `routes/`: Defines the application's routes.
  - `entry.client.tsx`: The client-side entry point.
  - `entry.server.tsx`: The server-side entry point.
  - `root.tsx`: The root component of the application.
- `posts/`: Contains the blog post content in Markdown format.
- `public/`: Contains static assets like images and favicons.
- `package.json`: Defines the project's dependencies and scripts.
- `remix.config.js`: The configuration file for Remix.
- `tailwind.config.ts`: The configuration file for Tailwind CSS.
- `tsconfig.json`: The configuration file for TypeScript.

## Available Scripts

The following scripts are available in `package.json`:

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Lints the codebase using ESLint.
- `npm run format`: Formats the codebase using Prettier.
- `npm run typecheck`: Runs the TypeScript compiler to check for type errors.

## Content Management

To add a new blog post, create a new Markdown file in the `posts/` directory. The file should have a `.md` extension and include front-matter for the title, publication date, and other metadata.

## Testing

- **Testing Framework**: TBD
- **Test Command**: TBD
- **Test Location**: TBD

## Coding and Naming Rules

### Coding Rules

- **Framework:** Use Remix-specific features and conventions (e.g., `loader` functions, `meta` exports, `@remix-run/react` hooks).
- **Styling:** Use Tailwind CSS for all styling.
- **Components:** Create functional components using arrow functions.
- **State Management:** Use the `useState` hook for component-level state.
- **File Structure:** Place reusable components in `app/components` and page-level components in `app/routes`.
- **Imports:** Use named imports for modules like `react` and `@remix-run/react`. Default imports are used for components.

### Naming Rules

- **Components:** Use PascalCase for component names (e.g., `Header`, `Footer`).
- **Variables:** Use camelCase for variables and functions (e.g., `mobileMenuOpen`, `navLinks`).
- **Files:** Use PascalCase for component files (e.g., `Header.tsx`) and kebab-case for route files (e.g., `_index.tsx`, `about.tsx`).
