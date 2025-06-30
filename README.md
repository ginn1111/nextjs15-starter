# Next.js 15 Starter Template

A modern, batteries-included starter for Next.js 15 projects. Pre-configured with internationalization, authentication, testing, code quality tools, and more—so you can focus on building features, not setup.

---

## 🚀 Features

- **Internationalization:** next-intl
- **Styling:** Tailwind CSS v4, SCSS
- **Component Library:** Shadcn UI
- **Testing:** Jest, React Testing Library, Mock Service Worker (MSW)
- **Data Fetching:** React Query
- **Linting & Formatting:** Biome
- **Pre-commit Automation:** lint-staged, Husky
- **Package Management:** pnpm
- **UI Workshop:** Storybook
- **Authentication:** NextAuth

---

## 🛠️ Getting Started

1. **Install dependencies:**
   ```sh
   pnpm install
   ```
2. **Start development server:**
   ```sh
   pnpm dev
   ```
3. **Start with API mocking enabled:**
   ```sh
   pnpm dev:mock
   ```
   This sets `NEXT_PUBLIC_API_MOCKING=enabled` and automatically starts MSW in the browser.

---

## 🧪 API Mocking & Testing

- **MSW (Mock Service Worker):**
  - Mocks API endpoints in both browser and test environments.
  - Integrated with Jest and React Testing Library for robust, isolated frontend tests.
- **MockProvider:**
  - Wraps the app and conditionally starts MSW when mocking is enabled.
- **Run all tests:**
  ```sh
  pnpm test
  ```

---

## 🧹 Code Quality & Automation

- **Biome:** Formats and lints code for consistency and best practices.
- **lint-staged:** Runs Biome on staged files for fast pre-commit checks.
- **Husky:** Hooks into Git to run lint-staged before every commit.

### Pre-commit Workflow
- On `git commit`, Husky triggers lint-staged.
- lint-staged runs Biome format/lint on all staged JS, TS, JSX, TSX, and JSON files.
- Biome auto-fixes issues and re-stages files. Unfixable errors block the commit until resolved.

### Manual Usage
- Run Biome on all files:
  ```sh
  pnpm biome format . --write
  pnpm biome lint .
  ```
- Re-install Husky hooks (if needed):
  ```sh
  npx husky install
  ```

---

## 🔐 Authentication Example

- Visit `/[locale]/auth/login` to log in:
  - alice / password123
  - bob / password456
- After login, access `/[locale]/protected` for a protected page.
- Sign out via the button or `/[locale]/auth/signout`.

---

## 🛟 Troubleshooting

- **Commit blocked?**
  - Check Biome errors in the output and fix them.
- **Husky hooks not running?**
  - Ensure `.husky/pre-commit` exists and is executable.
- **Using pnpm:**
  - All scripts and hooks use pnpm for consistency.

---

## ⭐️ Enjoy!

Feel free to use, contribute, and leave a star if you find this helpful.

Happy coding! 🎉
