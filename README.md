# Priyansh Thapar — Developer Portfolio

Award-level personal portfolio website engineered for **Priyansh Thapar** (Full Stack Web Developer & Data Analyst), crafted with **Vite, React, TypeScript, Tailwind CSS, Framer Motion, GSAP, and Lenis**.

Designed following high-end editorial Behance & Awwwards aesthetics with deep charcoal tones, high-contrast bento cards, fluid contour lines, and precision micro-interactions.

---

## 🛠 Tech Stack

* **Framework**: React 18 + TypeScript + Vite
* **Styling**: Tailwind CSS + Custom Design Tokens
* **Motion & Choreography**: Framer Motion + GSAP + Lenis Smooth Scroll
* **Icons**: Lucide React
* **Micro-interactions**: Canvas Background Particle Aura + Canvas Confetti
* **Hosting**: GitHub Pages via automated GitHub Actions

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 📦 Data-Driven Projects

All project items are centralized in **`src/data/projects.ts`**.
To add or update a project, simply add a new object to the `projects` array:

```typescript
{
  id: 'my-project',
  title: 'Project Title',
  tagline: 'Short punchy tagline',
  shortDescription: '1-2 sentence overview',
  longerDescription: 'Full architectural and engineering summary',
  tech: ['React.js', 'TypeScript', 'Node.js'],
  githubUrl: 'https://github.com/username/project',
  liveUrl: 'https://project-demo.com', // optional
  image: 'https://...',
  featured: true,
  category: 'Full Stack',
  metrics: ['Metric 1', 'Metric 2'],
  highlights: ['Highlight 1', 'Highlight 2']
}
```

The UI, category filters, bento cards, and interactive modal will render it automatically.

---

## 🌐 Deploy to GitHub Pages

1. **Push this repository to GitHub**:
   ```bash
   git add .
   git commit -m "feat: initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME>.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub.
   - Navigate to **Settings** &rarr; **Pages**.
   - Under **Build and deployment** &rarr; **Source**, select **GitHub Actions**.

3. Every commit pushed to `main` will automatically trigger `.github/workflows/deploy.yml` and publish your portfolio live!

---

## 📝 Personalization Checklist (TODO Items)

Before sharing publicly, verify these placeholders:

- [ ] **GitHub Profile**: Replace `TODO_GITHUB_USERNAME` in `src/components/Hero.tsx`, `src/components/Contact.tsx`, and `src/data/projects.ts`.
- [ ] **Profile Photo**: Place your personal headshot at `public/profile.jpg` (or replace the image URL in `src/components/About.tsx`).
- [ ] **Resume**: Your resume is currently placed at `public/Priyansh_Thapar_Resume.pdf`. Verify or update whenever you have new credentials.
- [ ] **Contact Form**: Update the Formspree endpoint in `src/components/Contact.tsx` (`https://formspree.io/f/YOUR_FORM_ID`) to receive contact inquiries directly in your inbox.
- [ ] **Project URLs**: Add exact GitHub repo links for `Uthsava Admin`, `Inventory & Warehouse Management`, `AI Disaster Management`, and `Cancer Risk Prediction` in `src/data/projects.ts`.

