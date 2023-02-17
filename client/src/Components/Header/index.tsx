import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiSearch, BiMenu } from "react-icons/bi";

import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { AiOutlineShoppingCart } from "react-icons/ai";

import useData from "./data";

import "./index.scss";
import NavbarForMobile from "./Components/NavbarForMobile";
import { ShopCartIcon } from "../Organism/Atoms/ShopIcons";
import MenuClick from "./Components/MenuClick";
import HeaderForMobile from "./Components/HeaderForMobile";

interface IProps {}

interface IState {
  toggle: boolean;
}

const HeaderForDesktop: React.FC<IProps> = ({}) => {
  const { state, navLinks, setToggle, setActiveLink, setShowMenuClick } =
    useData();
  const { toggle, activeLink, scrolled, showMenuClick } = state;
const Header: React.FC<IProps> = ({}) => {
  const { state, navLinks, setToggle, setActiveLink, setShowMenuClick } =
    useData();
  const {
    toggle,
    isResponsive,
    activeLink,
    windowSize,
    scrolled,
    showMenuClick,
  } = state;

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
              <ul>
                {navLinks.map((link) => (
                  <Link
                    to="/"
                    key={link.id}
                    className={
                      link.id === activeLink
                        ? "active nav-link"
                        : "inactive nav-link"
                    }
                    onClick={(linkId) =>
                      setActiveLink(linkId === activeLink ? null : linkId)
                    }
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
              {!isResponsive && (
                <ul>
                  {navLinks.map((link) => (
                    <Link
                      to="/"
                      key={link.id}
                      className={
                        link.id === activeLink
                          ? "active nav-link"
                          : "inactive nav-link"
                      }
                      onClick={(linkId) =>
                        setActiveLink(linkId === activeLink ? null : linkId)
                      }
                    >
                      {link.label}
                    </Link>
                  ))}
                </ul>
              )}
              <div className="icons">
                <div style={{ display: "flex", gap: "50px" }}>
                  <div className="icon">
                    <BiSearch size={24} />
                  </div>
                  <div className="icon">
                    <ShopCartIcon />
                  </div>
                  <div className="icon">
                    <OverlayTrigger
                      trigger="click"
                      key="bottom"
                      placement="bottom"
                      overlay={
                        <Popover
                          id={`popover-positioned-bottom`}
                          style={{
                            zIndex: "99999",
                            marginTop: "30px",
                            borderTop: "2px solid #6d7e87",
                          }}
                        >
                          {/* <Popover.Header as="h3">{`Popover bottom`}</Popover.Header> */}
                          <Popover.Body>
                            <MenuClick />
                          </Popover.Body>
                        </Popover>
                      }
                    >
                      <span>
                        <BiMenu size={24} />
                      </span>
                    </OverlayTrigger>
                  </div>
                  </div>
                  <div
                    className="icon"
                    onClick={() => setShowMenuClick(!showMenuClick)}
                  >
                    <BiMenu size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* showmenuclick
      {showMenuClick && <MenuClick />} */}
      {/* showmenuclick */}
      {showMenuClick && <MenuClick />}

      {/* responsive navbar */}
      {toggle && <NavbarForMobile setToggle={setToggle} />}
    </>
  );
};

const Header: React.FC<IProps> = ({}) => {
  const { state, navLinks, setToggle, setActiveLink, setShowMenuClick } =
    useData();

  const { toggle, activeLink, scrolled, showMenuClick } = state;

  return (
    <>
      {!toggle && (
        <>
          <div className="header-for-desktop">
            <HeaderForDesktop />
          </div>
          <div className="header-for-mobile">
            <HeaderForMobile title="KAYAK" setToggle={setToggle} />
          </div>
        </>
      )}

      {/* responsive navbar */}
      {toggle && <NavbarForMobile setToggle={setToggle} />}
    </>
  );
};

export default Header;
