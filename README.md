## SAMI Appstore — Modern App Showcase

A responsive, fast, and production-ready app catalog built with React and Vite. It showcases applications with search, detail pages, installation instructions, and a polished UI.

### Live Demo
- Live site: [sami-io.netlify.app](https://sami-io.netlify.app/)
- Repository: [XDR-SAM/Sami-Appstore-io](https://github.com/XDR-SAM/Sami-Appstore-io.git)

### Ownership & Attribution
- Owner: **Abdullah Al SAMi** (Bangladesh University, CSE Department)
- GitHub: [@XDR-SAM](https://github.com/XDR-SAM)

## Tech Stack
- React (functional components, hooks)
- Vite (dev server, build)
- React Router v6 (routing, nested routes, loaders/navigation state)
- Tailwind CSS (utility-first styling)
- DaisyUI (Tailwind component plugin)
- React Toastify (non-blocking notifications)
- Recharts library (for charts)
- Netlify (deployment)

## Key Features
- Searchable app catalog with debounced filtering
- Rich app cards (image, downloads, rating)
- App details page (`/apps/:id`)
- Installation page (`/installation`)
- Friendly error pages and not-found handling
- Global and inline loading states with a branded spinner
- Responsive layout with modern UI patterns

## Project Structure (high level)
- `src/pages/home/Home.jsx` — Landing page and trending apps section
- `src/pages/apps/Apps.jsx` — App listing with search
- `src/pages/apps/AppDetails.jsx` — App details view
- `src/pages/installation/Installation.jsx` — Installation instructions
- `src/pages/errorpage/*` — Error and not-found routes
- `src/pages/root/Root.jsx` — Root layout (navbar, footer, route loading)
- `src/components/LoadingSpinner.jsx` — Shared spinner (supports inline and fullscreen)
- `src/router/router.jsx` — Route definitions
- `public/appdata.json` — App catalog data source

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation
1. Clone the repository
   - `git clone https://github.com/XDR-SAM/Sami-Appstore-io.git`
   - `cd Sami-Appstore-io`
2. Install dependencies
   - `npm install`

### Development
- Start the dev server
  - `npm run dev`
- Open the local URL printed in your terminal

### Build
- Production build
  - `npm run build`
- Preview the production build
  - `npm run preview`

## Data & Routing
- App data is served from `public/appdata.json` (fetched at runtime).
- Routing is powered by React Router v6 with a root layout and child routes:
  - `/` → Home
  - `/apps` → App catalog (search-enabled)
  - `/apps/:id` → App details
  - `/installation` → Installation guide
  - Fallback routes → Error/Not Found
- Loading states:
  - Global: shown via `useNavigation()` in `Root.jsx`
  - Inline: shown inside sections (e.g., Apps search results)

## Styling
- Tailwind CSS is configured via `src/index.css` and PostCSS.
- DaisyUI plugin is enabled for component primitives.

## Deployment
- Deployed on Netlify
- Production URL: [sami-io.netlify.app](https://sami-io.netlify.app/)

## Contributing
PRs and issues are welcome. Please ensure code follows the current patterns (React hooks, Tailwind styling) and passes lint checks.

## License & Ownership
All rights reserved. The project is owned and maintained by **Abdullah Al SAMi**. For inquiries, please reach out via the owner’s GitHub profile: [@XDR-SAM](https://github.com/XDR-SAM).
