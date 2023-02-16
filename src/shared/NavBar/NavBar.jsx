import React, { useState, useEffect } from 'react';
import './NavBar.scss'
const NavBar = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth <= 576) {
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

  const childrenArray = React.Children.toArray(props.children); // 0 is name 1 is navlinks
  const name = childrenArray[0];
  const burger = childrenArray[1];
  const navs = childrenArray[2];
  const dropdown = childrenArray[3];
  return (
    <div className={`navbar navbar-${props.theme}`}>
      {isMobile ? (
        <> {name}
          {burger}
          {dropdown}
        </>
      ) : (
        <>
            {name}
            {navs}
        </>
      )}
    </div>
  );
};

export default NavBar;
