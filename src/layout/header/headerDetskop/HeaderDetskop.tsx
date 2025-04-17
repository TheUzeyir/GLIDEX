import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineShoppingBag } from "react-icons/md";
import style from "./headerDetskop.module.scss";
import { useNavigate } from "react-router-dom";
import ShopModal from "../../../components/shopModal/ShopModal"; 

const HeaderDetskop = () => { 
  const [isSticky, setIsSticky] = useState(false);
  const [isShopClicked, setIsShopClicked] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path:string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 

  const handleShopClick = () => {
    setIsShopClicked(prev => !prev); 
  };

  return (
    <div className={`${style.header_container} ${isSticky ? style.sticky : ""}`}>
      <div className="container">
        <div className={style.header}>
          <div className={style.header_left}>
            <p className={style.header_left_item} onClick={() => handleNavigation('/')}>Home</p>
            <p className={style.header_left_item} onClick={() => handleNavigation('/about')}>About</p>
            <p className={style.header_left_item} onClick={() => handleNavigation("/Courses")}>Courses</p>
            <p className={style.header_left_item} onClick={() => handleNavigation('/contact')}>Contact</p>
            <p 
              className={style.header_left_item} 
              onClick={handleShopClick}
            >
              Information <IoIosArrowDown className={isShopClicked ? style.rotated : ""} />
            </p>
          </div>
          {/* <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUkyE16XAm5jHDKwksOJ0neG2pOZwTTr4XUA&s"
            alt="Logo"
            className={style.header_logo}
          /> */}
          <h2 className={style.header_logo}>SkillUpIt</h2>
          <div className={style.header_right}>
            <CiSearch className={style.header_right_icon}/>
            <RxAvatar className={style.header_right_icon}/>
            <MdOutlineShoppingBag className={style.header_right_icon} onClick={() => handleNavigation('/likedItems')}/>
          </div>
        </div>
      </div>
      <ShopModal isVisible={isShopClicked} />
    </div>
  );
};

export default HeaderDetskop; 