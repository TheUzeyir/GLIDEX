import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineShoppingBag } from "react-icons/md";
import style from "./headerDetskop.module.scss";
import { useNavigate } from "react-router-dom";
import ShopModal from "../../../components/shopModal/ShopModal"; 
import UserCard from "../headerUserCard/UserCard";
import { useUser } from "@clerk/clerk-react";
import { useSelector } from "react-redux";
import { selectLikedProducts } from "../../../store/likedSlice";
import SearchModal from "../searchModal/SearchModal";
import Logo from "../../../assets/ChatGPT_Image_Apr_29__2025__07_55_48_PM-removebg-preview.png";

const HeaderDetskop = () => { 
  const [isSticky, setIsSticky] = useState(false);
  const [isShopClicked, setIsShopClicked] = useState(false);
  const [isUserCardVisible, setIsUserCardVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const navigate = useNavigate();
  const { user } = useUser();

  const likedProducts = useSelector(selectLikedProducts);
  const likedCount = likedProducts.length;

  const handleNavigation = (path:string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const handleUserIconClick = () => {
    setIsUserCardVisible(prev => !prev);
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

  const handleLikedItemsClick = () => {
    if (user) {
      navigate('/likedItems');
    } else {
      navigate('/signIn'); 
    }
  };

  const handleSearchToggle = () => {
    setIsSearchVisible(prev => !prev);
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
          <img
            src={Logo}
            onClick={() => handleNavigation('/')} 
            alt="Logo"
            className={style.header_logo}
          />
          <div className={style.header_right}>
            <CiSearch className={style.header_right_icon} onClick={handleSearchToggle} />
            <RxAvatar className={style.header_right_icon} onClick={handleUserIconClick}/>
            <div className={style.header_right_icon} onClick={handleLikedItemsClick}>
              <MdOutlineShoppingBag className={style.header_right_icon} />
              {user && likedCount > 0 && (
                <span className={style.badge}>{likedCount}</span>
              )}
            </div>
          </div>
        </div>
      </div>
      <ShopModal isVisible={isShopClicked} />
      <SearchModal isVisible={isSearchVisible} onClose={handleSearchToggle} />
      {isUserCardVisible && <UserCard />}
    </div>
  );
};

export default HeaderDetskop; 