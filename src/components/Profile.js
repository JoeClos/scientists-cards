import { useParams, Link } from "react-router-dom";
import { scientistsData } from "./scientists";
import "../css/Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faListCheck } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const { profileId } = useParams();
  const profile = scientistsData.find(
    (scientistData) => scientistData.id === Number.parseInt(profileId, 10)
  );

  return (
    <div>
      <div className="card">
        <div className="card-sections">
          {profile && (
            <div className="sections">
              <section className="image-sec">
                <img src={profile.src} width="200" alt="joe" className="scientists-img"/>
                <p><b>Fields:</b> <i>{profile.subject}</i></p>

              </section>
              <section className="text">
              <h4 className="description">{profile.name}</h4>

                <h4 className="description">{profile.description}</h4>
                <p style={{ textAlign: "end", marginRight: "1rem" }}>
                  Source:{" "}
                  <a
                    href={profile.link}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Wikipedia
                  </a>
                </p>
              </section>
            </div>
          )}
        </div>
        <div className="links">
            <Link to={`/`}>
              <FontAwesomeIcon icon={faHome} className="icon" />
            </Link>
            <Link to={`/profiles`}>
            <FontAwesomeIcon icon={faListCheck} className="icon" />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
