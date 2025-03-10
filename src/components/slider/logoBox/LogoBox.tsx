import Slider from "react-slick";
import { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './logoBox.module.css';

function LogoBox() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 968);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [sliderSettings, setSliderSettings] = useState({
    slidesToShow: 6,  // Varsayılan olarak 6 öğe gösterilsin
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

  const data = [
    {
      id: 1,
      imgLogo: 'https://greenshift-road.myshopify.com/cdn/shop/files/happenz.png?v=1698212797&width=300',
      imgproduct: 'https://greenshift-road.myshopify.com/cdn/shop/files/IMGs_01.jpg?v=1698215212&width=375'
    },
    {
      id: 2,
      imgLogo: 'https://greenshift-road.myshopify.com/cdn/shop/files/lastica.png?v=1698213733&width=300',
      imgproduct: 'https://greenshift-road.myshopify.com/cdn/shop/files/IMGs_02.jpg?v=1698215212&width=375'
    },
    {
      id: 3,
      imgLogo: 'https://greenshift-road.myshopify.com/cdn/shop/files/Etlix.png?v=1698213733&width=300',
      imgproduct: 'https://greenshift-road.myshopify.com/cdn/shop/files/IMGs_03.jpg?v=1698215211&width=375'
    },
    {
      id: 4,
      imgLogo: 'https://greenshift-road.myshopify.com/cdn/shop/files/Orion.png?v=1698213733&width=300',
      imgproduct: 'https://greenshift-road.myshopify.com/cdn/shop/files/IMGs_04.jpg?v=1698215212&width=375'
    },
    {
      id: 5,
      imgLogo: 'https://greenshift-road.myshopify.com/cdn/shop/files/Delta.png?v=1698212782&width=300',
      imgproduct: 'https://greenshift-road.myshopify.com/cdn/shop/files/IMGs_06.jpg?v=1698215211&width=375'
    },
    {
      id: 6,
      imgLogo: 'https://greenshift-road.myshopify.com/cdn/shop/files/wars.png?v=1698212810&width=300',
      imgproduct: 'https://greenshift-road.myshopify.com/cdn/shop/files/IMGs_05.jpg?v=1698215211&width=375'
    }
  ];

  return (
    <div className={style.logoBoxContainer}>
      <div className="sliderContainers">
        <Slider {...sliderSettings}>
          {data.map((item) => (
            <div key={item.id} className={style.logoBoxItem}>
              <img src={item.imgproduct} alt="Product" className={style.productImage} />
              <img src={item.imgLogo} alt="Logo" className={style.logoImage} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default LogoBox;
