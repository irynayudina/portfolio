import React, {useState, useEffect} from 'react'
import './ViewControllers.scss'

const ViewControllers = (props) => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleWindowResize = () => {
        if (window.innerWidth <= 1200) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
        };
        window.addEventListener('resize', handleWindowResize);
        handleWindowResize();
        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

  return (
    <div className='view-controllers'>
      {isMobile ? (
        <>
        <div className={`switches-b switches-theme-b-${props.theme}`}>
          <div className="switch-b" onClick={()=>props.setFont("Raleway")}><p>Raleway</p></div>
          <div className="switch-b" onClick={()=>props.setFont("Monserrat")}><p>Monserrat</p></div>
          <div className="switch-b" onClick={()=>props.setFont("Roboto")}><p>Roboto</p></div>
          <div className="switch-b" onClick={()=>props.setFont("Lato")}><p>Lato</p></div>
          <div className="switch-b" onClick={()=>props.setFont("Open_Sans")}><p>Open Sans</p></div>
          <div className="switch-b" onClick={()=>props.setFont("Patrick_Hand")}><p>Patrick Hand</p></div>
          <div className="switch-b" onClick={()=>props.setFont("Nanum_Gothic")}><p>Nanum Gothic</p></div>
          <div className="switch-b" onClick={()=>props.setFont("Merienda")}><p>Merienda</p></div>
          <div className="switch-b" onClick={()=>props.setFont("Arial")}><p>Arial</p></div>
          <div className="star1placeholder">
            <div className="crossX_gray1"></div>
            <div className="crossY_gray1"></div>
            <div className="crossX_white1" ></div>
            <div className="crossY_white1" ></div>
          </div>
        </div>
          <div className={`switches-theme-b switches-theme-b-${props.theme}`}>
          <div className="star2placeholder">
            <div className="crossX1" ></div>
            <div className="crossY1" ></div>
          </div>
          <div className="switch-b" onClick={()=>props.setTheme("dark")}><p>Dark</p></div>
          <div className="switch-b" onClick={()=>props.setTheme("light")}><p>Bright</p></div>
          <div className="switch-b" onClick={()=>props.setTheme("mixed")}><p>Mixed</p></div>
        </div>
      </>   
      ): ("")}
    </div>
  )
}

export default ViewControllers