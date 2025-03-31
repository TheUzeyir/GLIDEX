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
import BlogMainLeft from "./BlogMainLeft";
import BlogMainRight from "./BlogMainRight";

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
        <BlogMainLeft currentItems={currentItems} />
        <BlogMainRight/>
        </div>
      <Pagination
            current={currentPage}
            total={data.length}
            pageSize={itemsPerPage}
            onChange={handlePageChange}
            className={style.blogMain_pagination}
      />
      </div>
      <Footer />
      <FooterResponsive />
    </div>
  );
};

export default Blog;
