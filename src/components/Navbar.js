import '../css/Navbar.css'
import React from 'react';
import MenuList from './MenuList'
import {useState} from 'react'

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick(event) {
    setIsOpen(!isOpen);
  }
  return (
    <nav>
      <h2 className='title'>Amazing scientists</h2>
      {/* <button onClick={handleClick}>See more</button>
       {isOpen && <MenuList />} */}
    </nav>
  );
};

export default Navbar;
