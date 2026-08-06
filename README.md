# Som Sokraksa — Portfolio

React + Vite + Tailwind CSS + Bootstrap Icons implementation of the Figma portfolio design (Home, About, Projects pages) with a light/dark mode toggle.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build -> dist/
```

## Stack

- **React 19** + **React Router** for the 3 pages (`/`, `/about`, `/projects`)
- **Tailwind CSS v4** via the official PostCSS plugin (`@tailwindcss/postcss`) — no separate config file needed, theme tokens live in `src/index.css`
- **Bootstrap Icons** (`bootstrap-icons` npm package) for every UI icon (nav, socials, form fields, skill badges, etc.)
- Light/dark theme toggle persisted to `localStorage`, driven by a `dark` class on `<html>` (see `src/context/ThemeContext.jsx`)

## Structure

```
src/
  components/   Navbar, Footer, ProjectCard, SkillCard, ContactForm, Layout
  pages/        Home.jsx, About.jsx, Projects.jsx
  data/         skills.js, projects.js
  context/      ThemeContext.jsx
  assets/tech/  devicon SVG logos for the skills grid
```

## Notes / things to swap in

The Figma file's exported photo assets (profile photo, project thumbnails) are
hosted on Figma's temporary CDN and expire after ~7 days, and this build
environment couldn't reach figma.com to download them. I used
gradient-and-icon placeholders in their place:

- Hero / About profile photo -> gradient circle with a person icon
  (`Home.jsx`, `About.jsx`)
- The 4 project thumbnails -> gradient cards with a Bootstrap Icon
  (`components/ProjectCard.jsx`)

To use your real photos, drop them into `src/assets/images/` and swap the
placeholder `<div>` blocks for `<img>` tags.

The tech-stack logos (HTML, CSS, React, Node, MySQL, etc.) **are** real
brand logos, pulled from the open-source devicon project into
`src/assets/tech/`.

The contact form currently just logs to the console on submit
(`components/ContactForm.jsx`) - wire up `handleSubmit` to your email
service (e.g. EmailJS, Formspree, or your own API) when ready.

"Contact" in the navbar smooth-scrolls to the `#contact` section on the Home
page from any page.
