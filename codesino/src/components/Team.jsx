import React from "react";

const teamMembers = [
  {
    name: "Johnson Masino",
    role: "Founder & Project Manager",
    description:
      "Johnson brings strong leadership and deep backend expertise. He's the visionary behind Codesino and leads tech strategy.",
    image: "/Johnson.JPG",
    profileLink: "https://x.com/masino_oficial",
  },
  {
    name: "Meekemma",
    role: "Co Founder & Lead Developer",
    description:
      "Meekemma streamlines our deployments and infrastructure, ensuring stability, security, and efficiency across environments.",
    image: "/Meeky.JPG",
    profileLink: "https://x.com/Meek_emma007",
  },
];

const Team = () => {
  return (
    <section className="team-section">
      <div className="team-container">
        <h2 className="team-title">Meet Our Core Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.image} alt={member.name} className="team-image" />
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-description">{member.description}</p>
              <a
                href={member.profileLink}
                target="_blank"
                rel="noopener noreferrer"
                className="team-btn"
              >
                Visit Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
