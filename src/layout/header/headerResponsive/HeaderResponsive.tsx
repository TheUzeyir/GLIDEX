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
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const HeaderResponsive = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
    setIsMenuOpen(false); // Menü kapansın
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
  };

  const toggleInfoMenu = () => {
    setIsInfoOpen(!isInfoOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        isMenuOpen &&
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
  }, [isMenuOpen]);

  return (
    <div className={style.header_mobile_container}>
      <div className={`${style.header_mobile} ${isSticky ? style.sticky : ""}`}>
        <div className="container">
          <img
            src="https://greenshift-road.myshopify.com/cdn/shop/files/GlideX_Logo.svg?v=1709810815&width=263"
            alt="Logo"
            className={style.header_logo}
          />
          <div className={style.header_mobile_right}>
            <CiSearch className={style.header_right_icon} />
            <MdOutlineShoppingBag className={style.header_right_icon} />
            <FaBarsStaggered
              className={style.header_barIcon}
              onClick={toggleMenu}
            />
          </div>
        </div>
      </div>
      <div className={`${style.sidebar} ${isMenuOpen ? style.open : ""}`}>
        <div className={style.sideBar_head}>
          <button className={style.close_button} onClick={toggleMenu}>
            <IoClose className={style.sideBar_head_closeIcon} />
          </button>
          <ul>
            <li className={style.sideBar_head_li} onClick={() => handleNavigation("/")}>Home</li>
            <li className={style.sideBar_head_li}>
              Shop <MdKeyboardArrowRight className={style.sideBar_head_li_icon} />
            </li>
            <li className={style.sideBar_head_li} onClick={() => handleNavigation("/about")}>About</li>
            <li className={style.sideBar_head_li} onClick={() => handleNavigation("/Courses")}>Courses</li>
            <li className={style.sideBar_head_li} onClick={() => handleNavigation("/contact")}>Contact</li>

            {/* Information Menü */}
            <li className={style.sideBar_head_li} onClick={toggleInfoMenu}>
              Information 
              <MdKeyboardArrowRight className={style.sideBar_head_li_icon} />
            </li>
            {/* Açılır Menü İçeriği */}
            <ul className={`${style.sideBar_subMenu} ${isInfoOpen ? style.open : ""}`}>
              <li className={style.sideBar_subItem} onClick={() => handleNavigation("/event")}>Event</li>
              <li className={style.sideBar_subItem} onClick={() => handleNavigation("/instructor")}>Instructor</li>
              <li className={style.sideBar_subItem} onClick={() => handleNavigation("/blog")}>Blog</li>
            </ul>
          </ul>
        </div>
        <div className={style.sideBar_bottom}>
          <div className={style.sideBar_login}>
            <RxAvatar className={style.sideBar_login_icon} />
            <p>Login</p>
          </div>
          <div className={style.sidebar_social}>
            <BsTwitterX className={style.sidebar_social_icon} />
            <FaFacebookF className={style.sidebar_social_icon} />
            <BiLogoInstagramAlt className={style.sidebar_social_icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderResponsive;
