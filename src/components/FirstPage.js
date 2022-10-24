import Navbar from "./Navbar";
import { Wave } from "react-animated-text";
import '../css/FirstPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const title = "Check the world's famous scientists";

const FirstPage = () => {
  return (
    <div>
      <Navbar />
      <div className="letter-wave">
          <h1>
              <Wave text={title}
              effect="stretch" effectChange={3.0}
             />
            
                <Link to={`/profiles`}>
                    <FontAwesomeIcon icon={faHandPointRight} />
                </Link>
          </h1>
      </div>
    </div>
  );
};

export default FirstPage;
