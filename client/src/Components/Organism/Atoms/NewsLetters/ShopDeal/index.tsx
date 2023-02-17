import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./index.scss";

interface IProps {}

const ShopDeal: React.FC<IProps> = () => {
  return (
    <div className="deal-compo">
      <div className="deal-img">
        <img
          src="https://demo.fieldthemes.com/kayak/76-large_default/brown-bear-printed-sweater.jpg"
          data-full-size-image-url="https://demo.fieldthemes.com/kayak/76-large_default/brown-bear-printed-sweater.jpg"
          alt=""
        />
      </div>

      <div className="deal-infos">
        <div className="deal-info">
          <h3>DEAL OF THE WEEK</h3>
          <div className="deal-underline"></div>
          <span>Sale is only in a week up to 50% off</span>
          <div className="deal-clock">
            <div className="deal-cls">
              <div className="deal-cl">123</div>
              <span>Days</span>
            </div>
            <div className="deal-cls">
              <div className="deal-cl">123</div>
              <span>Hours</span>
            </div>
            <div className="deal-cls">
              <div className="deal-cl">123</div>
              <span>Mins</span>
            </div>
            <div className="deal-cls">
              <div className="deal-cl">123</div>
              <span>Sec</span>
            </div>
          </div>
          <div className="btn-show-now">
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShopDeal;
