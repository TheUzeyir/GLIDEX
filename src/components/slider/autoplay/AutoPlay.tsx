import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./autoPlay.module.css";

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    variableWidth: true,
  };

  return (
    <div className={style.slidercontainer}>
      <Slider {...settings}>
        <div className={style.slider}>
          <h3 className={style.slider_text}>* CV-nizi təkmilləşdirin</h3>
        </div>
        <div className={style.slider}>
          <h3 className={style.slider_text}>* Bacarıqlarınızı nümayiş etdirin</h3>
        </div>
        <div className={style.slider}>
          <h3 className={style.slider_text}>* Möhtəşəm CV və LinkedIn profili yaratmaq üçün dəstək alın.</h3>
        </div>
        <div className={style.slider}>
          <h3 className={style.slider_text}>* Virtual rəylə müsahibə bacarıqlarınızı məşq edin və təkmilləşdirin.</h3>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
