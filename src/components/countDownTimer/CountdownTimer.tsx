import { useState, useEffect } from 'react';
import style from "./countDownTimer.module.css";

const CountdownTimer = () => {
  const initialTime = 48 * 60 * 60; 
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
          <p className={style.timerCard_box_card_title}>Tezliklə götürün! Təklif başa çatır</p>
          <p className={style.timerCard_box_card_text}>Ən sərfəli qiymətə IT kursunuzu seçərək gələcəyinizi qurun</p>
        </div>
        <div className={style.timerCard_box_card_timer}>
          <div className={style.timerCard_box_card_timer_item}>
            <p className={style.timerCard_box_card_timer_number}>{days.toString().padStart(2, '0')}</p>
            <p className={style.timerCard_box_card_timer_label}>Gün</p>
          </div>
          <div className={style.timerCard_box_card_timer_item}>
            <p className={style.timerCard_box_card_timer_number}>{hours.toString().padStart(2, '0')}</p>
            <p className={style.timerCard_box_card_timer_label}>Saat</p>
          </div>
          <div className={style.timerCard_box_card_timer_item}>
            <p className={style.timerCard_box_card_timer_number}>{minutes.toString().padStart(2, '0')}</p>
            <p className={style.timerCard_box_card_timer_label}>Dəqiqə</p>
          </div>
          <div className={style.timerCard_box_card_timer_item}>
            <p className={style.timerCard_box_card_timer_number}>{seconds.toString().padStart(2, '0')}</p>
            <p className={style.timerCard_box_card_timer_label}>Saniyə</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;