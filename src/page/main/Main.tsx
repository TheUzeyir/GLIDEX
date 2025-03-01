import { useEffect } from "react";
import AutoIncreaseNumber from "../../components/autoIncreaseNumber/AutoIncreaseNumber";
import SimpleProduct from "../../components/simpleCard/SimpleProduct";
import AutoPlay from "../../components/slider/autoplay/AutoPlay";
import AutoPlayCard from "../../components/slider/autoPlayCard/AutoPlayCard";
import Footer from "../../layour/footer/footerDetskop/Footer";
import FooterResponsive from "../../layour/footer/footerResponsive/FooterResponsive";
import HeaderDetskop from "../../layour/header/headerDetskop/HeaderDetskop";
import HeaderResponsive from "../../layour/header/headerResponsive/HeaderResponsive";
import Aos from "aos";
import "aos/dist/aos.css";
import SimpleProductCardInfo from "../../components/simpleProductCardInfo/SimpleProductCardInfo";
import CountdownTimer from "../../components/countDownTimer/CountdownTimer";

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
      <div className="mainCard">
        <HeaderDetskop/>
      </div>
      <div className="mainCard">
        <HeaderResponsive/>
      </div>
      <div className="mainCard" data-aos="fade-up">
        <AutoPlayCard data-aos="fade-down"/>
      </div>
      <div className="mainCard" data-aos="fade-up">
        <SimpleProduct/>
      </div>
      <div className="mainCard" data-aos="fade-down">
        <AutoIncreaseNumber data-aos="fade-up"/>
      </div>
      <div className="mainCard" data-aos="fade-down">
        <AutoPlay/>
      </div>
      <div className="mainCard" data-aos="fade-down">
        <SimpleProductCardInfo data-aos="fade-out"/>
      </div>
      <div className="mainCard" data-aos="fade-up">
        <CountdownTimer/>
      </div>
      <div className="mainCard" data-aos="fade-down">
        <Footer/>
      </div>
      <div className="mainCard" data-aos="fade-down">
        <FooterResponsive />
      </div>
    </div>
  );
};

export default Main;
