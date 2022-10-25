import { Button} from "react-bootstrap";
import "../css/Button.css";
import{ React} from "react";
// import Modal from "./Modal";

const CardButton = () => {
  // const [modalOpen, setModalOpen] = useState(false);
  // function handleClick() {
  //   console.log("Button was clicked");
  //   alert("Cu-cu");
  // }
  
  return (
    <div>
      <Button variant="dark" className="button"   
      // onClick={() => {
      //     setModalOpen(true);
      //   }}
        >
        More
      </Button>
      {/* {modalOpen && <Modal setOpenModal={setModalOpen} />} */}
    </div>
  );
};

export default CardButton;
