# Sample Blog by Copilot

A sample blog application created by Copilot using Node.js, TypeScript, React, and Remix.

## Tech Stack

- **Node.js** - Runtime environment
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **Remix** - Full-stack web framework
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Vite** - Build tool

## Resources

- 📖 [Remix docs](https://remix.run/docs)

## Development

Run the dev server:

```sh
npm run dev
```

The application will be available at http://localhost:5173/

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

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
