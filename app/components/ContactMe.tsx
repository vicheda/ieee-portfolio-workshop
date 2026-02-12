export default function ContactMe() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <img
          src="/assets/contactme.png"
          alt="Contact Me"
          className="contact-title"
        />
        <p className="contact-description">
          I'd love to connect! Feel free to reach out with any questions or opportunities.
        </p>
        <div className="contact-buttons">
          <a href="mailto:your-email@example.com" className="contact-button">
            Email Me
          </a>
          <a href="#" className="contact-button">
            LinkedIn
          </a>
          <a href="#" className="contact-button">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
