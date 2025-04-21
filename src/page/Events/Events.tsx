import { useState, useEffect } from 'react';
import { Pagination } from "antd";
import Aos from "aos";
import "aos/dist/aos.css";
import data from "../../json/data.json";
import HeaderDetskop from '../../layout/header/headerDetskop/HeaderDetskop';
import HeaderResponsive from '../../layout/header/headerResponsive/HeaderResponsive';
import FooterResponsive from '../../layout/footer/footerResponsive/FooterResponsive';
import Footer from '../../layout/footer/footerDetskop/Footer';
import style from "./events.module.css";
import { useNavigate } from 'react-router-dom';
import { FaRegClock } from "react-icons/fa"; 
import { IoLocationSharp } from "react-icons/io5";

const Events = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth < 768 ? 3 : 6);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    navigate(`/detail-info/${id}`);
    window.scrollTo(0, 0);
  };

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

  const handlePageChange = (pageNumber:number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className="event">
      <HeaderDetskop />
      <HeaderResponsive />
      <div className={style.eventHeader} data-aos="fade-down">
        <img className={style.eventHeaderImg} src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?cs=srgb&dl=pexels-luis-gomes-166706-546819.jpg&fm=jpg" alt="" />
        <h1 className={style.eventHeader_text}>Archives: Events</h1>
        <div className={style.eventHeader_textBox_navtext}>
          <span className={style.eventHeader_textBox_navtext_title} onClick={() => navigate('/')}>Home</span>/
          <span className={style.eventHeader_textBox_navtext_subtitle}>Archives: Events</span>
        </div>
      </div>

      <div className="container">
        <div className={style.eventContainer}>
          <div className={style.eventBoxCard}>
            {currentItems.map((item, index) => (
              <div key={item.name} className={style.eventItem} data-aos="fade-up" data-aos-delay={index * 100} onClick={() => handleNavigate(item.id)}>
                <img src={item.image} alt={item.image} className={style.eventItemImage} />
                <h3 className={style.eventItemDate}>16-Oct</h3>
                <h3 className={style.eventItemDatetitle}><FaRegClock />08:00 AM-10:00 AM</h3>
                <h2 className={style.eventItemSubtitle}>London International Conference on</h2>
                <p className={style.eventItemDesc}>Event Overview In today’s rapidly evolving educational landscape, traditional teaching methods are being reimagined to</p>
                <p className={style.eventItemLocation}><IoLocationSharp className={style.eventItemLocation_icon} />United States</p>
                <button className={style.eventItemLink}>View Details</button>
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

export default Events;
