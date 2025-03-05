import { useEffect, useRef, useState } from "react";
import { animate } from "motion";
import style from "./autoIncreaseNumber.module.css";

const AutoIncreaseNumber = () => {
  const counters = [
    { id: 1, amount: 60, text: "mph", duration: 2, desc: "4-Speed Mode" },
    { id: 2, amount: 120, text: "mi", duration: 2, desc: "Km Range" },
    { id: 3, amount: 440, text: "lbs", duration: 2, desc: "Frame Weight" },
    { id: 4, amount: 24, text: "kv", duration: 2, desc: "Per Charge" },
  ];

  const containerRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartAnimation(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={style.mainContainer}>
      <div className={style.counterContainer}>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            amount={counter.amount}
            text={counter.text}
            duration={counter.duration}
            desc={counter.desc}
            start={startAnimation}
          />
        ))}
      </div>
      <p className={style.footerText}>
        Are you ready to take your ride to new heights? Say goodbye to noisy
        engines. Explore the future of transportation with our awe-inspiring
        electric vehicle
      </p>
      <button className={style.mainContainer_btn}>View shop</button>
      <p className={style.mainContainer_line}></p>
    </div>
  );
};

const Counter = ({ amount, duration, text, desc, start }: 
  { amount: number; duration: number; text: string; desc: string; start: boolean }) => {
  
  const countRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (start) {
      animate(0, amount, {
        duration: duration,
        ease: "circOut",
        onUpdate: (latest) => {
          if (countRef.current) {
            countRef.current.textContent = Math.round(latest).toString();
          }
        },
      });
    }
  }, [amount, duration, start]);

  return (
    <div className={style.counterItem}>
      <div className={style.counterItemBox}>
        <p ref={countRef} className={style.nonwigglycountups}>0</p>
        <span className={style.countertext}>{text}</span>
      </div>
      <p className={style.counterItem_title}>{desc}</p>
    </div>
  );
};


export default AutoIncreaseNumber;
