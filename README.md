# Himanshu Portfolio - CI/CD & Testing

This repository is equipped with a professional CI/CD pipeline and a comprehensive testing suite to maintain the high quality of your portfolio.

## 🚀 CI/CD Pipeline (GitHub Actions)
The project includes a `.github/workflows/deploy.yml` that automatically:
1.  **Lints** your JavaScript (`ESLint`) and CSS (`Stylelint`) code to ensure best practices.
2.  **Runs Unit Tests** (`Jest`) for DOM elements and logic.
3.  **Executes UI Tests** (`Playwright`) across Chromium, Firefox, and WebKit browsers.
4.  **Deploys** the site to **GitHub Pages** (gh-pages branch) automatically on push to `main`.

## 🧪 Testing Suite
- **Unit Tests**: Located in `tests/unit/`. These test specific components and DOM structures using Jest and JSDOM.
- **UI Tests**: Located in `tests/ui/`. These perform end-to-end browser testing using Playwright to ensure responsiveness and critical text visibility.

## 🛠️ Local Development
To run the automated tools locally:
```bash
# Install dependencies
npm install

# Lint code
npm run lint

# Run unit tests
npm test

# Run UI tests (browser)
npx playwright install
npm run test:ui -- --project=chromium

# Build for production
npm run build
```

## 📜 Standards
- **ESLint**: Follows the latest ECMAScript standards (Flat Config).
- **Stylelint**: Uses standard CSS formatting rules.
