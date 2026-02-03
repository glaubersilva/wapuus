# Wapuus - React App

**IMPORTANT:** For local development, you need to run the WordPress plugin that implements the API locally, because the live API at *api.wapuus.org* is restricted to the *wapuus.org* domain.

See: [How to set up the Wapuus API locally »](https://github.com/glaubersilva/wapuus-api#wapuus-api---wordpress-plugin "Wapuus API README.md")

## Tech stack

- **React 18** with **Vite**
- **React Router** v6
- **Vitest** + **Testing Library** for tests

Requires **Node 18+** (see `.nvmrc`).

## Available scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode with Vite.  
Open [http://localhost:5173](http://localhost:5173) to view it in the browser. The page will reload when you edit files.

### `npm run build`

Builds the app for production into the **`dist`** folder. The output is minified and asset filenames include hashes. Ready to deploy (e.g. set your host’s build output directory to `dist`).

### `npm run preview`

Serves the contents of `dist` locally so you can test the production build before deploying (default: [http://localhost:4173](http://localhost:4173)).

### `npm test`

Runs the test suite with **Vitest** in watch mode.

## Learn more

- [Vite documentation](https://vitejs.dev/)
- [React documentation](https://react.dev/)
- [React Router v6](https://reactrouter.com/)
