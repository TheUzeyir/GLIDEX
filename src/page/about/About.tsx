import { useEffect } from "react";
import HeaderDetskop from '../../layout/header/headerDetskop/HeaderDetskop'
import HeaderResponsive from '../../layout/header/headerResponsive/HeaderResponsive'
import Footer from '../../layout/footer/footerDetskop/Footer'
import FooterResponsive from '../../layout/footer/footerResponsive/FooterResponsive'
import AutoIncreaseNumber from '../../components/autoIncreaseNumber/AutoIncreaseNumber'
import LogoBox from '../../components/slider/logoBox/LogoBox'
import EffectCoverflow from "../../components/slider/CoverflowSlider/CoverflowSlider"
import Aos from "aos";
import "aos/dist/aos.css";
import AutoPlay from "../../components/slider/autoplay/AutoPlay";
import VideoCard from "../../components/videoCard/VideoCard";
import style from "./about.module.css"

const About = () => {

    useEffect(() => {
      Aos.init({
        duration: 2000,
        once: true, 
        mirror: true,
      });
    }, []);

  return (
    <div>
        <HeaderDetskop/>
        <HeaderResponsive/>
        <h2 className={style.aboutPageTitle}>About Road</h2>
        <img className={style.aboutPageImgMain} src="https://greenshift-road.myshopify.com/cdn/shop/files/IMG_Section.jpg?v=1698209209&width=2000" alt="" />
        <div className="mainCard" data-aos="zoom-in">
          <AutoIncreaseNumber/>
        </div>
        <VideoCard/>
        <div className="mainCard" data-aos="zoom-in">
          <AutoPlay/>
        </div>
        <div className="mainCard" data-aos="zoom-in">
          <EffectCoverflow/>
        </div>
        <div className="mainCard" data-aos="zoom-in">
          <LogoBox/>
        </div>
        <Footer/>
        <FooterResponsive/>
    </div>
  )
}

export default About