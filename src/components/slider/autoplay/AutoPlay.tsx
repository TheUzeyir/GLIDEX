import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./autoPlay.module.css";

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <div className={style.slidercontainer}>
      <Slider {...settings}>
        <div className={style.slider}>
          <h3>Lorem ipsum dolor sit amet.</h3>
        </div>
        <div className={style.slider}>
          <h3>Lorem ipsum dolor sit amet.</h3>
        </div>
        <div className={style.slider}>
          <h3>Lorem ipsum dolor sit amet.</h3>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
