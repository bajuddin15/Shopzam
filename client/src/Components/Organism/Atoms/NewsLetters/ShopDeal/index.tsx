import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./index.scss";

interface IProps {}

const ShopDeal: React.FC<IProps> = () => {
  return (
    <div className="deal-compo">
      <Container fluid>
        <Row>
          <Col md={6}>
            <div className="deal-img">
              <img
                src="https://demo.fieldthemes.com/kayak/76-large_default/brown-bear-printed-sweater.jpg"
                data-full-size-image-url="https://demo.fieldthemes.com/kayak/76-large_default/brown-bear-printed-sweater.jpg"
                alt=""
              />
            </div>
          </Col>
          <Col
            md={6}
            className="deal-infos d-flex align-items-center justify-content-center"
          >
            <div className="deal-info">
              <h3>DEAL OF THE WEEK</h3>
              <div></div>
              <div>Sale is only in a week up to 50% off</div>
              <div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
              </div>
              <div className="btn-show-more">
                <button>Shop Now</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ShopDeal;
