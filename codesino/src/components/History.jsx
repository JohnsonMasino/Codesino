import React from "react";

const History = () => {
  return (
    <section className="history-section">
      <div className="history-container">
        <div className="history-block">
          <h2 className="history-title">Our History</h2>
          <p className="history-text">
            Codesino was born from years of dedication, innovation, and real-world
            experience. After building tech products and offering freelance
            solutions for clients across industries, Codesino emerged as a one-stop
            hub for high-quality digital solutions — spanning software development,
            design, cloud technologies, animations, fintech exchanges, and tech
            training. We exist to simplify access to top-tier digital services,
            offering everything under one trusted brand.
          </p>
        </div>

        <div className="history-block">
          <h2 className="history-title">Founder</h2>
          <p className="history-text">
            Johnson Masino, the visionary behind Codesino, transitioned from medical
            college in his fourth year to pursue his passion for software engineering.
            He earned a diploma through the intensive <a href="https://www.alxafrica.com/"
            target="_blank" rel="noopener noreferrer"> Alx Africa</a> program and went on to
            work as a backend engineer with the German company <a
            href="https://talents2germany.de/" target="_blank" rel="noopener
            noreferrer"> Talents2Germany.</a> After gaining experience from startups and
            freelance collaborations — notably with Meeky Emmanuel — Johnson envisioned
            a brand that offers integrated tech and financial services. That vision
            became Codesino: where innovation, quality, and accessibility converge to
            empower businesses and individuals.
          </p>

          <div className="founder-btn-wrapper">
            <a
              href="https://x.com/masino_oficial"
              target="_blank"
              rel="noopener noreferrer"
              className="founder-btn"
            >
              Visit Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
