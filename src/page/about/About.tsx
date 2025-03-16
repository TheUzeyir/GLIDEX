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
        <div className="mainCard" data-aos="zoom-in">
          <img className={style.aboutPageImgMain} src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
        <div className="mainCard" data-aos="zoom-in">
          <h2 className={style.aboutPageTitle}>Kurs Hakkında</h2> 
        </div>
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
        <div className="mainCard" data-aos="zoom-in">
          <Footer/>
        </div>
        <div className="mainCard" data-aos="zoom-in">
          <FooterResponsive/>
        </div>
    </div>
  )
}

export default About