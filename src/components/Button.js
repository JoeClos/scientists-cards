import Button from "react-bootstrap/Button";
import "../css/Button.css";
import React from "react";

const CardButton = () => {
  function handleClick() {
    console.log("Button was clicked");
    alert("Cu-cu");
  }

  return (
    <div>
      <Button variant="dark" className="button" onClick={handleClick}>
        More
      </Button>
    </div>
  );
};

export default CardButton;
