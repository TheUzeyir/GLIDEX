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
    autoplaySpeed: 3000,
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
      <h2 className={style.productCard_main_title}>Explore our best collections</h2>
      <p className={style.productCard_main_subtitle}>Top kick scooter picks for an exhilarating ride</p>
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.name} className={style.slide}>
            <img src={item.image} alt={item.name} className={style.slideimg} />
            <div className={style.productCard_info}>
                <h3 className={style.productCard_title}>{item.name}</h3>
                <p className={style.productCard_subtitle}>{item.subtitle}</p>
                <div className={style.productCard_info_Box}>
                    <div className={style.productCard_info_card}>
                        <img src={item.batteryImg} alt="Battery Icon" />
                        <span>{item.battery}</span>   
                    </div>
                    <div className={style.productCard_info_card}>
                        <img src={item.durationImg} alt="Duration Icon" />
                        <span>{item.duration}</span>
                    </div>
                    <div className={style.productCard_info_card}>
                        <img src={item.rangeImg} alt="Range Icon" />
                        <span>{item.range}</span>
                    </div>
                </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default UnevenSetsInfinite;
