import React from "react";
import backToTop from "../assets/images/backtotop.png";
const BackToTop = () => {
  const [position, setPosition] = React.useState({ top: 0, left: 0 });
  React.useEffect(() => {
    window.scroll({
      top: position.top,
      left: position.left,
      behavior: "smooth",
    });
  });
  const scrollTop = React.useRef();
  React.useEffect(() => {
    window.addEventListener("scroll", (e) => {
      window.scrollY > 1000
        ? (scrollTop.current.style.display = "inline-block")
        : (scrollTop.current.style.display = "none");
    });
  });
  return (
    <div
      onClick={() =>
        setPosition({ ...position, position: { top: 0, left: 0 } })
      }
      className="setbacktotop transition-300 d_none"
      ref={scrollTop}
    >
      <img src={backToTop} alt="backToTop" width={24} height={24} />
    </div>
  );
};

export default BackToTop;
