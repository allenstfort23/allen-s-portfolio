const About = () => {
  return (
    <div className="bg-dark text-white min-vh-100">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="display-5 fw-bold mb-4">About Me</h1>

            <p className="lead text-secondary">
              I'm a full-stack software engineer with a passion for building
              reliable, user-centered web applications.
            </p>

            <p className="text-secondary">
              I've worked across the stack — from React + TypeScript front-ends
              to Spring Boot APIs and cloud infrastructure on AWS. At ASRC
              Federal / NOAA, I built an AI Support Chat feature from
              proof-of-concept to production. At PointClickCare, I shipped
              reusable components, increased test coverage by 90%, and was
              promoted from intern to full-time engineer within 4 months.
            </p>

            <p className="text-secondary">
              I'm currently pursuing a B.S. in Software Engineering at Western
              Governors University (expected 2026) and am a Career Preparation
              Fellow at Management Leadership for Tomorrow (MLT) — a competitive
              18-month leadership program.
            </p>

            <hr className="border-secondary my-4" />

            <h4 className="mb-3">Certifications</h4>
            <ul className="text-secondary">
              <li>ITIL® 4 Foundation</li>
              <li>WGU Back-End Developer</li>
              <li>WGU Front-End Developer</li>
            </ul>

            <hr className="border-secondary my-4" />

            <h4 className="mb-3">Leadership</h4>
            <div className="mb-3">
              <h6 className="mb-0">Career Preparation Fellow — Management Leadership for Tomorrow (MLT)</h6>
              <small className="text-secondary">Washington, DC • Mar 2025 – Present</small>
              <p className="text-secondary mt-1">
                Selected for a competitive 18-month leadership program.
                Completed business case studies and attended conferences hosted
                by Deloitte, LinkedIn, and Target.
              </p>
            </div>
            <div>
              <h6 className="mb-0">Member — National Society of Black Engineers (NSBE)</h6>
              <small className="text-secondary">Boca Raton, FL • Sep 2023 – Present</small>
            </div>

            <hr className="border-secondary my-4" />

            <div className="d-flex gap-3">
              <a
                href="https://www.linkedin.com/in/allen-st-fort"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light">
                LinkedIn
              </a>
              <a
                href="https://github.com/allenstfort"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light">
                GitHub
              </a>
              <a href="/contact-me" className="btn btn-primary">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
