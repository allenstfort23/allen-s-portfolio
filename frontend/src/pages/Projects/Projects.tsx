const projects = [
  {
    title: "FloodFlow",
    description:
      "Cloud-hosted real-time flood information web app using the Miami-Dade open data API. Features live data integration, interactive UI, and production deployment on Vercel.",
    tech: ["React", "Next.js", "Rust", "Vercel"],
    github: "https://github.com/allenstfort/floodflow",
    live: "https://floodflow.vercel.app",
    highlight: true,
  },
  {
    title: "Task Manager",
    description:
      "Full-stack task management app with user authentication, CRUD operations, and a clean dashboard UI.",
    tech: ["Node.js", "TypeScript", "React", "MongoDB"],
    github: "https://github.com/allenstfort23/tasker-manager-CLI",
    live: null,
    highlight: false,
  },
  {
    title: "Job Tracker",
    description:
      "Personal job application tracker that helps manage the hiring pipeline — add positions, update statuses, and track follow-ups.",
    tech: ["React", "TypeScript", "Node.js"],
    github: "https://github.com/allenstfort/job-tracker",
    live: null,
    highlight: false,
  },
  {
    title: "Library Management System",
    description:
      "Backend REST API for managing library resources — books, members, and checkouts — with full CRUD support.",
    tech: ["Java", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/allenstfort/library-management",
    live: null,
    highlight: false,
  },
  {
    title: "Employee Management System",
    description:
      "Full-stack system to manage employee records with role-based access, built with a React front-end and Spring Boot API.",
    tech: ["React", "Java", "Spring Boot", "MySQL"],
    github: "https://github.com/allenstfort/employee-management-systems",
    live: null,
    highlight: false,
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio — built with React, TypeScript, and Bootstrap 5, deployed on Vercel with an Express backend for contact form handling.",
    tech: ["React", "TypeScript", "Vite", "Bootstrap"],
    github: "https://github.com/allenstfort/allen-stfort-portfolio",
    live: null,
    highlight: false,
  },
];

const Projects = () => {
  return (
    <div className="bg-dark text-white min-vh-100">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold">Projects</h1>
          <p className="text-secondary lead">
            A collection of things I've built — from production features to side
            projects.
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-12 col-md-6">
              <div
                className={`card h-100 text-white border-secondary ${
                  project.highlight
                    ? "bg-primary bg-opacity-10 border-primary"
                    : "bg-secondary bg-opacity-10"
                }`}>
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h4 className="card-title mb-0">{project.title}</h4>
                    {project.highlight && (
                      <span className="badge bg-primary">Featured</span>
                    )}
                  </div>
                  <p className="card-text text-secondary flex-grow-1">
                    {project.description}
                  </p>
                  <div className="mb-3 d-flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="badge bg-secondary text-light border border-secondary">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-light btn-sm">
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary btn-sm">
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
