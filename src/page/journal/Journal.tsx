import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../../layout/footer/footerDetskop/Footer";
import FooterResponsive from "../../layout/footer/footerResponsive/FooterResponsive";
import HeaderDetskop from "../../layout/header/headerDetskop/HeaderDetskop";
import HeaderResponsive from "../../layout/header/headerResponsive/HeaderResponsive";
import { MdKeyboardArrowRight } from "react-icons/md";
import style from "./journal.module.css"
import { useNavigate } from "react-router-dom";
import NewsBox from "../../components/newsBox/NewsBox";

const Journal = () => {
    const navigate=useNavigate()

    useEffect(() => {
      Aos.init({
        duration: 2000,
        once: true, 
        mirror: true,
      });
    }, []);
    

  return (
    <div className={style.journal}>
        <HeaderDetskop/>
        <HeaderResponsive/>
        <div className="mainCard" data-aos="zoom-in">
            <div className={style.journal_headBox}>
                <img className={style.journal_img} src="https://t3.ftcdn.net/jpg/10/80/73/84/360_F_1080738448_W6RJ0M8UzVDw3TtguPZlzhTHv6IUifLQ.jpg" alt="" />
                <div className={style.journal_headBox_textBox}>
                    <h2 className={style.journal_headBox_textBox_title}>News</h2>
                    <p className={style.journal_headBox_textBox_item}><span onClick={()=>navigate("/")} className={style.journal_headBox_textBox_item_navText}>Home</span> <MdKeyboardArrowRight/> News</p>
                </div>
            </div>
        </div>
        <div className="mainCard" data-aos="zoom-in">
          <NewsBox/>
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

export default Journal
