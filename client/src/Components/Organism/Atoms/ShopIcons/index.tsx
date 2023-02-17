import React from "react";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "./index.scss";

interface IProps {}

const ShopCartIcon: React.FC<IProps> = () => {
  return (
    <div>
      <div className="icon shop-icon">
        <AiOutlineShoppingCart size={24} />
        <span>4</span>
      </div>
    </div>
  );
};
const ShopWishlistIcon: React.FC<IProps> = () => {
  return (
    <div>
      <div className="icon shop-icon">
        <AiOutlineHeart size={24} />
        <span>8</span>
      </div>
    </div>
  );
};
export { ShopCartIcon, ShopWishlistIcon };
export { ShopCartIcon };
