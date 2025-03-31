import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import style from "../footerDetskop/footer.module.scss"; 
import { useNavigate } from "react-router-dom";
import data from "../../../json/data.json"

const Footer = () => {

  const navigate=useNavigate()

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
      <div className={style.footer}>
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

          <div className={style.footer_links}>
            <h3 className={style.footer_links_title}>Quick Link</h3>
            <ul>
              <li className={style.footer_link} onClick={()=>handleNavigation('/about')}>About</li>
              <li className={style.footer_link} onClick={()=>handleNavigation('/Courses')}>Courses</li>
              <li className={style.footer_link} onClick={()=>handleNavigation('/contact')}>Contack</li>
            </ul>
          </div>
          <div className={style.footer_links}>
            <h3 className={style.footer_links_title}>Popular Lessons</h3>
            <ul>
              {randomLessons.map((lesson, index) => (
                <li key={index} className={style.footer_link}>
                  {lesson.name}
                </li>
              ))}
            </ul>
          </div>
          <div className={style.footer_links}>
            <h3 className={style.footer_links_title}>Contack Info</h3>
            <div className={style.footer_info}>
              <FaLocationDot className={style.footer_icon} /> Az.Baku-28May
            </div>
            <div className={style.footer_info}>
              <BsFillTelephonePlusFill className={style.footer_icon} />+99450-797-00-44
            </div>
            <div className={style.footer_info}>
              <BiLogoGmail className={style.footer_icon} /> memmedovuzeyir797@gmail.com
            </div>
          </div>
        </div>
        <div className={style.footer_copy}>
        © 2025 SkillUpIt Academy | All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
