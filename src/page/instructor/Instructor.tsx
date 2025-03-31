import { useState, useEffect } from 'react';
import { Pagination } from "antd";
import Aos from "aos";
import "aos/dist/aos.css";
import data from "../../json/data.json";
import HeaderDetskop from '../../layout/header/headerDetskop/HeaderDetskop';
import HeaderResponsive from '../../layout/header/headerResponsive/HeaderResponsive';
import FooterResponsive from '../../layout/footer/footerResponsive/FooterResponsive';
import Footer from '../../layout/footer/footerDetskop/Footer';
import style from "./instructor.module.css";
import { useNavigate } from 'react-router-dom'; 
import SocialButtons from './SosialBox';

const Instructor = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth < 768 ? 3 : 6);
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({
      duration: 1000, 
      once: true,
    });
  }, []);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 768 ? 3 : 6);
    };

    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className="event">
      <HeaderDetskop />
      <HeaderResponsive />
      <div className={style.instructorHeader} data-aos="fade-down">
        <img className={style.instructorHeaderImg} src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?cs=srgb&dl=pexels-luis-gomes-166706-546819.jpg&fm=jpg" alt="" />
        <h1 className={style.instructorHeader_text}>Archives: Instructor</h1>
        <div className={style.instructorHeader_textBox_navtext}>
          <span className={style.instructorHeader_textBox_navtext_title} onClick={() => navigate('/')}>Home</span>/
          <span className={style.instructorHeader_textBox_navtext_subtitle}>Archives: Instructor</span>
        </div>
      </div>

      <div className="container">
        <div className={style.instructorContainer}>
          <div className={style.instructorBoxCard}>
            {currentItems.map((item, index) => (
              <div key={item.name} className={style.instructorItem} data-aos="fade-up" data-aos-delay={index * 100}>
                <img src="https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/team-6.png" alt={item.image} className={style.instructorItemImage} />
                <div className={style.instructorItemContent}>
                    <div className={style.instructorItemContent_textBox}>
                        <h2 className={style.instructorItemContent_textBox_title}>Olivia Sophia</h2>
                        <p className={style.instructorItemContent_textBox_subtitle}>Instructor</p>
                    </div>
                    <SocialButtons/>
                </div>
              </div>
            ))}
          </div>
          <Pagination
            current={currentPage}
            total={data.length}
            pageSize={itemsPerPage}
            onChange={handlePageChange}
          />
        </div>
      </div>
      <FooterResponsive />
      <Footer />
    </div>
  );
};

export default Instructor;
