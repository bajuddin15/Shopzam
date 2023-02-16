import React from "react";
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
export { ShopCartIcon };
