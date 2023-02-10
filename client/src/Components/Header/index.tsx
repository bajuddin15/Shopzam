import React, { useState, useEffect } from "react";
import { BiSearch, BiMenu } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

import useData from "./data";

import "./index.scss";

interface IProps {}
interface IPropsForMobile {
  setToggle: any;
}

interface IState {
  toggle: boolean;
}

const Header: React.FC<IProps> = ({}) => {
  const { state, setToggle } = useData();
  const { toggle, windowSize, scrolled } = state;

  let isResponsive = windowSize[0] < 900;

  return (
    <>
      {!toggle && (
        <div className={`header ${scrolled ? "sticky-header" : ""}`}>
          <div className="headerContainer">
            <div className="left">
              <div className="app-logo">
                <p>KAYAK</p>
              </div>
            </div>
            <div className="right">
              {!isResponsive && (
                <ul>
                  <li>Home</li>
                  <li>Shop</li>
                  <li>Services</li>
                  <li>Contact</li>
                  <li>Blog</li>
                  <li>About</li>
                </ul>
              )}
              <div className="icons">
                {!isResponsive && (
                  <div className="icon">
                    <BiSearch size={24} />
                  </div>
                )}
                {isResponsive && (
                  <div className="icon" onClick={() => setToggle(true)}>
                    <BiMenu size={24} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* responsive navbar */}
      {toggle && <NavbarForMobile setToggle={setToggle} />}
    </>
  );
};

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

export default Header;
