import React from 'react';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h1>About Contact Manager</h1>
        
        <div className="about-content">
          <p>
            Contact Manager is a simple and efficient application for managing your contacts.
            Built with modern web technologies, it provides a clean and intuitive interface
            for storing and organizing your contact information.
          </p>

          <h2>Features</h2>
          <ul className="features-list">
            <li>Add, edit, and delete contacts</li>
            <li>Search through your contacts</li>
            <li>Store comprehensive contact information including name, email, phone, address, company, and notes</li>
            <li>Responsive design that works on all devices</li>
            <li>Fast and reliable data storage</li>
          </ul>

          <h2>Technology Stack</h2>
          <div className="tech-stack">
            <div className="tech-item">
              <h3>Frontend</h3>
              <ul>
                <li>React 18</li>
                <li>React Router</li>
                <li>Axios for API calls</li>
                <li>CSS3 for styling</li>
              </ul>
            </div>
            
            <div className="tech-item">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Mongoose ODM</li>
              </ul>
            </div>
          </div>

          <h2>Getting Started</h2>
          <p>
            To get started with Contact Manager, simply click the "Add New Contact" button
            on the home page and fill in the contact information. You can search for contacts
            using the search bar and edit or delete contacts as needed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
