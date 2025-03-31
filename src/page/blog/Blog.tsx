import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import Footer from "../../layout/footer/footerDetskop/Footer";
import FooterResponsive from "../../layout/footer/footerResponsive/FooterResponsive";
import HeaderDetskop from "../../layout/header/headerDetskop/HeaderDetskop";
import HeaderResponsive from "../../layout/header/headerResponsive/HeaderResponsive";
import style from "./blog.module.css";
import { Pagination } from "antd";
import Aos from "aos";
import "aos/dist/aos.css";
import data from "../../json/data.json";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GoFileDirectoryFill } from "react-icons/go";
import { GoClockFill } from "react-icons/go";
import { FaRegMessage } from "react-icons/fa6";

const Blog = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  
    const handlePageChange = (pageNumber:number) => {
      setCurrentPage(pageNumber);
      window.scrollTo(0, 0);
    };

    useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="event">
      <HeaderDetskop />
      <HeaderResponsive />
      <div className={style.blogHeader} data-aos="fade-down">
        <img
          className={style.blogHeaderImg}
          src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?cs=srgb&dl=pexels-luis-gomes-166706-546819.jpg&fm=jpg"
          alt=""
        />
        <h1 className={style.blogHeader_text}>Blog</h1>
        <div className={style.blogHeader_textBox_navtext}>
          <span className={style.blogHeader_textBox_navtext_title} onClick={() => navigate("/")}>
            Home
          </span>
          /
          <span className={style.blogHeader_textBox_navtext_subtitle}>Blog</span>
        </div>
      </div>
      <div className="container">
        <div className={style.blogMain} data-aos="fade-up">
          <div className={style.blogMainLeft} data-aos="fade-down">
            {currentItems.map((item, index) => (
              <div key={index} className={style.blogItem}>
                <img className={style.blogMainImg} src={item.image} alt={item.image} />
                <div className={style.blogMain_textBox}>
                  <div className={style.blogMain_textBox_head}>
                    <span className={style.blogMain_textBox_head_item}><GoFileDirectoryFill/> Extra Classes</span>
                    <span className={style.blogMain_textBox_head_item}><GoClockFill/> December 12, 2024</span>
                    <span className={style.blogMain_textBox_head_item_comment}><FaRegMessage/> No Comments</span>
                  </div>
                  <h2 className={style.blogMain_text}>{item.name}</h2>
                  <span className={style.blogMain_blogMain_textBoxdesc}>Get Started React JS Tutorial For Beginners Uniquely pursue emerging 
                    experiences before liemerging content. Efficiently underwhelm customer directed total linkage after B2C synergy. Dynamically 
                    simplify superior human capital whereas efficient infrastructures generate business web-readiness after wireless outsourcing. 
                    Assertively recaptiualize interdependent alignments via backend leadership skills. Monotonectally formulate focused quality
                     vectors whereas proactive infomediaries. Energistically utilize […]</span>
                  <button className={style.blogMain_blogMain_textBoxBtn} onClick={() => navigate(`/blog/${item.id}`)}>Read More <MdOutlineKeyboardArrowRight /></button>
                </div>
              </div>
            ))}
          </div>
          <div className={style.blogMainRight} data-aos="fade-down">
            <div className={style.blogMainRight_searchBox}>
              <input className={style.blogMainRight_searchBox_input} placeholder="Seminar Axtar" type="search" />
            </div>
            <div className={style.blogMainRight_comingNew}>
              <h2 className={style.blogMainRight_comingNew_title}>Gelecekde Olacaq Seminarlar</h2>
              <div className={style.blogMainRight_comingNew_item}>
                <img className={style.blogMainRight_comingNew_item_img} src="https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/ed-blog-11.jpg" alt="" />
                <div className={style.blogMainRight_comingNew_item_Box}>
                  <h3 className={style.blogMainRight_comingNew_item_title}>Student Achievement Best Practice for</h3>
                  <p className={style.blogMainRight_comingNew_item_subtitle}><GoClockFill/> 12. Dec, 2024</p>
                </div>
              </div>
              <div className={style.blogMainRight_comingNew_item}>
                <img className={style.blogMainRight_comingNew_item_img} src="https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/ed-blog-11.jpg" alt="" />
                <div className={style.blogMainRight_comingNew_item_Box}>
                  <h3 className={style.blogMainRight_comingNew_item_title}>Student Achievement Best Practice for</h3>
                  <p className={style.blogMainRight_comingNew_item_subtitle}><GoClockFill/> 12. Dec, 2024</p>
                </div>
              </div>
              <div className={style.blogMainRight_comingNew_item}>
                <img className={style.blogMainRight_comingNew_item_img} src="https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/ed-blog-11.jpg" alt="" />
                <div className={style.blogMainRight_comingNew_item_Box}>
                  <h3 className={style.blogMainRight_comingNew_item_title}>Student Achievement Best Practice for</h3>
                  <p className={style.blogMainRight_comingNew_item_subtitle}><GoClockFill/> 12. Dec, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Pagination
            current={currentPage}
            total={data.length}
            pageSize={itemsPerPage}
            onChange={handlePageChange}
      />
      </div>
      <Footer />
      <FooterResponsive />
    </div>
  );
};

export default Blog;
