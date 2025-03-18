import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import style from "./contackBox.module.css";
import MallMap from "../map/Map";

const ContackBox = () => {
  const openWhatsApp = () => {
    const phoneNumber = "+994507970044";
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  const openInstagram = () => {
    const instagramUrl = "https://www.instagram.com/skillupit.az/";
    window.open(instagramUrl, "_blank");
  };

  return (
    <div className="container">
      <div className={style.contactBoxContainer}>
        <div className={style.contactBoxLeft}>
          <div className={style.contactBoxSocial}>
            <div className={style.contactBoxCard}>
              <div className={style.contactBoxCardIcon}>
                <FaMapLocationDot />
              </div>
              <div className={style.contactBoxCardItem}>
                <h2 className={`${style.contactBoxCardItemTitle} slideInLeft`}>Yerləşdiyi ərazi</h2>
                <p className={`${style.contactBoxCardItemText} slideInLeft`}>Az, Baku, 28May</p>
              </div>
            </div>
            <div className={style.contactBoxCard}>
              <div className={style.contactBoxCardIcon}>
                <MdMarkEmailRead />
              </div>
              <div className={style.contactBoxCardItem}>
                <h2 className={`${style.contactBoxCardItemTitle} slideInLeft`}>Email:</h2>
                <p className={`${style.contactBoxCardItemText} slideInLeft`}>memmedovuzeyir797@gmail.com</p>
              </div>
            </div>
            <div className={style.contactBoxCard}>
              <div className={style.contactBoxCardIcon}>
                <FaPhoneVolume />
              </div>
              <div className={style.contactBoxCardItem}>
                <h2 className={`${style.contactBoxCardItemTitle} slideInLeft`}>Əlaqə nömrəsi:</h2>
                <p className={`${style.contactBoxCardItemText} slideInLeft`}>+99450-797-00-44</p>
              </div>
            </div>
          </div>
            <div className={style.contactBoxRight}>
            <button className={`${style.contactBoxRight_btnWp} slideInLeft`}onClick={openWhatsApp}>
                <FaWhatsapp style={{ marginRight: "8px" }} /> WhatsApp ilə əlaqə
            </button>
            <button className={`${style.contactBoxRight_btnInsta} slideInLeft`} onClick={openInstagram}>
                <FaInstagram style={{ marginRight: "8px" }} /> İnstagram ilə əlaqə
            </button>
            </div>
        </div>
        <MallMap/>
      </div>
    </div>
  );
};

export default ContackBox;
