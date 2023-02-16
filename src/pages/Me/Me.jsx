import React from 'react'
import MeDescription from '../../shared/MeDescription/MeDescription'
import './Me.scss'

const Me = (props) => {
    return (
        <>      
            <MeDescription theme={props.theme} setTheme={props.setTheme} setFont={props.setFont}/>          
        </>
  )
}

export default Me