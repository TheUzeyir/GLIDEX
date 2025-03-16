import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../../json/data.json"; 
import style from "./UnevenSetsInfinite.module.css";

function UnevenSetsInfinite() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false
        }
      }
    ]
  };

  return (
    <div className={style.slidercontainer}>
      <h2 className={style.productCard_main_title}>Mövcut Dərslər</h2>
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.name} className={style.slide}>
            <img src={item.image} alt={item.name} className={style.slideimg} />
            <div className={style.productCard_info}>
                <h3 className={style.productCard_title}>{item.name}</h3> 
                <p className={style.productCard_subtitle}>{item.subtitle}</p>
                <p className={style.productCard_subtitle}>Qiymət-{item.price} AZN</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default UnevenSetsInfinite;
