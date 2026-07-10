# Food Mapper

A web app for food logging and symptom tracking.
Log meals, note how you feel, and surface hypotheses about
foods and symptoms.

## Requirements

- **Node.js** ≥ 20
- **npm** ≥ 9

## Packages (npm workspaces)

| Package                                       | Role                                             |
| --------------------------------------------- | ------------------------------------------------ |
| **`packages/client`** (`@food-mapper/client`) | React + TypeScript                               |
| **`packages/server`** (`@food-mapper/server`) | Express + TypeScript API                         |
| **`packages/shared`** (`@food-mapper/shared`) | Shared types and contracts for client and server |

## Root npm scripts

| Command                     | Description                            |
| --------------------------- | -------------------------------------- |
| `npm run dev`               | Client and server together             |
| `npm run typecheck`         | Typecheck all packages                 |
| `npm run client`            | Vite dev server only (frontend)        |
| `npm run server`            | API only in development                |
| `npm run db:migrate`        | Apply pending database migrations      |
| `npm run db:migrate:down`   | Roll back the last migration           |
| `npm run db:migrate:create` | Create a new migration file            |
| `npm run build`             | Build all packages                     |
| `npm run lint`              | Lint all packages                      |
| `npm run format`            | Format with Prettier                   |
| `npm run format:check`      | Check formatting without writing files |
| `npm run test`              | Run unit tests once                    |
| `npm run test:dev`          | Run unit tests in watch mode           |
| `npm run test:coverage`     | Run unit tests with coverage report    |

## Getting started

```bash
npm install
docker compose up -d
cp packages/server/.env.example packages/server/.env
npm run db:migrate
npm run dev
```
