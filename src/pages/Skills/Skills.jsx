import React from 'react'
import './Skills.scss'
const Skills = (props) => {
  return (
    <div>
      <div className="section-name">
        <h1>Skills</h1>
      </div>
      <div className="content">
        <div className={`skills ${props.theme}`}>
          <div className="skillset">
            <h1 className="skillset-name">General</h1>
            <p>OOP</p>
            <p>Algorithms and data structures</p>
            <p>Basics of UI</p>
            <p>Basics of Automated Testing</p>
            <p>Security of Web applications</p>
          </div>
          <div className="skillset skillset-big">
            <h1 className="skillset-name">Languages and libraries</h1>
            <p>HTML, CSS, JavaScript</p>
            <p>Bootstrap, SASS, MaterialUI, Framer Motion</p>
            <p>ReactJS, Redux</p>
            <p>Mocha, Chai</p>
            <p>NodeJS, Express, MongoDB, SQL</p>
            <p>Socket.IO, Nodemailer, JWT</p>
            <p>C++, Raylib (graphics), SFML</p>
          </div>
          <div className="skillset">
            <h1 className="skillset-name">Tools</h1>
            <p>VS Code, Visual Studio</p>
            <p>Git & GitHub</p>
            <p>MongoDB Atlas, MySQL</p>
            <p>Netlify, Railway</p>
            <p>Postman</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills