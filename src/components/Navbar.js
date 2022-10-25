import '../css/Navbar.css'
import React from 'react';
import MenuList from './MenuList'
import {useState} from 'react'


const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick(event) {
    setIsOpen(!isOpen);
  }
  
  // const size = {
  //   fontSize: "20rem"
  // }
  
  // const title = "Amazing scientists"
  return (
    <nav>
      <h2 className='title'>Amazing scientists</h2>
      <button onClick={handleClick} className="navbar-button">See more</button>
       {isOpen && <MenuList/>}
    </nav>
  );
};

export default Navbar;
