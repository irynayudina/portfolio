// import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Me from './pages/Me/Me';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Section from './shared/FullScreenSection/Section';
import RoundSquareBg from './shared/RoundSquareBg/RoundSquareBg'
import NavBar from './shared/NavBar/NavBar';
import { Link, Element, Events, animateScroll as scroll } from "react-scroll";
import Burger from './shared/Burger/Burger';
import { useState } from 'react';
// import Pdf from './assets/Resume.pdf';
import Pdf from './assets/Resume1.pdf';
function App() {
  const [activeBurger, setActiveBurger] = useState(false)
  const hideDropdown = () => {
    setActiveBurger(false)
  }
  const [theme, setTheme] = useState("mixed")
  const [font, setFont] = useState("Lato")
  return (
    <div className={`App ${theme}-theme-bg font${font}`}>
      <RoundSquareBg theme={theme} />
      <NavBar theme={theme}>
        <div className={`name ${theme}-name`}><h1>Iryna Yudina</h1></div>
        <Burger activeBurger={activeBurger} setActiveBurger={setActiveBurger} />
        <div className={`navlinks ${theme}-navlinks`}>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            <div className='navlink blue'><p>Contact</p></div>
          </Link>
          <Link to="me" spy={true} smooth={true} duration={500}>
            <div className='navlink'><p>Me</p></div>
          </Link><Link to="projects" spy={true} smooth={true} duration={500}>
            <div className='navlink green'><p>Projects</p></div>
          </Link><Link to="skills" spy={true} smooth={true} duration={500}>
            <div className='navlink pink'><p>Skills</p></div>
          </Link>
          <div className='navlink'><a href={Pdf} target="_blank"><p>Resume</p></a></div>
        </div>
        {activeBurger ? <div className={`dropdown-burger ${theme}-dropdown-burger`}>
        <Link to="contact" spy={true} smooth={true} duration={500}>
            <div className='navlink blue' onClick={hideDropdown}><p>Contact</p></div>
          </Link>
          <Link to="me" spy={true} smooth={true} duration={500}>
            <div className='navlink' onClick={hideDropdown}><p>Me</p></div>
          </Link><Link to="projects" spy={true} smooth={true} duration={500}>
            <div className='navlink green' onClick={hideDropdown}><p>Projects</p></div>
          </Link><Link to="skills" spy={true} smooth={true} duration={500}>
            <div className='navlink pink' onClick={hideDropdown}><p>Skills</p></div>
          </Link>
          <div className='navlink' onClick={hideDropdown}><a href={Pdf} target="_blank"><p>Resume</p></a></div>
        </div> : ""}
      </NavBar>
      <Element name="me">
        <Section id='me'><Me theme={theme} setTheme={setTheme} setFont={setFont} /></Section>
      </Element> 
      <Element name="skills">
        <Section id='skills' className={`section-1 secondary_section ${theme}`} isBg='bg' ><Skills theme={theme}/></Section>
      </Element> 
      <Element name="projects">
        <Section id='projects' className={`section-2 secondary_section ${theme}`} isBg='bg' ><Projects theme={theme}/></Section>
      </Element> 
      <Element name="contact">
        <Section id='contact' className={`section-3 secondary_section ${theme}`} isBg='bg' ><Contact theme={theme}/></Section>
      </Element>            
    </div>
  );
}

export default App;
