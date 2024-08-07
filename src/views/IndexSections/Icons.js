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

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Icons extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg section-nucleo-icons pb-250">
          <Container>
            <Row className="justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">Student counseling</h2>
                <p className="lead">
                  Up on evaluating the student requirements, we provide the best
                  suited information on the University's, Country, Visa
                  processing, Tuition fee, merit sponsorships, and any other
                  important information to keep the Student future ready.
                </p>
              </Col>
            </Row>
            <div className="blur--hover">
              <div className="d-none d-md-flex flex-wrap justify-content-between mt-5 on-screen">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/8224/8224757.png"
                  alt="Icon 1"
                  className="img-fluid mb-3 mx-2"
                  style={{ width: "80px" }}
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/11512/11512950.png"
                  alt="Icon 2"
                  className="img-fluid mb-3 mx-2"
                  style={{ width: "80px" }}
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/11069/11069078.png"
                  alt="Icon 3"
                  className="img-fluid mb-3 mx-2"
                  style={{ width: "80px" }}
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/10001/10001291.png"
                  alt="Icon 4"
                  className="img-fluid mb-3 mx-2"
                  style={{ width: "80px" }}
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/11069/11069063.png"
                  alt="Icon 5"
                  className="img-fluid mb-3 mx-2"
                  style={{ width: "80px" }}
                />
              </div>

              <span className="blur-hidden h5 text-success">
              Comprehensive study abroad support.
              </span>
            </div>
          </Container>
        </section>
      </>
    );
  }
}

export default Icons;
