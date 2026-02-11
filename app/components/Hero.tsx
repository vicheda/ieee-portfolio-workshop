export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-name-container">
        <img
          src="/assets/name.png"
          alt="name"
          className="hero-name"
        />
      </div>
      <p className="hero-subtitle">fun version</p>
      
      {/* Decorative elements */}
      <div className="decorative-elements">
        <img
          src="/assets/star_1.png"
          alt="star"
          className="star star-1"
        />
        <img
          src="/assets/swirl.png"
          alt="swirl"
          className="spiral spiral-1"
        />
        <img
          src="/assets/swirl.png"
          alt="swirl"
          className="spiral spiral-2"
        />
      </div>
    </section>
  );
}
