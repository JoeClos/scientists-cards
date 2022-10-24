import '../css/Modal.css'
import { scientistsData } from './scientists';

const dataTitle = scientistsData;
const Modal = ({setOpenModal}) => {
    return (
        <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title">
            <h1>Scientist's name</h1>
          </div>
          <div className="body">
            <p>Ea elit aliqua ut id commodo anim adipisicing sunt quis. Deserunt sint ad consectetur esse tempor voluptate. Cupidatat eu ea amet amet ipsum mollit pariatur officia nulla est adipisicing. Pariatur consequat dolor esse culpa et nulla cillum sunt. Duis nulla mollit incididunt duis laboris adipisicing velit esse. Reprehenderit aute labore pariatur tempor deserunt velit sit duis voluptate dolor ex. Occaecat est cillum tempor anim aliqua aliquip do cupidatat.</p>
          </div>
          <div className="footer">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              Close
            </button>
            {/* <button>Continue</button> */}
          </div>
        </div>
      </div>
    );
    
}

export default Modal;