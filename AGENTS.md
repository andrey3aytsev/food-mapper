# Food Mapper

## Overview

- Monorepo using **npm workspaces**.
- Packages, engine versions, and root npm scripts: **[README.md](README.md)**.

## Before committing

Run from the root:

- `npm run format`
- `npm run lint`
- `npm run typecheck`
- `npm run test`
- If client code is affected: `npm run build` (builds all workspaces)

If you changed root scripts or `engines` in `package.json`:

- Update the matching sections in **[README.md](README.md)**.

## Database

- **PostgreSQL** via `docker-compose.yml`.
- Copy `packages/server/.env.example` → `packages/server/.env`.
- Migrations: `npm run db:migrate` (from the root).

## Tests

- Unit tests: `npm run test` (Vitest).
