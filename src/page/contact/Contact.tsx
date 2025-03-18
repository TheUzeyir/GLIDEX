import { useEffect } from "react";
import HeaderDetskop from '../../layout/header/headerDetskop/HeaderDetskop'
import HeaderResponsive from '../../layout/header/headerResponsive/HeaderResponsive'
import FooterResponsive from '../../layout/footer/footerResponsive/FooterResponsive'
import Footer from '../../layout/footer/footerDetskop/Footer'
import style from "./contact.module.css"
import Aos from "aos";
import "aos/dist/aos.css";
import ContackBox from "../../components/contackBox/ContackBox.module";

const Contact = () => {

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
            <h2 className={style.contackPageTitle}>Bizimlə əlaqə</h2>
        </div>
        <div className="mainCard" data-aos="zoom-in">
            <ContackBox/>
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

export default Contact
