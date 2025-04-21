import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import style from "./autoPlayProgress.module.css";
import jsonData from "../../../json/data.json";
import { useNavigate } from "react-router-dom";

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

export default function Autoplayprogress() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [randomCourses, setRandomCourses] = useState<typeof jsonData>([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 968);
  const navigate = useNavigate();
  const handleNavigate = (id: number) => {
    navigate(`/detail-info/${id}`);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setRandomCourses(shuffleArray(jsonData).slice(0, 4));
  }, []);
 
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 968);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const groupedData =
    randomCourses.length === 4
      ? [
          [randomCourses[0], randomCourses[1]],
          [randomCourses[2], randomCourses[3]],
        ]
      : [];

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
        {randomCourses.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={style.slideContent} onClick={() => handleNavigate(item.id)}>
              <img src={item.image} alt={item.name} className={style.slideImage} />
              <div className={style.slideTextBox}>
                <h2 className={style.slideTitle}>{item.name}</h2>
                <p className={style.slideSubtitle}>{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={style.slideContentBox}>
        {isMobile && groupedData.length > 0
          ? groupedData[Math.floor(activeIndex / 2)].map((item, index) => (
              <div
                className={`${style.slideTextBoxs} ${
                  activeIndex % 2 === index ? style.activeSlide : ""
                }`}
                key={index}
              >
                <h2 className={style.slideTitles}>{item.name}</h2>
                <p className={style.slideContents}>{item.description}</p>
                <p className={`${style.slideId} ${activeIndex % 2 === index ? style.activeId : ""}`}>
                  {item.price}-AZN
                </p>
              </div>
            ))
          : randomCourses.map((item, index) => (
              <div
                className={`${style.slideTextBoxs} ${
                  activeIndex === index ? style.activeSlide : ""
                }`}
                key={index}
                onClick={() => handleNavigate(item.id)}
              >
                <h2 className={style.slideTitles}>{item.name}</h2>
                <p className={style.slideContents}>{item.description}</p>
                <p className={`${style.slideId} ${activeIndex === index ? style.activeId : ""}`}>
                  {item.price}-AZN
                </p>
              </div>
            ))}
      </div>
    </div>
  );
}
