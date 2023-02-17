import React from "react";
import { RxCross2 } from "react-icons/rx";

interface IPropsForMobile {
  setToggle: any;
}

const NavbarForMobile: React.FC<IPropsForMobile> = ({ setToggle }) => {
  return (
    <>
      <div className="navbar-mobile slide-header">
        <div className="mobile-header">
          <div className="app-logo">
            <p>KAYAK</p>
          </div>
          <div className="icon cross-icon" onClick={() => setToggle(false)}>
            <RxCross2 size={24} />
          </div>
        </div>

        <div className="mobile-body">
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarForMobile;
