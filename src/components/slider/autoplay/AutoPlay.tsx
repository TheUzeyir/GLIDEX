import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./autoPlay.module.css";

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1, // Her seferinde 1 slayt göster
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    variableWidth: true, // Metne göre genişlik ayarla
  };

  return (
    <div className={style.slidercontainer}>
      <Slider {...settings}>
        <div className={style.slider}>
          <h3 className={style.slider_text}>* Explore green, black variant</h3>
        </div>
        <div className={style.slider}>
          <h3 className={style.slider_text}>* Go eco-friendly, good mileage</h3>
        </div>
        <div className={style.slider}>
          <h3 className={style.slider_text}>* Aesthetically enhanced design, user-friendly module</h3>
        </div>
        <div className={style.slider}>
          <h3 className={style.slider_text}>* Disc brake, Smooth cushion seat</h3>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
