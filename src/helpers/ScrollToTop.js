import { useEffect } from "react";
import { useLocation } from "react-router";
import { useGlobalContext } from "../context";

const ScrollToTop = (props) => {
  const { setShowLinks } = useGlobalContext();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    setShowLinks(false);
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
