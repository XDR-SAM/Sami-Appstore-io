![image](appstoress.png)

## SAMI Appstore Sami-Io

A responsive, fast, and production-ready app catalog built with React and Vite. It showcases applications with search, detail pages, installation instructions, and a polished UI.

### Live Demo
- Live site: [sami-io.netlify.app](https://sami-io.netlify.app/)
- Repository: [XDR-SAM/Sami-Appstore-io](https://github.com/XDR-SAM/Sami-Appstore-io.git)

### Ownership & Attribution
- Owner: **Abdullah Al SAMi** (Bangladesh University, CSE Department)
- GitHub: [@XDR-SAM](https://github.com/XDR-SAM)

## Plugins and librarys Technologies
- React (functional components, hooks)
- Vite (dev server, build)
- React Router v6 (routing, nested routes, loaders/navigation state)
- Tailwind CSS (utility-first styling)
- DaisyUI (Tailwind component plugin)
- React Toastify (non-blocking notifications)
- Recharts library (for charts)
- Netlify (deployment)

## Features
- Searchable app catalog with debounced filtering
- Rich app cards (image, downloads, rating)
- App details page (`/apps/:id`)
- Installation page (`/installation`)
- Friendly error pages and not-found handling
- Global and inline loading states with a branded spinner
- Responsive layout with modern UI patterns

## Project Structure navigation
- `src/pages/home/Home.jsx` — Landing page and trending apps section
- `src/pages/apps/Apps.jsx` — App listing with search
- `src/pages/apps/AppDetails.jsx` — App details view
- `src/pages/installation/Installation.jsx` — Installation instructions
- `src/pages/errorpage/*` — Error and not-found routes
- `src/pages/root/Root.jsx` — Root layout (navbar, footer, route loading)
- `src/components/LoadingSpinner.jsx` — Shared spinner (supports inline and fullscreen)
- `src/router/router.jsx` — Route definitions
- `public/appdata.json` — App catalog data source

## How to start 

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



## Deployment
- Deployed on Netlify
- Production URL : [sami-io.netlify.app](https://sami-io.netlify.app/)
