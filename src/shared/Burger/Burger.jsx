import React, {useState} from 'react'
import './Burger.scss'
const Burger = ({activeBurger, setActiveBurger}) => {
    // const [active, setActive] = useState(false);
    const triggerDropdown = () => {
        setActiveBurger(prev => !prev)
    }
  return (
      <div className={activeBurger ? "active-burger burger":"burger"} onClick={triggerDropdown}>
        <div className="brick1"></div>
        <div className="brick2"></div>
        <div className="brick3"></div>
    </div>
  )
}

export default Burger