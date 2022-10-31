import '../css/Navbar.css'
import React, { useState } from 'react';
import MenuList from './MenuList'
import { Button} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick(event) {
    setIsOpen(!isOpen);
  }
  
  const style = {
    marginLeft: "2rem",
    marginBottom: "1rem",
    marginTop: "-2rem",
    borderRadius: "1rem 1rem 1rem 0"
  }
  
  
  return (
    <nav>
      <h2 className='title'>Amazing scientists <span>
        <FontAwesomeIcon icon={faLightbulb} />
      </span></h2>
      
      <Button variant="outline-dark" size="lg" onClick={handleClick} style={style}>See more</Button>
       {isOpen && <MenuList/>}
    </nav>
  );
};

export default Navbar;
