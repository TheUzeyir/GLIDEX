import { useState } from "react"; 
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import style from "../footerDetskop/footer.module.scss"; 
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import data from "../../../json/data.json"

const FooterResponsive = () => {
  const navigate=useNavigate()
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false); 

  const toggleAbout = () => setIsAboutOpen(!isAboutOpen);
  const toggleCollections = () => setIsCollectionsOpen(!isCollectionsOpen);

  const handleNavigation = (path:string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const getRandomLessons = () => {
    const shuffled = [...data].sort(() => 0.5 - Math.random()); 
    return shuffled.slice(0, 4); 
  };

  const randomLessons = getRandomLessons();

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
              SkillUpIt-Empowered by Innovation
            </div>
          </div>
          <div className={`${style.footer_links} ${isAboutOpen ? style.open : ""}`}>
          <h3 className={style.footer_links_title} onClick={toggleAbout}>
          Quick Link<IoArrowDownCircleOutline className={`${style.footer_links_icon} ${isAboutOpen ? style.footer_links_icon_rotate : ""}`} />
            </h3> 
          <ul>
              <li className={style.footer_link} onClick={()=>handleNavigation('/about')}>About</li>
              <li className={style.footer_link} onClick={()=>handleNavigation('/journal')}>Journal</li>
              <li className={style.footer_link} onClick={()=>handleNavigation('/contact')}>Contack</li>
          </ul>
        </div>
        <div className={`${style.footer_links} ${isCollectionsOpen ? style.open : ""}`}>
          <h3 className={style.footer_links_title} onClick={toggleCollections}>
          Popular Lessons <IoArrowDownCircleOutline className={`${style.footer_links_icon} ${isCollectionsOpen ? style.footer_links_icon_rotate : ""}`} />
          </h3>
          <ul>
              {randomLessons.map((lesson, index) => (
                <li key={index} className={style.footer_link}>
                  {lesson.name}
                </li>
              ))}
            </ul>
        </div>
        <div className={style.footer_info}>
              <FaLocationDot className={style.footer_icon} />Az.Baku-28May
            </div>
            <div className={style.footer_info}>
              <BsFillTelephonePlusFill className={style.footer_icon} />+99450-797-00-44
            </div>
            <div className={style.footer_info}>
              <BiLogoGmail className={style.footer_icon} /> memmedovuzeyir797@gmail.com
            </div>
        </div>
        <div className={style.footer_copy}>
        © 2025 SkillUpIt Academy | All rights reserved
        </div>
      </div>
    </div>
  );
};

export default FooterResponsive;
