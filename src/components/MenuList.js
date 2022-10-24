import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MenuList = () => {
  return (
    <ul>
      <li>
        <Link to={`/`}>
          <FontAwesomeIcon icon={faHome} style={{ fontSize: "1rem" }} />
        </Link>
      </li>
      <li>
        <Link to={`/profiles`}>Scientists' list</Link>
      </li>
    </ul>
  );
};

export default MenuList;
