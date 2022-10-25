import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
import { scientistsData } from "./scientists";
import '../css/Profile.css'

const Profile = () => {
    
    const {profileId} = useParams();
    const profile = scientistsData.find((scientistData) => scientistData.id === Number.parseInt(profileId, 10));

    return(
        <div>
            <Navbar />
            <div className="card">
               
              
                    {profile &&
                    <div>
                        <img src={profile.src} width="200" alt="joe"/>
                        <h3>{profile.name}</h3>
                        <h4>{profile.description}</h4>
                        <p>Fields: {profile.subject}</p>
                        <p>Source: <a href={profile.link} target="_blank"
                        rel="noreferrer noopener">Wikipedia</a></p>
                    </div>
                }
                
            </div>
        </div>
    );
};

export default Profile;
