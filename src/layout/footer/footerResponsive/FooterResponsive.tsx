import { useState } from "react"; 
import { FaLocationDot, FaFacebookF } from "react-icons/fa6";
import { BsFillTelephonePlusFill, BsTwitterX } from "react-icons/bs";
import { BiLogoGmail, BiLogoInstagramAlt } from "react-icons/bi";
import { LiaLocationArrowSolid } from "react-icons/lia";
import style from "../footerDetskop/footer.module.scss"; 
import { IoArrowDownCircleOutline } from "react-icons/io5";

const FooterResponsive = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false); 

  const toggleAbout = () => setIsAboutOpen(!isAboutOpen);
  const toggleCollections = () => setIsCollectionsOpen(!isCollectionsOpen);

  return (
    <div className="container">
      <div className={style.footer_responsive}>
        <div className={style.footer_wrapper}>
          <div className={style.footer_section}>
            <div className={style.footer_logo}>
              <img
                src="https://greenshift-road.myshopify.com/cdn/shop/files/GlideX_Logo.svg?v=1709810815&width=263"
                alt=""
                className={style.footer_logo_img}
              />
            </div>
            <div className={style.footer_description}>
              Street offers government-certified mixed vehicles at affordable prices, ensuring quality EVs on the road.
            </div>
            <div className={style.footer_info}>
              <FaLocationDot className={style.footer_icon} /> 8642 Yule Street, Arvada CO 80007
            </div>
            <div className={style.footer_info}>
              <BsFillTelephonePlusFill className={style.footer_icon} /> +(248) 762-0356
            </div>
            <div className={style.footer_info}>
              <BiLogoGmail className={style.footer_icon} /> support@road.com
            </div>
          </div>
          <div className={`${style.footer_links} ${isAboutOpen ? style.open : ""}`}>
          <h3 className={style.footer_links_title} onClick={toggleAbout}>
            About us<IoArrowDownCircleOutline className={`${style.footer_links_icon} ${isAboutOpen ? style.footer_links_icon_rotate : ""}`} />
            </h3>
          <ul>
            <li className={style.footer_link}>Our Story</li>
            <li className={style.footer_link}>Contact</li>
            <li className={style.footer_link}>Blogs</li>
            <li className={style.footer_link}>FAQ</li>
          </ul>
        </div>
        <div className={`${style.footer_links} ${isCollectionsOpen ? style.open : ""}`}>
          <h3 className={style.footer_links_title} onClick={toggleCollections}>
            Collections <IoArrowDownCircleOutline className={`${style.footer_links_icon} ${isCollectionsOpen ? style.footer_links_icon_rotate : ""}`} />

          </h3>
          <ul>
            <li className={style.footer_link}>Adventure Gear</li>
            <li className={style.footer_link}>Eco Essentials</li>
            <li className={style.footer_link}>Scoot Accessories</li>
            <li className={style.footer_link}>Urban Rides</li>
          </ul>
        </div>
          <div className={style.footer_subscription}>
            <h3 className={style.footer_subscription_title}>Sign up for news & Updates</h3>
            <div className={style.footer_subscription_box}>
              <input className={style.footer_input} type="email" placeholder="Your email address"/>
              <LiaLocationArrowSolid className={style.footer_submit_icon} />
            </div>
            <div className={style.footer_social}>
              <BsTwitterX className={style.footer_social_icon} />
              <FaFacebookF className={style.footer_social_icon} />
              <BiLogoInstagramAlt className={style.footer_social_icon} />
            </div>
          </div>
        </div>
        <div className={style.footer_copy}>
          Powered by Shopify © 2025, GreenShift Road
        </div>
      </div>
    </div>
  );
};

export default FooterResponsive;
