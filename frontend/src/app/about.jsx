import React from 'react';
import './about.css';

export default function AboutPage() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About GreenFix</h1>
        <p>
          At GreenFix, we are committed to building a sustainable future by revolutionizing waste management. Our platform connects communities, businesses, and organizations to create a cleaner, greener planet.
        </p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <img
            src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
            alt="Sustainable Waste Management"
            className="about-image"
          />
          <div>
            <h2>Our Mission</h2>
            <p>
              Our mission is to empower communities to manage waste responsibly and reduce landfill waste. By promoting recycling and fostering a circular economy, we aim to create a lasting impact on the environment.
            </p>
          </div>
        </div>

        <div className="about-section reverse">
          <div>
            <h2>How We Work</h2>
            <p>
              GreenFix connects waste generators, collectors, recyclers, and manufacturers through an integrated platform. Our technology ensures <strong>transparency</strong>, <strong>efficiency</strong>, and <strong>accountability</strong> at every step of the waste management process.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHN1c3RhaW5hYmxlJTIwbWFuYWdlbWVudHxlbnwwfHx8fDE2ODMwNzY0MjI&ixlib=rb-1.2.1&q=80&w=400"
            alt="How GreenFix Works"
            className="about-image"
          />
        </div>

        <div className="about-section">
          <img
            src="https://images.unsplash.com/photo-1519337265831-281ec6cc8514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxjb21tdW5pdHl8ZW58MHx8fHwxNjgzMDc2NDIy&ixlib=rb-1.2.1&q=80&w=400"
            alt="Community Impact"
            className="about-image"
          />
          <div>
            <h2>Our Impact</h2>
            <p>
              Since our inception, GreenFix has helped divert <strong>thousands of tons</strong> of waste from landfills, supported local recycling businesses, and educated communities about the importance of sustainable waste management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}