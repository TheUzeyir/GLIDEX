import React from "react";
import style from "./Blog.module.css";
import { FaRegMessage } from "react-icons/fa6";
import { GoFileDirectoryFill, GoClockFill } from "react-icons/go";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface BlogItem {
    id: number;
    image: string;
    name: string;
  }
  
  interface BlogMainLeftProps {
    currentItems: BlogItem[];
  }

const BlogMainLeft:React.FC<BlogMainLeftProps> = ({ currentItems }) => {
  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    navigate(`/detail-info/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className={style.blogMainLeft} data-aos="fade-down">
      {currentItems.map((item, index) => (
        <div key={index} className={style.blogItem}  onClick={() => handleNavigate(item.id)}>
          <img className={style.blogMainImg} src={item.image} alt={item.image} />
          <div className={style.blogMain_textBox}>
            <div className={style.blogMain_textBox_head}>
              <span className={style.blogMain_textBox_head_item}>
                <GoFileDirectoryFill /> Extra Classes
              </span>
              <span className={style.blogMain_textBox_head_item}>
                <GoClockFill /> December 12, 2024
              </span>
              <span className={style.blogMain_textBox_head_item_comment}>
                <FaRegMessage /> No Comments
              </span>
            </div>
            <h2 className={style.blogMain_text}>{item.name}</h2>
            <span className={style.blogMain_blogMain_textBoxdesc}>
              Get Started React JS Tutorial For Beginners Uniquely pursue emerging experiences before liemerging content...
            </span>
            <button
              className={style.blogMain_blogMain_textBoxBtn}
              onClick={() => navigate(`/blog/${item.id}`)}
            >
              Read More <MdOutlineKeyboardArrowRight />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogMainLeft;
