import Slider from "react-slick";
import { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './logoBox.module.css';
import data from "../../../json/data.json"
import { useNavigate } from 'react-router-dom';

function LogoBox() {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    navigate(`/detail-info/${id}`);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 968);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [sliderSettings, setSliderSettings] = useState({
    slidesToShow: 6,  
    infinite: isMobile,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    dots: false,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1080) {
        setSliderSettings(prevSettings => ({
          ...prevSettings,
          slidesToShow: 6, 
        }));
      } else if (window.innerWidth >= 768) {
        setSliderSettings(prevSettings => ({
          ...prevSettings,
          slidesToShow: 4,  
        }));
      } else {
        setSliderSettings(prevSettings => ({
          ...prevSettings,
          slidesToShow: 3, 
        }));
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={style.logoBoxContainer}>
      <div className="sliderContainers">
        <Slider {...sliderSettings}>
          {data.map((item) => (
            <div  
              key={item.name} 
              className={style.logoBoxItem}
              onClick={() => handleNavigate(item.id)}
              style={{ cursor: 'pointer' }}
            >
              <img src={item.image} alt="Product" className={style.productImage} />
              <p className={style.logoText}>{item.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default LogoBox;
