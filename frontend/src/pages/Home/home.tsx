import { Link } from "react-router-dom";

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "🟦" },
  { name: "Node.js", icon: "🌿" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Bootstrap", icon: "📦" },
];

const projects = [
  {
    title: "FloodFlow",
    description: "Real-time flood warning app using AI.",
    tech: "React, Next.js, TypeScript",
    link: "/projects",
  },
  {
    title: "Task Manager CLI",
    description: "Command-line tool for tracking tasks efficiently.",
    tech: "Node.js, TypeScript, MongoDB",
    link: "/projects",
  },
];

const Home = () => {
  return (
    <div className="container-fluid bg-dark text-white">
      {/* Hero Section */}
      <div className="container text-center vh-100 d-flex align-items-center flex-column justify-content-center">
        <h1 className="display-4 fw-bold">Hi, I'm Allen St Fort 👋</h1>
        <p className="lead">Software Engineer | Web Developer</p>
        <div className="mt-4">
          <Link to="/projects" className="btn btn-primary btn-lg mx-2">
            View Projects
          </Link>
          <Link to="/contact" className="btn btn-outline-light btn-lg mx-2">
            Hire Me
          </Link>
        </div>
      </div>

      {/* Skills Section */}
      <div className="container py-5 text-center">
        <h2 className="mb-4">Tech Stack</h2>
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="col-6 col-sm-4 col-md-2 text-center p-3">
              <div className="p-3 border rounded">
                <span className="fs-2">{skill.icon}</span>
                <p className="mt-2">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4">Recent Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-12 col-md-6 mb-4">
              <div className="card bg-secondary text-white">
                <div className="card-body">
                  <h4 className="card-title">{project.title}</h4>
                  <p className="card-text">{project.description}</p>
                  <small className="text-muted">{project.tech}</small>
                  <br />
                  <Link to={project.link} className="btn btn-light mt-2">
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
