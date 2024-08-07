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
/*eslint-disable*/
import React from "react";
import university from "../../images/university.png"
import "../../styles/University.css";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

class Download extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg">
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">
                  Visa Guidance
                  {/* <span className="text-success">
                    Design System for Bootstrap 4?
                  </span> */}
                </h2>
                <p className="lead">
                  Many students fail to obtain the visa even after getting the
                  admission card from the foreign university. Our experts team
                  identify the shortfalls on Visa rejections and train the
                  student to overcome the Visa interview and filling the online
                  Visa application, and preparing other documents to fulfil the
                  Visa requirements.
                </p>
                <div className="btn-wrapper">
             
                </div>
                <div>
                <img src={university} className="university-img" alt="" style={{ width: "350px", borderRadius: "16px" }} />

                </div> 
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Download;
