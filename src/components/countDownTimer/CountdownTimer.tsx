import { useState, useEffect } from 'react';
import style from "./countDownTimer.module.css";

const CountdownTimer = () => {
  const initialTime = 48 * 60 * 60; // 48 saat
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="container">
      <div className={style.timerCard_box}>
        <div className={style.timerCard_box_textCard}>
          <p className={style.timerCard_box_card_title}>Grab it soon! Offer ends</p>
          <p className={style.timerCard_box_card_text}>Charge up your future with an electric vehicle at the best affordable price</p>
        </div>
        <div className={style.timerCard_box_card_timer}>
          <div className={style.timerCard_box_card_timer_item}>
            <p className={style.timerCard_box_card_timer_number}>{days.toString().padStart(2, '0')}</p>
            <p className={style.timerCard_box_card_timer_label}>Days</p>
          </div>
          <div className={style.timerCard_box_card_timer_item}>
            <p className={style.timerCard_box_card_timer_number}>{hours.toString().padStart(2, '0')}</p>
            <p className={style.timerCard_box_card_timer_label}>Hours</p>
          </div>
          <div className={style.timerCard_box_card_timer_item}>
            <p className={style.timerCard_box_card_timer_number}>{minutes.toString().padStart(2, '0')}</p>
            <p className={style.timerCard_box_card_timer_label}>Minutes</p>
          </div>
          <div className={style.timerCard_box_card_timer_item}>
            <p className={style.timerCard_box_card_timer_number}>{seconds.toString().padStart(2, '0')}</p>
            <p className={style.timerCard_box_card_timer_label}>Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;