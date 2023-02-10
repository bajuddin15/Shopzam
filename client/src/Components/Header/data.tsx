import * as React from "react";

interface IState {
  toggle: boolean;
  windowSize: any;
  scrolled: boolean;
}

const useData = () => {
  const [toggle, setToggle] = React.useState<IState["toggle"]>(false);
  const [scrolled, setScrolled] = React.useState<IState["scrolled"]>(false);
  const [windowSize, setWindowSize] = React.useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    if (windowSize[0] >= 900) {
      setToggle(false);
    }

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

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
    windowSize,
    scrolled,
  };
  console.log("toggle", toggle);

  return {
    state,
    setToggle,
  };
};

export default useData;
