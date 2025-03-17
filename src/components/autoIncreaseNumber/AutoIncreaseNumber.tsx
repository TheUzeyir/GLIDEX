import { useEffect, useRef, useState } from "react";
import { animate } from "motion";
import style from "./autoIncreaseNumber.module.css";

const AutoIncreaseNumber = () => {
  const counters = [
    { id: 1, amount: 20, text: "Mövzular", desc: "Mövzu sayı", duration: 2 },
    { id: 2, amount: 120, text: "Şagird", desc: "Şagird sayı", duration: 2 },
    { id: 3, amount: 40, text: " Təlimatçı", desc: "Təlimatçı sayı", duration: 2 },
    { id: 4, amount: 24, text: " Təlimçi", desc: "Təlimçi sayı", duration: 2 },
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
            desc={counter.desc}
            duration={counter.duration}
            start={startAnimation}
          />
        ))}
      </div>
      <p className={style.footerText}>
        Biz SkillUp IT Academy-də tələbələrin təkcə İT fənləri və ya proqramlaşdırma dilləri üzrə təlim keçmələrini,
       təhsil almalarını deyil, həm də bu rəqabətli və dinamik dünyada bilikləri araşdırmaq və yeni imkanlar,
        innovasiyalar yarada bilmələri üçün bacarıq əldə etmələrini təmin edirik.
      </p>
      <button className={style.mainContainer_btn}>Kurslara Bax</button>
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
            countRef.current.textContent = Math.round(latest).toString() + "+";
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