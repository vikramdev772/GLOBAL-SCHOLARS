import React from "react";
import "../../styles/Aborad.css";
// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("assets/img/theme/img-1-1200x1000.jpg"),
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: require("assets/img/theme/img-2-1200x1000.jpg"),
    altText: "",
    caption: "",
    header: "",
  },
];

class Abroad extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg section-nucleo-icons pb-250">
          <Container>
            <Row className="justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3 text-primary">Why Study Abroad</h2>
                <p className="lead text-primary mt-4">
                  Studying abroad helps you to learn new languages, appreciate
                  other cultures, overcome challenges of living in another
                  country, and gain a greater understanding of the world.
                </p>
                <div className="btn-wrapper"></div>
              </Col>
            </Row>
            <div className="blur--hover mt-5">
              {/* <a href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/icons?ref=adsr-landing-page"> */}
              <div className="d-flex flex-wrap justify-content-center mt-5 on-screen">
                <img
                  src="https://4kwallpapers.com/images/walls/thumbs_3t/13554.jpg"
                  alt=""
                  className="img-fluid mx-3 mb-3"
                  style={{ maxWidth: "400px" }}
                />
                <img
                  src="https://4kwallpapers.com/images/walls/thumbs/16563.jpg"
                  alt=""
                  className="img-fluid mx-3 mb-3"
                  style={{ maxWidth: "400px" }}
                />
                <img
                  src="https://4kwallpapers.com/images/walls/thumbs/13552.jpg"
                  alt=""
                  className="img-fluid mx-3 mb-3"
                  style={{ maxWidth: "400px" }}
                />
                <img
                  src="https://4kwallpapers.com/images/walls/thumbs/13120.jpg"
                  alt=""
                  className="img-fluid mx-3 mb-3"
                  style={{ maxWidth: "400px" }}
                />
              </div>

              <span
                className="blur-hidden h4 text-center d-block mt-3"
                style={{ color: "black", fontWeight: "bold" }}
              >
                Expand your worldview to highlight the benefits of studying
                abroad.
              </span>
            </div>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-primary"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </section>
      </>
    );
  }
}

export default Abroad;

