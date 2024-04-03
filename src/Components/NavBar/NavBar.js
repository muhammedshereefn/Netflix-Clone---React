import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="NetFlix Logo" />
      <div className='buttons'>
        <button className='join-button'>JOIN NOW</button>
        <button className='signin-button'>SIGN IN</button>
      </div>
    </div>
  );
}

export default NavBar;
