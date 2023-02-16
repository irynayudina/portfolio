import React from 'react'
import { useState, useEffect } from 'react';
import './RoundSquareBg.scss'

const RoundSquareBg = (props) => {
    const [viewW, setViewW] = useState(window.innerWidth)
    const [viewH, setViewH] = useState(window.innerHeight)
    useEffect(() => {
        function handleResize() {
            setViewW(window.innerWidth)
            setViewH(window.innerHeight)
            console.log(window.innerWidth)
        }    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    let circles = [];
    for (let i = 0; i < viewW; i+=120){
        circles.push(i);
    }
    let graysquare = [];
    for (let i = 0; i < viewW; i+=250){
        graysquare.push(i);
    }
    let circlesY = [];
    for (let i = 0; i < viewH; i+=120){
        circlesY.push(i);
    }
    let graySquareY = [];
    for (let i = 0; i < viewH; i+=200){
        graySquareY.push(i);
    }
    return (      
        <>            
            {circles.map(c => (
                circlesY.map(cY => (
                    <div className={`circle ${props.theme}-theme-bg-figures`} style={{"top":`${cY}px`, "left":`${c}px`}}></div>
                ))                
            ))}
            {graysquare.map(s => (
                graySquareY.map(sY => (
                    <>
                    <div className={`circle ${props.theme}-theme-bg-figures`} style={{ "top": `${sY-50}px`, "left": `${s-50}px` }}></div>
                    <div className={`smallsquare_gray ${props.theme}-theme-bg-figures`} style={{"top":`${sY}px`, "left":`${s}px`}}></div>
                    <div className={`smallsquare_gray1 ${props.theme}-theme-bg-figures`} style={{"top":`${sY-50}px`, "left":`${s-50}px`}}></div>
                    <div className={`smallsquare_gray2 ${props.theme}-theme-bg-figures`} style={{"top":`${sY}px`, "left":`${s+50}px`}}></div>
                    </>
                ))                
            ))}
            
      </>
  )
}

export default RoundSquareBg