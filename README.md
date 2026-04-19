# Food Mapper

A web app for keeping a food diary oriented toward a low-FODMAP diet: meal logging, a FODMAP food reference, wellbeing tracking, statistics, and data export.

## Packages (npm workspaces)

| Package                                       | Role                                             |
| --------------------------------------------- | ------------------------------------------------ |
| **`packages/client`** (`@food-mapper/client`) | React + TypeScript                               |
| **`packages/server`** (`@food-mapper/server`) | Express + TypeScript API                         |
| **`packages/shared`** (`@food-mapper/shared`) | Shared types and contracts for client and server |

## Root npm scripts

| Command                | Description                            |
| ---------------------- | -------------------------------------- |
| `npm run dev`          | Client and server together             |
| `npm run client`       | Vite dev server only (frontend)        |
| `npm run server`       | API only in development                |
| `npm run build`        | Build all packages                     |
| `npm run lint`         | Lint all packages                      |
| `npm run typecheck`    | Typecheck                              |
| `npm run format`       | Format with Prettier                   |
| `npm run format:check` | Check formatting without writing files |
