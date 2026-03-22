# Portfolio Frontend

React + TypeScript + Vite frontend for Allen St Fort's portfolio.

## Stack

- **React 19** with React Router v7
- **TypeScript**
- **Vite** — dev server and bundler
- **Bootstrap 5** — styling
- **Framer Motion** — page animations

## Pages

| Route | Component |
|---|---|
| `/` | Home — hero, skills, experience, projects |
| `/about` | About — bio, certifications, leadership |
| `/projects` | Projects — full project showcase |
| `/contact-me` | Contact — form connected to Express backend |

## Setup

```bash
npm install
npm run dev       # dev server at localhost:5173
npm run build     # production build
```

### Environment

Create a `.env` file:

```env
VITE_API_URL=http://localhost:3001
```
