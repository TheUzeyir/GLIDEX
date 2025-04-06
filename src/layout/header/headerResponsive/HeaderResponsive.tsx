import { useState, useEffect } from "react";
import style from "../headerDetskop/headerDetskop.module.scss";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const HeaderResponsive = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const navigate = useNavigate();

  const toggleInfo = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsInfoVisible(prev => !prev);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
    setIsMenuOpen(false); 
    setIsInfoVisible(false); 
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsInfoVisible(false); 
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        isMenuOpen &&
        !isInfoVisible &&
        target &&
        !target.closest(`.${style.sidebar}`) &&
        !target.closest(`.${style.header_barIcon}`)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen, isInfoVisible]);

  return (
    <div className={style.header_mobile_container}>
      <div className={`${style.header_mobile} ${isSticky ? style.sticky : ""}`}>
        <div className="container">
          <img
            src="https://greenshift-road.myshopify.com/cdn/shop/files/GlideX_Logo.svg?v=1709810815&width=263"
            alt="Logo"
            className={style.header_logo}
            onClick={() => handleNavigation("/")}
            style={{ cursor: "pointer" }}
          />
          <div className={style.header_mobile_right}>
            <CiSearch
              className={style.header_right_icon}
              onClick={() => handleNavigation("/search")}
            />
            <MdOutlineShoppingBag
              className={style.header_right_icon}
              onClick={() => handleNavigation("/cart")}
            />
            <FaBarsStaggered
              className={style.header_barIcon}
              onClick={toggleMenu}
            />
          </div>
        </div>
      </div>

      <div className={isMenuOpen ? `${style.sidebar} ${style.open}` : style.sidebar}>
        {!isInfoVisible && (
          <div className={style.sideBar_head}>
            <button className={style.close_button} onClick={toggleMenu}>
              <IoClose className={style.sideBar_head_closeIcon} />
            </button>
            <ul className={style.sideBar_head_ul}>
              <li className={style.sideBar_head_li} onClick={() => handleNavigation("/")}>Home</li>
              <li className={style.sideBar_head_li} onClick={() => handleNavigation("/about")}>About</li>
              <li className={style.sideBar_head_li} onClick={() => handleNavigation("/Courses")}>Courses</li>
              <li className={style.sideBar_head_li} onClick={() => handleNavigation("/contact")}>Contact</li>
              <li className={style.sideBar_head_li} onClick={toggleInfo}>
                Information <MdKeyboardArrowRight className={style.sideBar_head_li_icon} />
              </li>
            </ul>
          </div>
        )}

        {isInfoVisible && (
          <div className={style.sideBar_head_Information}>
            <button className={style.close_button} onClick={toggleInfo}>
              <MdOutlineKeyboardArrowLeft className={style.sideBar_head_closeIcon} />
              <h3>Information</h3>
            </button>
            <ul>
              <li className={style.sideBar_head_li} onClick={() => handleNavigation("/event")}>Event</li>
              <li className={style.sideBar_head_li} onClick={() => handleNavigation("/Instructor")}>Instructor</li>
              <li className={style.sideBar_head_li} onClick={() => handleNavigation("/blog")}>Blog</li>
            </ul>
          </div>
        )}

        <div className={style.sideBar_bottom}>
          <div
            className={style.sideBar_login}
            onClick={() => handleNavigation("/login")}
            style={{ cursor: "pointer" }}
          >
            <RxAvatar className={style.sideBar_login_icon} />
            <p>Login</p>
          </div>
          <div className={style.sidebar_social}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <BsTwitterX className={style.sidebar_social_icon} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className={style.sidebar_social_icon} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <BiLogoInstagramAlt className={style.sidebar_social_icon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderResponsive;
