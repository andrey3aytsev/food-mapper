# Food Mapper — agent context

## Overview

- Monorepo using **npm workspaces**.
- Packages, engine versions, and root npm scripts: **[README.md](README.md)**.

## Verification

Run from the root **before committing**:

- `npm run lint`
- `npm run typecheck`
- If client code is affected: `npm run build` (builds all workspaces)

## Database

- **PostgreSQL** via `docker-compose.yml`.
- Copy `packages/server/.env.example` → `packages/server/.env`.
- Migrations and seed: `npm run db:migrate`, `npm run db:seed` (from the root).

## Tests

- No root `test` script.
- Use lint and TypeScript build for checks.
