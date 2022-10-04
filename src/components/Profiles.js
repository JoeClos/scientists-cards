import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import CardButton from "./Button";
import { scientistsData } from "./scientists.js";


const center = {
  textAlign: "center",
};



const Profiles = () => {
  const data = scientistsData

  return (
  //   <div>
     
  //       {data.map((profile) =>{
          
  //        <p key={profile.itemLabel}>{profile.itemLabel}</p>
  //         console.log(profile.itemLabel)
  //       })}
        
      
  //   </div>
  // )
  //     }
    <Container className="p-4">
      <div className="flex">
        {data.map((profile) => (
          <Card style={{ width: "18rem" }} key={profile.name}>
            <Card.Body>
              <Card.Img variant="top" src={profile.src} alt={profile.name} />
              <Card.Title style={center}>
                {profile.name.toUpperCase()}
              </Card.Title>
              <Card.Subtitle style={center}>{profile.subject}</Card.Subtitle>
            </Card.Body>
            <Card.Link
              href="https://fi.wikipedia.org/wiki/Albert_Einstein"
              target="_blank"
              className="link"
              style={center}
            >
              Source: Wikipedia
            </Card.Link>
            {/* <Button variant="info">More</Button> */}
            <div   style={center}>
              <CardButton/>
             
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Profiles;
