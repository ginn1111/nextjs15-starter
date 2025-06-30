# This is NextJS 15 starter template

---

## Some base setup

- [x] I18n: next-intl
- [x] CSS Framework: Tailwind CSS v4, SCSS
- [x] Components library: Shadcn UI
- [x] Testing framework: Jest + React testing library + Mock service web worker
- [ ] Data fetching library: React query
- [ ] Lint and format: biome
- [ ] Repository management: lint-staged, husky
- [ ] Package management: yarn
- [ ] UI Workshop/ visualize testing: Storybook
- [ ] Authentication, authorization management: NextAuth

---

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
  npx biome format . --write
  npx biome lint .
  ```
- If Husky hooks are not running, ensure `.husky/pre-commit` exists and is executable.

### Yarn as Package Manager
- This project uses Yarn (see `packageManager` in `package.json`).
- All pre-commit and lint-staged commands use `yarn` for consistency.

Feel free to use and pls leave a start for me.

Happy coding :))
