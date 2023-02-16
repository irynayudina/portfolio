import React from 'react'
import './ViewSwitch.scss'
const FontSwitch = (props) => {
  return (   
    <>
      <div className={`switches switches-theme-${props.theme}`}>
        <div className="switch" onClick={()=>props.setFont("Raleway")}><p>Raleway</p></div>
        <div className="switch" onClick={()=>props.setFont("Monserrat")}><p>Monserrat</p></div>
        <div className="switch" onClick={()=>props.setFont("Roboto")}><p>Roboto</p></div>
        <div className="switch" onClick={()=>props.setFont("Lato")}><p>Lato</p></div>
        <div className="switch" onClick={()=>props.setFont("Open_Sans")}><p>Open Sans</p></div>
        <div className="switch" onClick={()=>props.setFont("Patrick_Hand")}><p>Patrick Hand</p></div>
        <div className="switch" onClick={()=>props.setFont("Nanum_Gothic")}><p>Nanum Gothic</p></div>
        <div className="switch" onClick={()=>props.setFont("Merienda")}><p>Merienda</p></div>
        <div className="switch" onClick={()=>props.setFont("Arial")}><p>Arial</p></div>
      </div>
      <div className={`switches switches-theme switches-theme-${props.theme}`}>
        <div className="switch" onClick={()=>props.setTheme("dark")}><p>Dark</p></div>
        <div className="switch" onClick={()=>props.setTheme("light")}><p>Bright</p></div>
        <div className="switch" onClick={()=>props.setTheme("mixed")}><p>Mixed</p></div>
      </div>
    </>   
  )
}

export default FontSwitch