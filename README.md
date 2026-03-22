# Allen St Fort — Portfolio

A full-stack personal portfolio built with React, TypeScript, and Node.js — showcasing my projects, experience, and skills as a software engineer.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://allen-s-portfolio.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-allenstfort23-181717?style=for-the-badge&logo=github)](https://github.com/allenstfort23)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Allen%20St%20Fort-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/allen-st-fort)

---

## Tech Stack

**Frontend**

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=flat&logo=framer&logoColor=white)

**Backend**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)

**Deployment**

![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

---

## Features

- **Home** — Animated hero, tech stack, work experience, and recent projects
- **Projects** — Full project showcase with tech badges and GitHub links
- **About** — Bio, certifications, and leadership experience
- **Contact** — Form that POSTs to the Express backend

---

## Project Structure

```
allen-stfort-portfolio/
├── frontend/               # React + TypeScript + Vite
│   ├── src/
│   │   ├── components/     # Navbar, ContactForm
│   │   ├── pages/          # Home, About, Projects, ContactMe
│   │   └── config.ts       # API URL config
│   └── package.json
└── backend/                # Express + TypeScript
    ├── src/
    │   └── index.ts        # API server with /contact endpoint
    └── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Run locally

```bash
# Clone the repo
git clone https://github.com/allenstfort23/allen-s-portfolio.git
cd allen-s-portfolio

# Frontend
cd frontend
npm install
npm run dev

# Backend (separate terminal)
cd backend
npm install
npm run dev
```

The frontend runs at `http://localhost:5173` and the backend at `http://localhost:3001`.

### Environment Variables

Create `frontend/.env`:

```env
VITE_API_URL=http://localhost:3001
```

---

## Contact

**Allen St Fort** — allenstfort1@gmail.com

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/allen-st-fort)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=flat&logo=github)](https://github.com/allenstfort23)
