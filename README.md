<div align="center">
  <img src="public/logo.png" width="150" alt="Can't Sleep Logo" />
  <h1>Can't Sleep 🌙</h1>

  <p>
    <img src="https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=white&style=flat-square" alt="React" />
    <img src="https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite&logoColor=white&style=flat-square" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Motion-12.23-EF008F?logo=framer&logoColor=white&style=flat-square" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square" alt="License" />
    <img src="https://img.shields.io/badge/GitHub%20Pages-deployed-success?logo=github&style=flat-square" alt="GitHub Pages" />
  </p>

  <p><em>✨ The premium, science-backed sleep companion for your restless mind. ✨</em></p>
</div>

---

## 🌌 Why Can't Sleep?

Millions of people lie awake every night trapped in the insomnia cycle—racing thoughts, mounting anxiety, and the dreaded 3 AM ceiling stare. Traditional sleep aids can be habit-forming and leave you groggy, while generic meditation apps lack the clinical precision needed for true relief.

**Can't Sleep** is designed to break that cycle. By combining evidence-based techniques—guided breathing, cognitive shuffling, immersive soundscapes, and reflective journaling—into one beautifully dark, glassmorphic sanctuary, we help you quiet your mind and guide your nervous system gently into restorative sleep.

---

## ✨ Features

### 🚨 Rescue Mode
When sleep feels impossible and the clock keeps ticking, Rescue Mode acts as your emergency lifeline. It instantly combines rapid relaxation triggers with guided grounding exercises to pull you out of the anxiety spiral and reset your nervous system for sleep.

### 🫁 4-7-8 Breathing
Based on Dr. Andrew Weil’s renowned technique, this guided tool helps activate your parasympathetic nervous system. By inhaling for 4 seconds, holding for 7, and exhaling for 8, you naturally lower your heart rate and invite deep relaxation.

### ⬛ Box Breathing
Borrowed from high-performance athletes and Navy SEALs, Box Breathing brings structure to your breath with equal counts of inhale, hold, exhale, and hold. This rhythmic symmetry calms the mind, reduces cortisol, and creates a meditative loop perfect for pre-sleep wind-down.

### 😮‍💨 Physiological Sigh
Science shows that a double inhale followed by a long exhale is the fastest way to relieve acute stress. Our Physiological Sigh guide automates this powerful pattern, helping you offload built-up carbon dioxide and bodily tension in under 60 seconds.

### 🧠 Cognitive Shuffle
Inspired by cognitive science research, this feature prompts you to imagine random, unrelated objects in rapid sequence. By occupying your brain’s working memory with benign imagery, it effectively blocks rumination and racing thoughts at their source.

### 💪 Progressive Muscle Relaxation (PMR)
Our PMR session systematically guides you through tensing and releasing major muscle groups from head to toe. This process heightens bodily awareness, melts away physical tension, and sends clear signals to your brain that it is safe to power down for the night.

### 🎵 Soundscapes
Immerse yourself in a multi-layered sonic environment crafted specifically for deep sleep. From pink noise and gentle rain to binaural beats, our interactive mixer lets you blend ambient layers to create your perfect acoustic cocoon.

### 📓 Sleep Journal
Track your sleep patterns, dreams, and nightly reflections in a dedicated, distraction-free journal. Over time, this data reveals hidden triggers and measurable progress, turning your journey to better rest into an empowering habit.

---

## 🛠️ Tech Stack

| Technology | Purpose | Version |
| :--- | :--- | :--- |
| **React** | UI Library | `19.0` |
| **TypeScript** | Static Typing & Safety | `5.8` |
| **Vite** | Build Tool & Dev Server | `6.2` |
| **Tailwind CSS** | Utility-First Styling | `4.1` |
| **Motion (Framer Motion)** | Declarative Animations | `12.23` |
| **Lucide React** | Consistent Iconography | `0.546` |

---

## 📸 Screenshots

> *Screenshots will be inserted here. Place your images in a `screenshots/` directory at the project root and update the paths below.*

<div align="center">

| Hero & Bento Grid | Soundscape Mixer | Pricing Cards |
| :---: | :---: | :---: |
| 🖼️ *`./screenshots/hero.png`* | 🖼️ *`./screenshots/soundscapes.png`* | 🖼️ *`./screenshots/pricing.png`* |

</div>

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `>= 20.0.0`
- **npm** `>= 10.0.0` (or **pnpm** / **yarn**)

### Quick Start

<details open>
<summary>📋 Click to expand full setup instructions</summary>
<br />

**1. Clone the repository**
```bash
git clone https://github.com/yourusername/CantSleep.git
cd CantSleep
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the development server**
```bash
npm run dev
```
> The app will be available at `http://localhost:3000`.

**4. Build for production**
```bash
npm run build
```
> The static output will be generated in the `dist/` directory.

**5. Preview the production build locally**
```bash
npm run preview
```

</details>

---

## 🌐 GitHub Pages Deployment

This project is pre-configured for seamless GitHub Pages deployment.

### 1. Verify Base Path

Ensure `vite.config.ts` contains the correct repository name:

```typescript
export default defineConfig({
  // ...
  base: '/CantSleep/',
})
```

> *This is already configured for the `CantSleep` repo. If you rename the repository, update this path accordingly. If you are deploying to a custom domain or a user-root repository (`username.github.io`), change `base` to `'/'`.*

### 2. Create the GitHub Actions Workflow

Create `.github/workflows/deploy.yml` with the following content:

<details>
<summary>🔧 View deployment workflow YAML</summary>

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

</details>

### 3. Enable GitHub Pages

1. Go to your repository on **GitHub**.
2. Navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Push any commit to the `main` branch to trigger the workflow.
5. Grab some warm milk and watch your site go live. 🥛✨

---

## 🗂️ Project Structure

<details>
<summary>🌳 Click to view directory tree</summary>

```text
CantSleep/
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Pages deployment action
├── public/
│   └── logo.png               # App logo asset
├── src/
│   ├── components/            # Reusable UI components
│   ├── sections/              # Page sections (Hero, Features, Pricing, etc.)
│   ├── hooks/                 # Custom React hooks
│   ├── types/                 # Global TypeScript types
│   ├── App.tsx                # Root application component
│   ├── main.tsx               # Application entry point
│   └── index.css              # Global styles & Tailwind directives
├── .env.example               # Environment variable template
├── .gitignore
├── index.html                 # HTML entry point
├── package.json
├── tsconfig.json
├── vite.config.ts             # Vite configuration (includes base path)
└── README.md                  # You are here 📍
```

</details>

---

## 🤝 Contributing

Contributions are always welcome! Whether it's fixing a typo, improving animations, or suggesting new sleep techniques, your help makes this project better.

1. **Fork** the repository.
2. Create your feature branch (`git checkout -b feature/amazing-feature`).
3. **Commit** your changes (`git commit -m 'Add amazing feature'`).
4. **Push** to the branch (`git push origin feature/amazing-feature`).
5. Open a **Pull Request**.

Please ensure your code follows the existing **TypeScript** and **Tailwind CSS** patterns. Keep the dark-mode aesthetic consistent and respect the glassmorphic design language.

---

## 🙏 Acknowledgments

- Design inspiration drawn from the glassmorphism and neobrutalism design communities.
- Breathing and relaxation techniques are based on peer-reviewed sleep and anxiety research.
- Icons provided by the beautiful [Lucide](https://lucide.dev/) library.
- Animations powered by the incredible [Motion](https://motion.dev/) library.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">
  <p>Crafted with 💜 for better sleep.</p>
</div>
