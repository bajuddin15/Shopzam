import React from "react";
import { Container, Row } from "reactstrap";

import "./index.scss";

interface IProps {}

const TabCategories: React.FC<IProps> = () => {
  return (
    <Container>
      <Row>
        <div className="tab-cats">
          <div className="tab-cat">
            <span>Shop</span>
          </div>
          <div className="tab-cat">
            <span>Services</span>
          </div>
          <div className="tab-cat">
            <span>Lookbook</span>
          </div>
          <div className="tab-cat">
            <span>Bakeware</span>
          </div>
          <div className="tab-cat">
            <span>Shoes</span>
          </div>
          <div className="tab-cat">
            <span>Assesory</span>
          </div>
        </div>
      </Row>
    </Container>
  );
};
export default TabCategories;
