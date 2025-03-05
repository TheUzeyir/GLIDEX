import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import style from "./autoPlayProgress.module.css";

export default function Autoplayprogress() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 968);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 968);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = [
    {
      img: "https://greenshift-road.myshopify.com/cdn/shop/files/IMG_Sliders_3_Video.jpg?v=1697882087&width=2000",
      title: "Swift Recharge",
      subtitle: "3-Hour Rapid Charging",
      id: "01",
      boxText: "Anti theft measures",
      desc: "Our Kick Back Scooter prioritizes security with GPS and remote locking"
    },
    {
      img: "https://greenshift-road.myshopify.com/cdn/shop/files/IMG_Sliders_2.jpg?v=1697881948&width=2000",
      title: "Ultra High Performance",
      subtitle: "0-40 KMPH İn 6.8 SEC**",
      id: "02",
      boxText: "72 VOLT SCRAMBLER",
      desc: "The 72 VOLT SCRAMBLER redefines power with 72V dominance"
    },
    {
      img: "https://greenshift-road.myshopify.com/cdn/shop/files/Mask_group_1.png?v=1695100646&width=2000",
      title: "Power Unleased",
      subtitle: "72V Dominance Astounding Power",
      id: "03",
      boxText: "3 hours fast charge",
      desc: "Our Kick Back Scooter offers a swift 3-hour charge for rapid adventures"
    },
    {
      img: "https://greenshift-road.myshopify.com/cdn/shop/files/IMG_Sliders_4.jpg?v=1697881949&width=2000",
      title: "Advanted Security",
      subtitle: "Secure with Remote Locking",
      id: "04",
      boxText: "26 MPH speed",
      desc: "With a maximum velocity of 26 MPH, this smooth and strong bike will make them hurdle through the roads quickly"
    },
  ];

  const groupedData = [
    [data[0], data[1]], // 1-ci və 2-ci element
    [data[2], data[3]], // 3-cü və 4-cü element
  ];

  return (
    <div className={style.autoPlayProgress}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect="fade"
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
        pagination={false}
        navigation={false}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={style.slideContent}>
              <img src={item.img} alt={item.title} className={style.slideImage} />
              <div className={style.slideTextBox}>
                <h2 className={style.slideTitle}>{item.title}</h2>
                <p className={style.slideSubtitle}>{item.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={style.slideContentBox}>
        {isMobile
          ? groupedData[Math.floor(activeIndex / 2)].map((item, index) => (
              <div
                className={`${style.slideTextBoxs} ${
                  activeIndex % 2 === index ? style.activeSlide : ""
                }`}
                key={index}
              >
                <h2 className={style.slideTitles}>{item.boxText}</h2>
                <p className={style.slideContents}>{item.desc}</p>
                <p className={`${style.slideId} ${activeIndex % 2 === index ? style.activeId : ""}`}>
                  {item.id}
                </p>
              </div>
            ))
          : data.map((item, index) => (
              <div
                className={`${style.slideTextBoxs} ${
                  activeIndex === index ? style.activeSlide : ""
                }`}
                key={index}
              >
                <h2 className={style.slideTitles}>{item.boxText}</h2>
                <p className={style.slideContents}>{item.desc}</p>
                <p className={`${style.slideId} ${activeIndex === index ? style.activeId : ""}`}>
                  {item.id}
                </p>
              </div>
            ))}
      </div>
    </div>
  );
}