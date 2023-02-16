import { Container, Row, Col } from "reactstrap";
import { FaFacebookF, FaLinkedinIn, FaPinterest } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

import "./index.scss";

interface IProps {}

const Footer: React.FC<IProps> = ({}) => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md={4} className="d-flex justify-content-center">
            <div className="footer-section-1">
              <div className="footer-section-head">About Us</div>
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "grey",
                  marginTop: "15px",
                }}
              ></div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna nibh, viverra non
                </p>

                <div className="footer--icons">
                  <div className="footer-icon">
                    <FaFacebookF />
                  </div>
                  <div className="footer-icon">
                    <AiOutlineTwitter />
                  </div>
                  <div className="footer-icon">
                    <FaPinterest />
                  </div>
                  <div className="footer-icon">
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <div className="footer-section-2">
              <div className="footer-section-head">Information</div>
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "grey",
                  marginTop: "15px",
                }}
              ></div>
              <ul>
                <li>Shipping and Policies</li>
                <li>Delivery</li>
                <li>About Us</li>
                <li>My Account</li>
                <li>Asked Question</li>
                <li>Browse Products</li>
              </ul>
            </div>
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <div className="footer-section-3">
              <div className="footer-section-head">Contact Us</div>
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "grey",
                  marginTop: "15px",
                }}
              ></div>
              <div className="footer-address">
                <span>
                  <b style={{ color: "white" }}>ADD:</b> 123 Suspendis,
                  Sollicitudin District, Accums
                </span>
                <span>Fringilla</span>
                <span>
                  <b style={{ color: "white" }}>TEL:</b> (+84) 0123456789
                </span>
                <span>
                  <b style={{ color: "white" }}>MAIL:</b> demo@fieldthemes.com
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
