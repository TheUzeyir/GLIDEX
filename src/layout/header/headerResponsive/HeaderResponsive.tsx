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
import { useUser,useClerk } from "@clerk/clerk-react";
import { CiLogout } from "react-icons/ci";
import { useSelector } from "react-redux";
import { selectLikedProducts } from "../../../store/likedSlice";
import SearchModal from "../searchModal/SearchModal";
import Logo from "../../../assets/ChatGPT_Image_Apr_29__2025__07_55_48_PM-removebg-preview.png";

const HeaderResponsive = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const navigate = useNavigate();
  const { user } = useUser();
  const { signOut } = useClerk();
  const likedProducts = useSelector(selectLikedProducts);
  const likedCount = likedProducts.length;

  const handleSearchToggle = () => {
    setIsSearchVisible(prev => !prev);
  };

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

  const handleLikedClick = () => {
    if (user) {
      navigate("/likedItems");
    } else {
      navigate("/signIn");
    }
  };

  return (
    <div className={style.header_mobile_container}>
      <div className={`${style.header_mobile} ${isSticky ? style.sticky : ""}`}>
        <div className="container">
          <img
            src={Logo}
            alt="Logo"
            className={style.header_logo_res}
            onClick={() => handleNavigation("/")}
            style={{ cursor: "pointer" }} 
          />
          <div className={style.header_mobile_right}>
            <CiSearch
              className={style.header_right_icon}
              onClick={handleSearchToggle} 
            />
            <div className={style.header_right_icon_wrapper} onClick={handleLikedClick}>
              <MdOutlineShoppingBag className={style.header_right_icon} />
              {user && likedCount > 0 && (
                <span className={style.responsive_badge}>{likedCount}</span>
              )}
            </div>
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
            onClick={() => {
              if (user) {
                navigate("/"); 
              } else {
                navigate("/signIn");
              }
            }}
            style={{ cursor: "pointer" }}
          >
            <RxAvatar className={style.sideBar_login_icon} />
            <p>{user ? user.fullName : "Login"}</p>
          </div>
          {user && (
            <div
              className={style.sideBar_logout}
              onClick={() => signOut(() => navigate("/"))}
              style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", marginTop: "12px", color: "red" }}
            >
              <CiLogout className={style.sideBar_login_icon} />
              <p>Çıxış</p>
            </div>
          )}
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
      <SearchModal isVisible={isSearchVisible} onClose={handleSearchToggle} />
    </div>
  );
};

export default HeaderResponsive;
