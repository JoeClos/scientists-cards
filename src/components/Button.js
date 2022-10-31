import { Button} from "react-bootstrap";
import "../css/Button.css";
import{ React} from "react";

const CardButton = () => {
  
  return (
    <div>
      <Button variant="dark" className="button"   
        >
        More
      </Button>
    </div>
  );
};

export default CardButton;
