import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineShoppingBag } from "react-icons/md";
import style from "./headerDetskop.module.scss";

const HeaderDetskop = () => { 
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) { 
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  return (
    <div className={`${style.header_container} ${isSticky ? style.sticky : ""}`}>
      <div className="container">
        <div className={style.header}>
          <div className={style.header_left}>
            <p className={style.header_left_item}>Home</p>
            <p className={style.header_left_item}>Home <IoIosArrowDown/></p>
            <p className={style.header_left_item}>Home</p>
            <p className={style.header_left_item}>Home <IoIosArrowDown/></p>
            <p className={style.header_left_item}>Home</p>
            <p className={style.header_left_item}>Home <IoIosArrowDown/></p>
          </div>
          <img
            src="https://greenshift-road.myshopify.com/cdn/shop/files/GlideX_Logo.svg?v=1709810815&width=263"
            alt=""
            className={style.header_logo}
          />
          <div className={style.header_right}>
            <CiSearch className={style.header_right_icon}/>
            <RxAvatar className={style.header_right_icon}/>
            <MdOutlineShoppingBag className={style.header_right_icon}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDetskop;