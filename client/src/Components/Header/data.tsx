import * as React from "react";

interface IState {
  toggle: boolean;
  showMenuClick: boolean;
  activeLink: any;
  scrolled: boolean;
}

const useData = () => {
  const [toggle, setToggle] = React.useState<IState["toggle"]>(false);

  const [activeLink, setActiveLink] =
    React.useState<IState["activeLink"]>(null);
  const [scrolled, setScrolled] = React.useState<IState["scrolled"]>(false);
  const [showMenuClick, setShowMenuClick] =
    React.useState<IState["showMenuClick"]>(false);

  const navLinks = [
    { id: 1, label: "Home", href: "#" },
    { id: 2, label: "Shop", href: "#" },
    { id: 3, label: "Services", href: "#" },
    { id: 4, label: "Contact", href: "#" },
    { id: 5, label: "Blog", href: "#" },
    { id: 6, label: "About", href: "#" },
  ];

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
    activeLink,
    scrolled,
    showMenuClick,
  };

  return {
    state,
    navLinks,
    setToggle,
    setActiveLink,
    setShowMenuClick,
  };
};

export default useData;
