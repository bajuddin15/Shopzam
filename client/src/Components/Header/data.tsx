import * as React from "react";

interface IState {
  toggle: boolean;
  isResponsive: boolean;
  showMenuClick: boolean;
  activeLink: any;
  windowSize: any;
  scrolled: boolean;
}

const useData = () => {
  const [toggle, setToggle] = React.useState<IState["toggle"]>(false);
  const [isResponsive, setIsResponsive] =
    React.useState<IState["isResponsive"]>(false);
  const [activeLink, setActiveLink] =
    React.useState<IState["activeLink"]>(null);
  const [scrolled, setScrolled] = React.useState<IState["scrolled"]>(false);
  const [showMenuClick, setShowMenuClick] =
    React.useState<IState["showMenuClick"]>(false);
  const [windowSize, setWindowSize] = React.useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const navLinks = [
    { id: 1, label: "Home", href: "#" },
    { id: 2, label: "Shop", href: "#" },
    { id: 3, label: "Services", href: "#" },
    { id: 4, label: "Contact", href: "#" },
    { id: 5, label: "Blog", href: "#" },
    { id: 6, label: "About", href: "#" },
  ];

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);
    const wSize = windowSize[0];

    if (wSize >= 900) {
      setToggle(false);
      setIsResponsive(false);
    } else {
      setIsResponsive(true);
    }
    console.log("isres", isResponsive);
    console.log("istog", toggle);
    console.log("iswin", windowSize[0]);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const state: IState = {
    toggle,
    isResponsive,
    activeLink,
    windowSize,
    scrolled,
    showMenuClick,
  };

  return {
    state,
    navLinks,
    setIsResponsive,
    setToggle,
    setActiveLink,
    setShowMenuClick,
  };
};

export default useData;
