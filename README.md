# Jensilin Jino J C — Portfolio

A modern, premium personal portfolio website for a Telecom Developer at TCS.

**Live Features:**
- 🎨 Dark glassmorphism design with cyan & purple accents
- ✨ Framer Motion animations & scroll reveals
- 🔵 Interactive particle background with mouse repulsion
- ⌨️ Typewriter effect cycling through roles
- 📊 Animated skill progress bars
- 🖱️ Custom cursor (desktop)
- 📱 Fully responsive (mobile / tablet / desktop)
- 🌐 Static — deployable on GitHub Pages

## Tech Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Framer Motion v12**
- **Lucide React v1** + custom brand SVG icons

## Getting Started

```bash
npm install
npm run dev      # dev server
npm run build    # production build
npm run preview  # preview build
```

## Deploy to GitHub Pages

```bash
git remote add origin https://github.com/<username>/portfolio.git
git push -u origin main
npm run deploy   # builds + publishes to gh-pages branch
```

## Personalisation

| File | What to update |
|---|---|
| `src/components/GitHub.jsx` | `GITHUB_USERNAME` constant |
| `src/components/Contact.jsx` | Email & LinkedIn URL |
| `src/components/Navbar.jsx` | GitHub link |
| `src/components/Hero.jsx` | GitHub link |
| `src/components/Footer.jsx` | Social links |
| `src/components/Projects.jsx` | GitHub repo links |

## Contact Form

Wire the form to **Formspree** or **EmailJS** for real email delivery:

```js
// Contact.jsx handleSubmit
await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
```

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
