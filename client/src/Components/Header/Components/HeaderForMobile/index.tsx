import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { BiMenu, BiSearch } from "react-icons/bi";
import {
  ShopCartIcon,
  ShopWishlistIcon,
} from "../../../Organism/Atoms/ShopIcons";

import "./index.scss";

interface IProps {
  title: string;
}

const HeaderForMobile: React.FC<IProps> = ({ title }) => {
  return (
    <div className="main-header">
      <div className="main-header-title">
        <p>{title}</p>
      </div>
      <div className="main-header-icons">
        <div className="icon">
          <BiMenu size={24} />
        </div>
        <div className="icon">
          <ShopCartIcon />
        </div>
        <div className="icon">
          <ShopWishlistIcon />
        </div>
        <div className="icon">
          <BiSearch size={24} />
        </div>
      </div>
    </div>
  );
};
export default HeaderForMobile;
