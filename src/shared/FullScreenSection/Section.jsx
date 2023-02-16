import React from 'react'
import './Section.scss'
const Section = (props) => {
  return (
    <>      
      <div className={`section ${props.className}`}>
        {props.isBg ?
          <>
            <div className="bg-container">
              <div className='bg bg-left' />
              <div className='bg bg-circle' />
              <div className='bg bg-pipe' />
              <div className='bg bg-right' />
              <div className="blur_section"></div>
            </div>
          </>
        : ""}
        {props.children}
      </div>
    </>      
  )
}

export default Section