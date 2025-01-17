import { Container, Row, Col } from "../../utlis/Bootstrap.jsx";
import skillDev from "../../data/skill-dev.json";
import skillCreative from "../../data/skill-creative.json";
import skillPm from "../../data/skill-pm.json";
import Panel from "./Panel.jsx";
import EasterEgg from "./EasterEgg.jsx";


export default function Skill() {

  return (
    <section>
      <Container fluid id="skills" className="p-5">        
        <Row>
          <Col className="text-center">
            <h2 className="text-white">Particular Set of Skills
              <span><q>Skills i have acquired during my career</q></span></h2>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={3} className="text-center">
            <h2 className="text-white">Creative</h2>
            {skillCreative.map(
              (element) =>  
                (element.name === "figma") 
                  ? <EasterEgg 
                      key={element.id} 
                      name={element.name} />
                  : <Panel 
                      key={element.id} 
                      name={element.name} />
            )}
          </Col>

          <Col md={5} className="text-center">
            <h2 className="text-white">Dev</h2>
            {skillDev.map(
              (element) => (
                <Panel                   
                  key={element.id} 
                  name={element.name} />
              )
            )}
          </Col>

          <Col md={3} className="text-center">
            <h2 className="text-white">PM</h2>
            {skillPm.map(
              (element) => (
                <Panel 
                  key={element.id} 
                  name={element.name} />
              )
            )}
          </Col>          
        </Row>
      </Container>
    </section>
  );
}
