import '../css/Navbar.css'
import React from 'react';
import MenuList from './MenuList'
import {useState} from 'react'
import { Button} from "react-bootstrap";


const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick(event) {
    setIsOpen(!isOpen);
  }
  
  const style = {
    marginLeft: "2rem",
    marginBottom: "1rem",
  }
  
  
  return (
    <nav>
      <h2 className='title'>Amazing scientists</h2>
      
      <Button variant="outline-dark" size="lg" onClick={handleClick} style={style}>See more</Button>
       {isOpen && <MenuList/>}
    </nav>
  );
};

export default Navbar;
