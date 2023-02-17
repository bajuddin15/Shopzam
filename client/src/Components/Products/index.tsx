import React from "react";
import { Container, Row, Col } from "reactstrap";
import TabCategories from "../Categories/TabCategories";
import Product from "../Product";

import "./index.scss";

interface IProps {
  title: string;
}

const Products: React.FC<IProps> = ({ title }) => {
  return (
    <Container>
      <Row className="products-header">
        <span className="p-main-header">{title}</span>
        <div className="p-cats">
          <TabCategories />
        </div>
      </Row>
      <Row>
        <Col lg={3} md={6} xs={12}>
          <Product />
        </Col>
        <Col lg={3} md={6} xs={12}>
          <Product />
        </Col>
        <Col lg={3} md={6} xs={12}>
          <Product />
        </Col>
        <Col lg={3} md={6} xs={12}>
          <Product />
        </Col>
      </Row>
      <Row>
        <div className="btn-show-more">
          <button>Show More</button>
        </div>
      </Row>
    </Container>
  );
};
export default Products;
