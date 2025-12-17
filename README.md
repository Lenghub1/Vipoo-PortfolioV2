# Portfolio v2

Personal site powered by React, TypeScript, and Vite.

## Requirements

- Node.js 22.12.0 (or any version that satisfies `>=20.19.0 <22 || >=22.12`). Run `nvm use` to load the version from `.nvmrc`.
- npm 10+.

Using Node 21.x triggers Vite's guard clause (`You are using Node.js 21.2.0...`), so switch to a supported release before installing or building.

## Setup

```bash
nvm use
npm install
```

## Development

- `npm run dev` – Start Vite dev server with HMR.
- `npm run build` – Type-check and create a production bundle.
- `npm run preview` – Serve the production build locally.
- `npm run lint` – Run ESLint across the repo.

## Troubleshooting

If you see the Node version warning again, verify the active version with `node -v`. When using `nvm`, run `nvm install` once to install 22.12.0, then `nvm use`. For other managers (Volta/asdf), pin the version to 22.12.0 to avoid the Vite guardrail.
