import React, {useState} from 'react'
import './Projects.scss'
import { ProjectWeb, ProjectCpp, ProjectPy } from '../../entities/Project/Project.ts'
import cpp from '../../assets/images/cpp.png';
// import ccp from '../../../public/assets/images/cpp.png'
const Projects = (props) => {
  const [category, setCategory] = useState("web")
  const changeCategory = (c) => {
    setCategory(c);
  }
  const bgImgStyle = { 
    backgroundImage: "url('./images/moviesapp.png')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
}
  return (
    <div>
      <div className="section-name">
        <h1>Projects</h1>
      </div>
      <div className="content">
        <div className={`section-filter ${props.theme}`}>
          <div className="filter-item cpp" onClick={()=>changeCategory("cpp")}><h2>C++</h2></div>
          <div className="filter-item web" onClick={()=>changeCategory("web")}><h1>Web</h1></div>
        <div className="filter-item python" onClick={()=>changeCategory("py")}><h3>Python</h3></div>
      </div>
        {category === "web" ? (          
          <div className="container">
            {ProjectWeb.map(item => (
              <div key={item.id} className={`element element-${item.id}`}>
                <div className={`project ${props.theme}`}
                style={{ 
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
                >
                  <div className="name-project"><h2>{item.name}</h2></div>
                  <div className="technoligies">{item.technologies.map(t => (
                    <div className="tech">{t}</div>
                  ))}</div>
                  <p className="description">{item.description}</p>
                  <div className="buttons">
                    <a href={item.githubLink} target="_blank"><div className="github-btn btn">GitHub</div></a>
                    <a href={item.hostlink} target="_blank"><div className="live-btn btn">Live</div></a>
                  </div>
                </div>
              </div>
            ))}          
        </div>
        ) : ("")}
        {category === "cpp" ? (          
          <div className="container">
            {ProjectCpp.map(item => (
              <div key={item.id} className={`element element-${item.id}`}>
                <div className={`project ${props.theme}`}
                style={{ 
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
                >
                  <div className="name-project"><h2>{item.name}</h2></div>
                  <div className="technoligies">{item.technologies.map(t => (
                    <div className="tech">{t}</div>
                  ))}</div>
                  <p className="description">{item.description}</p>
                  <div className="buttons">
                    <a href={item.githubLink} target="_blank"><div className="github-btn btn">GitHub</div></a>
                    <a href={item.hostlink} target="_blank"><div className="live-btn btn">Live</div></a>
                  </div>
                </div>
              </div>
            ))}          
        </div>
        ) : ("")}
        {category === "py" ? (          
          <div className="container-py">
            {ProjectPy.map(item => (
              <div key={item.id} className={`element element-${item.id}`}>
                <div className={`project ${props.theme}`}
                style={{ 
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
                >
                  <div className="name-project"><h2>{item.name}</h2></div>
                  <div className="technoligies">{item.technologies.map(t => (
                    <div className="tech">{t}</div>
                  ))}</div>
                  <p className="description">{item.description}</p>
                  <div className="buttons">
                    <a href={item.githubLink} target="_blank"><div className="github-btn btn">GitHub</div></a>
                    <a href={item.hostlink} target="_blank"><div className="live-btn btn">Live</div></a>
                  </div>
                </div>
              </div>
            ))}          
        </div>
        ) : ("")}
      </div>
    </div>
  )
}

export default Projects