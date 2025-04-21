import { useState } from 'react';
import styles from './newsBox.module.css';
import { Pagination } from "antd";
import data from "../../json/data.json" 
import { useNavigate } from 'react-router-dom';

const NewsBox = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    navigate(`/detail-info/${id}`);
    window.scrollTo(0, 0);
  };
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };  

  return (
    <div className="container">
      <div className={styles.newsBoxContainer}>
        <h2 className={`${styles.newsBoxTitle} slideInLeft`}>Mövcud Dərslər</h2>
        <div className={styles.newsBoxCard}>
          {currentItems.map((item) => (
            <div key={item.name} className={styles.newsItem} onClick={() => handleNavigate(item.id)}>
              <img src={item.image} alt={item.image} className={styles.newsItemImage} />
              <h3 className={styles.newsItemTitle}>{item.name}</h3>
              <h4 className={styles.newsItemSubtitle}>{item.subtitle}</h4>
              <p className={styles.newsItemDesc}>{item.description}</p>
              <a href="#" className={styles.newsItemLink}>Read more...</a>
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
  );
};

export default NewsBox;
