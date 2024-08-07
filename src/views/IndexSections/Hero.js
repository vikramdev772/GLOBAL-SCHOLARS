/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import "../../styles/Hero.css";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import Earth from "components/Earth";
import Globe from "components/Globe";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    
                      <div className="d-flex flex-row justify-content-center">
                        {/* <img
                        alt="..."
                        className="img-fluid"
                        src={require("images/globe.png")}
                        style={{ width: "160px" }}
                      /> */}
                        {/* <img
                        alt="..."
                        className="img-fluid"
                        src={require("images/education.png")}
                        style={{ width: "150px" }}
                      /> */}

                        {/* <Earth /> */}
                        <Globe />
                      </div>
                    
                    <p className="lead text-white">
                      Expert Guidance for Your International Education Journey
                    </p>
                    <div className="btn-wrapper mt-5">
                      
                      <button className="gs">Get started</button>
                    </div>
                    <div className="mt-5">
                      
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
