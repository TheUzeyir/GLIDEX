import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import style from "./contackBox.module.css";

const ContackBox = () => {
  return (
    <div className="container">
        <div className={style.contactBoxContainer}>
        <div className={style.contactBoxLeft}>
            <h2>Let's Discuss</h2>
            <p className={style.contactBoxLeft_subtitle}>
            Road: where sustainable driving meets a brighter future! As your trusted electric vehicle supplier, we're here to revolutionize your journey towards eco-friendly transportation, leaving pollution behind and welcoming a cleaner, greener commute. With Crafting Clean Beginnings, you can join the green movement now and improve the environment.
            </p>
            <div className={style.contactBoxSocial}>
            <div className={style.contactBoxCard}>
                <div className={style.contactBoxCardIcon}>
                <FaMapLocationDot />
                </div>
                <div className={style.contactBoxCardItem}>
                <h2 className={style.contactBoxCardItemTitle}>Our Location</h2>
                <p className={style.contactBoxCardItemText}>76 Mill Road, Penfield, NY 26.</p>
                </div>
            </div>
            <div className={style.contactBoxCard}>
                <div className={style.contactBoxCardIcon}>
                <MdMarkEmailRead />
                </div>
                <div className={style.contactBoxCardItem}>
                <h2 className={style.contactBoxCardItemTitle}>Our Mail Address</h2>
                <p className={style.contactBoxCardItemText}>support@road.com</p>
                </div>
            </div>
            <div className={style.contactBoxCard}>
                <div className={style.contactBoxCardIcon}>
                <FaPhoneVolume />
                </div>
                <div className={style.contactBoxCardItem}>
                <h2 className={style.contactBoxCardItemTitle}>Phone Number</h2>
                <p className={style.contactBoxCardItemText}>+32 894 659 12</p>
                </div>
            </div>
            </div>
        </div>

        <div className={style.contactBoxRight}>
            <input
                className={style.contactBoxRightInput}
                type="text"
                placeholder="Name"
            />
            <input
                className={style.contactBoxRightInput}
                type="email"
                placeholder="Email *"
            />
            <input
                className={style.contactBoxRightInput}
                type="tel"
                placeholder="Phone number"
            />
            <textarea
                className={style.contactBoxRightTextarea}
                placeholder="Additional Information..."
            ></textarea>
            <button className={style.contactBoxRight_btn}>Send</button>
            </div>
        </div>
    </div>
  );
};

export default ContackBox;
