export default function AboutMe() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Image on left */}
        <div className="about-image">
          <div className="image-placeholder">
            <span>image</span>
          </div>
          <img
            src="/assets/swirl.png"
            alt="swirl"
            className="about-swirl"
          />
        </div>

        {/* Text on right */}
        <div className="about-content">
          <div className="about-title">
            <img
              src="/assets/aboutme.png"
              alt="About me"
              className="about-me-image"
            />
            <div className="about-greeting">hey im veee!</div>
          </div>
          <p className="about-description">
            I'm a passionate developer who loves to learn and create things.
            I'm experienced in web development with React, Next.js, and TypeScript.
            When I'm not coding, I enjoy exploring new technologies and contributing to open-source projects.
          </p>
        </div>
      </div>
    </section>
  );
}
