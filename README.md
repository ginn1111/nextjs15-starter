# This is NextJS 15 starter template

---

## Some base setup

- [x] I18n: next-intl
- [x] CSS Framework: Tailwind CSS v4, SCSS
- [x] Components library: Shadcn UI
- [x] Testing framework: Jest + React Testing Library + Mock Service Worker (MSW)
- [x] Data fetching library: React Query
- [x] Lint and format: biome
- [x] Repository management: lint-staged, husky
- [x] Package management: pnpm
- [x] UI Workshop/visualize testing: Storybook
- [x] Authentication, authorization management: NextAuth

---

## API Mocking & Testing

This project uses [MSW (Mock Service Worker)](https://mswjs.io/) for API mocking in both browser and test environments. The setup is integrated with Jest and React Testing Library for robust frontend testing.

- **Enable API mocking in development:**
  - Start dev server with mocks enabled:
    ```sh
    pnpm dev:mock
    ```
  - This sets `NEXT_PUBLIC_API_MOCKING=enabled` and automatically starts MSW in the browser.
- **MockProvider:**
  - The app is wrapped with a `MockProvider` that conditionally starts MSW when mocking is enabled.
- **Testing:**
  - Run all tests:
    ```sh
    pnpm test
    ```
  - Tests use MSW to mock API endpoints and ensure consistent, isolated test results.

## Code Quality Automation

This project uses [Biome](https://biomejs.dev/) for formatting and linting, integrated with [lint-staged](https://github.com/okonet/lint-staged) and [Husky](https://typicode.github.io/husky/) for pre-commit checks.

### How it works
- **Biome**: Formats and lints your code for consistency and best practices.
- **lint-staged**: Runs Biome only on staged files, making pre-commit checks fast.
- **Husky**: Hooks into Git to run lint-staged before every commit.

### Pre-commit workflow
- When you run `git commit`, Husky triggers lint-staged.
- lint-staged runs Biome format and lint on all staged JS, TS, JSX, TSX, and JSON files.
- If Biome finds issues, it will attempt to fix them and re-stage the files. If there are unfixable errors, the commit will be blocked until resolved.

### Setup (already configured)
- All configuration is in `package.json` (`lint-staged`) and `.husky/pre-commit` (Husky hook).
- To manually re-install hooks (if needed):
  ```sh
  npx husky install
  ```

### Troubleshooting
- If your commit is blocked, check the output for Biome errors and fix them.
- To run Biome manually on all files:
  ```sh
  pnpm biome format . --write
  pnpm biome lint .
  ```
- If Husky hooks are not running, ensure `.husky/pre-commit` exists and is executable.

### pnpm as Package Manager
- This project uses pnpm (see `packageManager` in `package.json`).
- All pre-commit and lint-staged commands use `pnpm` for consistency.

Feel free to use and pls leave a star for me.

Happy coding :))

---

## Authentication Example

- Visit `/[locale]/auth/login` to log in with credentials:
  - alice / password123
  - bob / password456
- After login, access `/[locale]/protected` for a protected page.
- Use the sign out button or visit `/[locale]/auth/signout` to log out.
