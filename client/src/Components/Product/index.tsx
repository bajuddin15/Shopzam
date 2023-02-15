import React from "react";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineShoppingCart,
  AiFillHeart,
  AiOutlineEye,
} from "react-icons/ai";

import { TfiReload } from "react-icons/tfi";

import "./index.scss";

interface IProps {}

const Product: React.FC<IProps> = () => {
  return (
    <div className="product">
      <div className="product-img">
        <img
          src="https://demo.fieldthemes.com/kayak/76-large_default/brown-bear-printed-sweater.jpg"
          data-full-size-image-url="https://demo.fieldthemes.com/kayak/76-large_default/brown-bear-printed-sweater.jpg"
          alt=""
        />

        <div className="product-badge">
          <div className="product-new-badge">New</div>
          <div className="product-sale-badge">Sale</div>
        </div>

        <div className="product-actions">
          <div className="product-action-icon">
            <AiOutlineShoppingCart size={22} />
          </div>
          <div className="product-action-icon">
            <AiFillHeart size={22} />
          </div>
          <div className="product-action-icon">
            <TfiReload size={22} />
          </div>
          <div className="product-action-icon">
            <AiOutlineEye size={22} />
          </div>
        </div>
      </div>
      <div className="product-info">
        <span className="product-name">Vestibulum auctor depibus</span>
        <div className="product-price">
          <span className="first-child">$28</span>
          <span className="second-child">$54</span>
        </div>

        <div className="product-rating">
          <AiFillStar size={18} color="orange" />
          <AiFillStar size={18} color="orange" />
          <AiFillStar size={18} color="orange" />
          <AiFillStar size={18} color="orange" />
          <AiOutlineStar size={18} />
        </div>
      </div>
    </div>
  );
};
export default Product;
