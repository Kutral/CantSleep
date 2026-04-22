<div align="center">
  <img src="public/logo.png" alt="Can't Sleep Logo" width="120" height="120" />

  # 🌙 Can't Sleep

  **The science-backed sleep aid app designed to help you fall asleep fast.**

  [![React](https://img.shields.io/badge/React-19.0-blue.svg?style=flat&logo=react)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-6.2-purple.svg?style=flat&logo=vite)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC.svg?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Motion-12.0-ff0055.svg?style=flat&logo=framer)](https://motion.dev/)

  <p align="center">
    <a href="#-overview">Overview</a> •
    <a href="#-features">Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-local-development">Local Development</a> •
    <a href="#-deploying-to-github-pages">Deploy to GitHub Pages</a>
  </p>
</div>

---

## 📖 Overview

**Can't Sleep** is a premium, beautifully crafted landing page for a mobile application dedicated to curing sleeplessness, racing thoughts, and nighttime anxiety. The interface utilizes a highly polished, responsive "glassmorphic" design aesthetic, specifically calibrated with an ultra-dark theme to reduce eye strain for late-night viewers.

## ✨ Features

- **Dynamic Hero Section:** Smooth, immersive entry animations powered by Framer Motion with a full-viewport ambient video background.
- **Bento Grid Layout:** A modern, mobile-first responsive "bento" grid showcasing the app's primary features (Rescue Mode, Guided Techniques, Soundscapes, and Sleep Journaling).
- **Interactive Soundscape Mixer:** A purely visual demonstration of the app's multi-layered sound engine using animated CSS sliders and rich gradients.
- **Premium Pricing Cards:** Sleek, conversion-optimized subscription tier cards outlining Monthly, Annual, and Lifetime plans.
- **Fully Responsive:** Meticulously engineered to look incredible on ultra-wide desktop monitors down to the smallest mobile devices.

## 🛠️ Tech Stack

- **Framework:** React 19 (TypeScript)
- **Tooling:** Vite
- **Styling:** Tailwind CSS 4
- **Animations:** Motion (Framer Motion)
- **Icons:** Lucide React

---

## 💻 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/cantsleep-landing.git
   cd cantsleep-landing
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🚀 Deploying to GitHub Pages

Since this is a Vite + React application, deploying to GitHub Pages is incredibly straightforward using GitHub Actions.

### Step 1: Update `vite.config.ts`
If you are deploying to a repository named `cantsleep` (e.g., `https://yourusername.github.io/cantsleep/`), you need to set the `base` path in `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Add this line matching your repository name
  base: '/cantsleep/', 
})
```
*(Note: If deploying to a custom domain or a user-root repository like `username.github.io`, you can skip this step or leave it as `base: '/'`)*

### Step 2: Create a GitHub Action
Create a new file in your repository at `.github/workflows/deploy.yml` with the following content:

```yaml
name: Deploy static content to Pages

on:
  push:
    branches: ['main']

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Step 3: Configure GitHub Settings
1. Go to your repository on GitHub.
2. Navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Push your code to the `main` branch. GitHub will automatically build and deploy your beautiful site!

---

<div align="center">
  <p>Crafted with 💜 for better sleep.</p>
</div>
