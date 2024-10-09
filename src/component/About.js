import React from 'react';
import '../about.css';
import team1 from './team-member1.jpg';
import team2 from './team-member2.jpg';
import team3 from './team-member3.jpg'
const AboutSection = () => {
  return (
    <div>
    <div className="about-us-container">
      <h1>About EduPathway</h1>
      <section className="about-section">
        <p>
          Welcome to <strong>EduPathway</strong>, your number one source for educational blogs, insights, and learning resources. We're dedicated to providing you the very best content, with a focus on high-quality educational materials, expert contributors, and engaging learning experiences.
        </p>
        <p>
          Founded in 2024, EduPathway has come a long way from its beginnings as a simple educational blog. When we first started out, our passion for providing a platform to help educators and learners drove us to work hard, and turned EduPathway into a thriving community.
        </p>
        <p>
          Our mission is to make education more accessible, engaging, and enjoyable for learners of all ages. We believe that learning is a continuous journey, and we're here to guide you every step of the way.
        </p>
      </section>
      
      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={team1} alt="Founder" className="team-photo" />
            <h3>Prabhjot Singh</h3>
            <p>Founder & CEO</p>
            <p>Prabhjot is passionate about education and believes in making learning accessible for everyone. He started EduPathway with the vision of creating an inclusive platform for educators and learners.</p>
          </div>
          <div className="team-member">
            <img src={team2} alt="Content Lead" className="team-photo" />
            <h3>Jane Smith</h3>
            <p>Content Lead</p>
            <p>Jane manages the content on EduPathway, ensuring that we deliver insightful and relevant educational material for our readers.</p>
          </div>
          <div className="team-member">
            <img src={team3} alt="Developer" className="team-photo" />
            <h3>Rohit Sharma</h3>
            <p>Lead Developer</p>
            <p>Rohit is the tech genius behind EduPathway. He ensures the platform runs smoothly and continuously works on making it better for our users.</p>
          </div>
        </div>
      </section>

      <section className="vision-section">
        <h2>Our Vision</h2>
        <p>
          At EduPathway, we believe that education is a pathway to success. Our goal is to inspire, educate, and empower learners worldwide by providing free access to high-quality learning materials. We envision a world where everyone has the opportunity to learn and grow, regardless of their background or location.
        </p>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>If you have any questions or suggestions, feel free to <a href="/Contact">contact us</a>. We're always happy to hear from you!</p>
      </section>
    </div>
    </div>
  );
}

export default AboutSection;
