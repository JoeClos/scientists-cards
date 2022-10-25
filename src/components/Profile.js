import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { scientistsData } from "./scientists";


const Profile = () => {
    const profile = scientistsData;
    
    return(
        <div>
            <Navbar />
            <ul>
                {profile &&
                <div>
                    <li>{profile.name}</li>
                    <li>{profile.link}</li>
                    <li>{profile.link}</li>
                </div>
            }
            </ul>
        </div>
    );
};

export default Profile;
