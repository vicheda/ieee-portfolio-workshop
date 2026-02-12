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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
      </div>
    </section>
  );
}
