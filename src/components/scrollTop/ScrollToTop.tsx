import { useState, useEffect } from "react";
import style from "./scrollToTop.module.css";
import { FaArrowUp } from "react-icons/fa6";

const CircleComponent = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (scrollTop / maxScroll) * 100;  

      setScrollPercentage(percentage); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const circleLength = 314; 

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <div className={style.circleWrapper} onClick={scrollToTop}>
      <svg
        className={style.circle}
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Dış çember */}
        <circle
          cx="60"
          cy="60"
          r="50"
          fill="none"
          stroke="#ccc"
          strokeWidth="6"  // Border kalınlığı
        />
        {/* İç çember (scroll'a göre dolma/azalma) */}
        <circle
          cx="60"
          cy="60"
          r="50"
          fill="none"
          stroke="#2df288"
          strokeWidth="6"  // Border kalınlığı
          strokeDasharray={circleLength}  // Çevre uzunluğu
          strokeDashoffset={(circleLength * scrollPercentage) / 100}  // Kaydırma ile dolacak offset
          style={{ transition: "stroke-dashoffset 0.2s ease" }}
        />
      </svg>
      <div
        className={style.arrowIcon}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "24px", 
          color: "#2df288", 
        }}
      >
        <FaArrowUp />
      </div>
    </div>
  );
};

export default CircleComponent;