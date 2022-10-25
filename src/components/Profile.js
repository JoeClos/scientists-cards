import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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
                        <img src={profile.src} width="200"/>
                        <h3>{profile.name}</h3>
                        <h4>Ea elit aliqua ut id commodo anim adipisicing sunt quis. Deserunt sint ad consectetur esse tempor voluptate. Cupidatat eu ea amet amet ipsum mollit pariatur officia nulla est adipisicing. Pariatur consequat dolor esse culpa et nulla cillum sunt. Duis nulla mollit incididunt duis laboris adipisicing velit esse. Reprehenderit aute labore pariatur tempor deserunt velit sit duis voluptate dolor ex. Occaecat est cillum tempor anim aliqua aliquip do cupidatat.</h4>
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
