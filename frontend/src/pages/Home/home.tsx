import { Link } from "react-router-dom";

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "🟦" },
  { name: "Node.js", icon: "🌿" },
  { name: "Java", icon: "☕️" },
  { name: "Spring Boot", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "Next.js", icon: "▲" },
  { name: "Python", icon: "🐍" },
  { name: "Jest/Cypress", icon: "🧪" },
  { name: "Git", icon: "🔀" },
];

const projects = [
  {
    title: "FloodFlow",
    description:
      "Real-time flood information web app using the Miami-Dade API. Cloud-hosted with full-stack ownership from front-end UX to data integration.",
    tech: "React, Next.js, Rust, Vercel",
    link: "/projects",
  },
  {
    title: "Task Manager",
    description:
      "Full-stack task management application with user authentication and real-time updates.",
    tech: "Node.js, TypeScript, React, MongoDB",
    link: "/projects",
  },
];

const experience = [
  {
    role: "Software Engineer Intern",
    company: "ASRC Federal / NOAA",
    location: "Reston, VA",
    period: "May 2025 – Aug 2025",
    bullets: [
      "Built a full-stack AI Support Chat feature integrating React + TypeScript with the Dify API, from proof-of-concept to production",
      "Redesigned the FMC Hub UI/UX reducing task completion time by 2+ minutes",
      "Contributed scalable UI features within an Agile Scrum team",
    ],
  },
  {
    role: "Software Engineer",
    company: "PointClickCare",
    location: "Bloomington, MN",
    period: "Jan 2022 – Aug 2023",
    bullets: [
      "Engineered reusable React + TypeScript components integrated into Evergreen and Vue frameworks",
      "Wrote automated test suites with Selenium and Cypress, increasing coverage by 90%",
      "Optimized database queries with Hibernate and SQL, improving application efficiency",
      "Promoted from intern to full-time Software Engineer within 4 months",
    ],
  },
];

const Home = () => {
  return (
    <div className="bg-dark text-white">
      {/* Hero */}
      <div className="container text-center vh-100 d-flex align-items-center flex-column justify-content-center">
        <h1 className="display-4 fw-bold">Hi, I'm Allen St Fort 👋</h1>
        <p className="lead text-secondary">Full-Stack Software Engineer</p>
        <p className="col-md-6 mx-auto text-secondary">
          I build cloud-native web systems with modern JavaScript, React, and
          TypeScript — from performant front-end UIs to scalable back-end
          services.
        </p>
        <div className="mt-4">
          <Link to="/projects" className="btn btn-primary btn-lg mx-2">
            View Projects
          </Link>
          <Link to="/contact-me" className="btn btn-outline-light btn-lg mx-2">
            Hire Me
          </Link>
        </div>
      </div>

      {/* Skills */}
      <div className="container py-5 text-center border-top border-secondary">
        <h2 className="mb-4">Tech Stack</h2>
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-2 p-2">
              <div className="p-3 border border-secondary rounded h-100">
                <div className="fs-2">{skill.icon}</div>
                <p className="mt-2 mb-0 small">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="container py-5 border-top border-secondary">
        <h2 className="text-center mb-5">Experience</h2>
        <div className="row justify-content-center">
          {experience.map((job, index) => (
            <div key={index} className="col-12 col-md-10 mb-4">
              <div className="card bg-secondary bg-opacity-25 border-secondary text-white">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start flex-wrap">
                    <div>
                      <h5 className="card-title mb-0">{job.role}</h5>
                      <p className="text-primary mb-1">{job.company}</p>
                    </div>
                    <small className="text-secondary">
                      {job.location} • {job.period}
                    </small>
                  </div>
                  <ul className="mt-3 mb-0">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="text-secondary mb-1">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Projects */}
      <div className="container py-5 border-top border-secondary">
        <h2 className="text-center mb-4">Recent Projects</h2>
        <div className="row justify-content-center">
          {projects.map((project, index) => (
            <div key={index} className="col-12 col-md-5 mb-4 mx-2">
              <div className="card bg-secondary bg-opacity-25 border-secondary text-white h-100">
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title">{project.title}</h4>
                  <p className="card-text text-secondary flex-grow-1">
                    {project.description}
                  </p>
                  <small className="text-primary mb-3">{project.tech}</small>
                  <Link to={project.link} className="btn btn-outline-light mt-auto">
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-3">
          <Link to="/projects" className="btn btn-primary">
            See All Projects →
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-top border-secondary text-center py-4 text-secondary">
        <p className="mb-0">
          © {new Date().getFullYear()} Allen St Fort •{" "}
          <a
            href="https://www.linkedin.com/in/allen-st-fort"
            className="text-secondary"
            target="_blank"
            rel="noreferrer">
            LinkedIn
          </a>{" "}
          •{" "}
          <a
            href="https://github.com/allenstfort"
            className="text-secondary"
            target="_blank"
            rel="noreferrer">
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
