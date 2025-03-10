import { useEffect } from "react";
import AutoIncreaseNumber from "../../components/autoIncreaseNumber/AutoIncreaseNumber";
import SimpleProduct from "../../components/simpleCard/SimpleProduct";
import AutoPlay from "../../components/slider/autoplay/AutoPlay";
import AutoPlayCard from "../../components/slider/autoPlayCard/AutoPlayCard";
import Footer from "../../layout/footer/footerDetskop/Footer";
import FooterResponsive from "../../layout/footer/footerResponsive/FooterResponsive";
import HeaderDetskop from "../../layout/header/headerDetskop/HeaderDetskop";
import HeaderResponsive from "../../layout/header/headerResponsive/HeaderResponsive";
import Aos from "aos";
import "aos/dist/aos.css";
import SimpleProductCardInfo from "../../components/simpleProductCardInfo/SimpleProductCardInfo";
import CountdownTimer from "../../components/countDownTimer/CountdownTimer";
import ScrollToTop from "../../components/scrollTop/ScrollToTop";
import Autoplayprogress from "../../components/slider/Autoplayprogre/Autoplayprogress";
import UnevenSetsInfinite from "../../components/slider/UnevenSetsInfinite/UnevenSetsInfinite";
import LogoBox from "../../components/slider/logoBox/LogoBox";

const Main = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true, 
      mirror: true,
    });
  }, []);
  
  return (
    <div>
      {/* <div className="mainCard">
        <HeaderDetskop/>
      </div>
      <div className="mainCard">
        <HeaderResponsive/>
      </div> */}
      <ScrollToTop/>
      {/* <div className="mainCard" data-aos="zoom-in">
        <AutoPlayCard/>
      </div>
      <div className="mainCard" data-aos="zoom-in">
        <SimpleProduct/>
      </div>
      <div className="mainCard" data-aos="zoom-in">
        <AutoIncreaseNumber/>
      </div>
      <div className="mainCard" data-aos="zoom-in">
        <AutoPlay/>
      </div>
      <div className="mainCard" data-aos="zoom-in">
        <SimpleProductCardInfo/>
      </div> */}
      {/* <div className="mainCard unevenSetsInfinite" data-aos="zoom-in">
        <UnevenSetsInfinite />
      </div> */}
      {/* <div className="mainCard" data-aos="zoom-in">
        <CountdownTimer/>
      </div>
      <div className="mainCard" data-aos="zoom-in">
        <Autoplayprogress/>
      </div> */}
      <div className="mainCard" data-aos="zoom-in">
        <LogoBox/>
      </div>
      {/* <div className="mainCard" data-aos="zoom-in">
        <Footer/>
      </div>
      <div className="mainCard" data-aos="zoom-in">
        <FooterResponsive />
      </div> */}
    </div>
  );
};

export default Main;
