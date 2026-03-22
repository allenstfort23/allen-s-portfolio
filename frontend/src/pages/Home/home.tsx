import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

// Reusable scroll-reveal wrapper
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  }),
};

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  }),
};

const Home = () => {
  return (
    <div className="bg-dark text-white">
      {/* Hero */}
      <div className="container text-center vh-100 d-flex align-items-center flex-column justify-content-center">
        <motion.h1
          className="display-4 fw-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Hi, I'm Allen St Fort 👋
        </motion.h1>

        <motion.p
          className="lead text-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.2 }}
        >
          Full-Stack Software Engineer
        </motion.p>

        <motion.p
          className="col-md-6 mx-auto text-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.35 }}
        >
          I build cloud-native web systems with modern JavaScript, React, and
          TypeScript — from performant front-end UIs to scalable back-end
          services.
        </motion.p>

        <motion.div
          className="mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.5 }}
        >
          <Link to="/projects" className="btn btn-primary btn-lg mx-2">
            View Projects
          </Link>
          <Link to="/contact-me" className="btn btn-outline-light btn-lg mx-2">
            Hire Me
          </Link>
        </motion.div>
      </div>

      {/* Skills */}
      <div className="container py-5 text-center border-top border-secondary">
        <motion.h2
          className="mb-4"
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Tech Stack
        </motion.h2>
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-2 p-2">
              <motion.div
                className="p-3 border border-secondary rounded h-100"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.4,
                      ease: "easeOut" as const,
                      delay: index * 0.06,
                    },
                  },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.08, borderColor: "#0d6efd" }}
              >
                <div className="fs-2">{skill.icon}</div>
                <p className="mt-2 mb-0 small">{skill.name}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="container py-5 border-top border-secondary">
        <motion.h2
          className="text-center mb-5"
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Experience
        </motion.h2>
        <div className="row justify-content-center">
          {experience.map((job, index) => (
            <div key={index} className="col-12 col-md-10 mb-4">
              <motion.div
                className="card bg-secondary bg-opacity-25 border-secondary text-white"
                variants={slideLeft}
                custom={index * 0.15}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
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
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Projects */}
      <div className="container py-5 border-top border-secondary">
        <motion.h2
          className="text-center mb-4"
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Recent Projects
        </motion.h2>
        <div className="row justify-content-center">
          {projects.map((project, index) => (
            <div key={index} className="col-12 col-md-5 mb-4 mx-2">
              <motion.div
                className="card bg-secondary bg-opacity-25 border-secondary text-white h-100"
                variants={fadeUp}
                custom={index * 0.15}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -6, boxShadow: "0 12px 30px rgba(13,110,253,0.2)" }}
              >
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title">{project.title}</h4>
                  <p className="card-text text-secondary flex-grow-1">
                    {project.description}
                  </p>
                  <small className="text-primary mb-3">{project.tech}</small>
                  <Link
                    to={project.link}
                    className="btn btn-outline-light mt-auto"
                  >
                    View Project
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
        <motion.div
          className="text-center mt-3"
          variants={fadeUp}
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link to="/projects" className="btn btn-primary">
            See All Projects →
          </Link>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-top border-secondary text-center py-4 text-secondary">
        <p className="mb-0">
          © {new Date().getFullYear()} Allen St Fort •{" "}
          <a
            href="https://www.linkedin.com/in/allenstfort/"
            className="text-secondary"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          •{" "}
          <a
            href="https://github.com/allenstfort"
            className="text-secondary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
