import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import style from "./scrollToTop.module.css";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [borderWidth, setBorderWidth] = useState(5); // Starting border width

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollY = window.scrollY;
      // Set the button visibility based on scroll position
      if (scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      // Dynamically increase border size based on scroll position
      const newBorderWidth = Math.min(15, (scrollY / window.innerHeight) * 15);
      setBorderWidth(newBorderWidth); // Update the border size
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${style.scrollToTop} ${visible ? style.show : ""}`}
      onClick={scrollToTop}
      style={{
        borderWidth: `${borderWidth}px`, // Dynamically change the border width
      }}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
