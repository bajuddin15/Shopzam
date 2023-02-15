import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";

import "./index.scss";

interface IProps {}

const MenuClick: React.FC<IProps> = () => {
  return (
    <div className="menu-click">
      <div className="menu-items">
        <div className="menu-item">
          <FiLogIn size={24} />
          Sign In
        </div>
        <div className="menu-item">
          <FaUserPlus size={24} />
          Create an account
        </div>
      </div>
    </div>
  );
};
export default MenuClick;
