import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import '../css/MenuList.css'

const MenuList = () => {
  return (
    <ul>
      <li>
        <Link to={`/`}>
          <FontAwesomeIcon icon={faHome} className="list-items" />
        </Link>
      </li>
      <li>
        <Link to={`/profiles`} className="list-items item">Scientists' list</Link>
      </li>
    </ul>
  );
};

export default MenuList;
