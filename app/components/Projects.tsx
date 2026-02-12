export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">My projects<span className="heart"></span></h2>

      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <div className="project-placeholder"></div>
          <h3 className="project-title">Weather App</h3>
          <p className="project-description">
            A weather application that fetches real-time weather data and displays it in a beautiful UI.
          </p>
          <div className="project-arrow">→</div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <div className="project-placeholder"></div>
          <h3 className="project-title">Task Manager</h3>
          <p className="project-description">
            A productivity tool that helps you organize and track your daily tasks efficiently.
          </p>
          <div className="project-arrow">→</div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <div className="project-placeholder"></div>
          <h3 className="project-title">Personal Website</h3>
          <p className="project-description">
            A portfolio website showcasing my skills, projects, and experience as a developer.
          </p>
          <div className="project-arrow">→</div>
        </div>
      </div>
    </section>
  );
}
