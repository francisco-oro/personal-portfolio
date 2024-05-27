import { useState, useContext } from "react";
import { AppContext } from "../../App.js";
import { HashLink } from "react-router-hash-link";
import { Container, Row, Col } from "../../utlis/Bootstrap.jsx";
import ButtonOutline from "../common/ButtonOutline.jsx";
import { Pannellum } from "pannellum-react";
// import bg2 from "./background/pen__ink_inside_a_brickstone_library_tall_stacks.jpg";
import pan360 from "../../data/pan360.json";
import {ArchiveFill, BoxArrowDown, CodeSquare, FilePerson, FilePersonFill} from "react-bootstrap-icons";

export default function Page4() {
  const[showEaster360] = useContext(AppContext);
  const[easter360Id, setEaster360Id] = useState(10);

  const bgUri = "./background/" + pan360[easter360Id].image;
  
  const handlEeaster360Id = () => { 
    if (easter360Id === pan360.length - 1) {
      setEaster360Id(0);
    } else {
      setEaster360Id(easter360Id + 1);
    }
  }

  return (
      <main>      
        <div className="media-container">
          <div className="media-wrapper">
            <Pannellum
              width="100%"
              height="100%"
              image={require(`${bgUri}`)}
              yaw={180}
              hfov={110}
              autoLoad
              autoRotate={true}
              compass={false}
              showZoomCtrl={false}
              showFullscreenCtrl={false}
              mouseZoom={false} />
          </div>
        
        <Container fluid id="intro">
          <Row className="d-flex 
            justify-content-center
            justify-content-lg-start
            align-items-center">
            <Col xs={11}
              md={{span:8, offset: 0}}
              lg={{span:5, offset: 5}}
              className="media-content-column">
              
              <div className="media-content">
                <h1 className="text-center text-lg-start"><span>Hello, my name is</span> Francisco Oro </h1>
                <p>I am a Full-Stack Developer and aspiring Software Architect residing in Mexico. I love C#, Typescript, Angular, Django, ASP.NET Core and Cybersecurity!
                  <div></div>
                  When I'm not crafting code, you will find me crooning melodies, bonding with my furry companion, or chasing adrenaline on four wheels, life beyond code is equally exhilarating!</p>

                <div className="text-center text-md-center d-flex flex-row justify-content-around text-lg-start">
                  <HashLink to="/#portfolio">
                    <ButtonOutline text={"My Portfolio"} icon={<CodeSquare/>} />
                  </HashLink>

                  <HashLink to="/#portfolio">
                    <ButtonOutline text={"My Resume"} icon={<FilePerson/>}/>
                  </HashLink>
                
                  { (showEaster360)
                      ? (<p onClick={ handlEeaster360Id }
                          className="icon-smaller easter-egg-2" >✌🏽</p>)
                      : (null)
                  }
                </div>
              </div>        
            </Col>          
          </Row>
        </Container>      
      </div>
    </main>
  );
}
