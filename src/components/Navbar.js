import '../css/Navbar.css'
import React from 'react';
import MenuList from './MenuList'
import {useState} from 'react'
import { Wave } from "react-animated-text";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons';

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick(event) {
    setIsOpen(!isOpen);
  }
  
  const size = {
    fontSize: "20rem"
  }
  
  const title = "Amazing scientists"
  return (
    <nav>
      <h2 className='title'>Amazing scientists</h2>
      <FontAwesomeIcon icon={ faWikipediaW} />
      {/* <Wave
              text={title}
              effect="stretch"
              effectChange={3.0}
              style={size}
            /> */}
      <button onClick={handleClick}>See more</button>
       {isOpen && <MenuList />}
    </nav>
  );
};

export default Navbar;
