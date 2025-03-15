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
            <p className={style.header_left_item} onClick={() => navigate('/')}>Home</p>
            <p className={style.header_left_item} onClick={() => navigate('/about')}>About</p>
            <p className={style.header_left_item} onClick={() => navigate("/journal")}>Journal</p>
            <p className={style.header_left_item} onClick={() => navigate('/contact')}>Contact</p>
            <p 
              className={style.header_left_item} 
              onClick={handleShopClick}
            >
              Shop <IoIosArrowDown className={isShopClicked ? style.rotated : ""} />
            </p>
          </div>
          <img
            src="https://greenshift-road.myshopify.com/cdn/shop/files/GlideX_Logo.svg?v=1709810815&width=263"
            alt="Logo"
            className={style.header_logo}
          />
          <div className={style.header_right}>
            <CiSearch className={style.header_right_icon}/>
            <RxAvatar className={style.header_right_icon}/>
            <MdOutlineShoppingBag className={style.header_right_icon}/>
          </div>
        </div>
      </div>
      <ShopModal isVisible={isShopClicked} />
    </div>
  );
};

export default HeaderDetskop;