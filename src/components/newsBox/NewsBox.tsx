import { useState } from 'react';
import styles from './newsBox.module.css';
import { Pagination } from "antd";

const NewsBox = () => {
  const data = [
    {
      id: 1,
      time: "08,Sep 2023",
      img: "https://greenshift-road.myshopify.com/cdn/shop/articles/Blog_01_Safety_Tips_to_Avoid_Injuries.jpg?v=1698312968&width=1000",
      title: "John Mathew 3 comments",
      subtitle: "Factors to Consider When Buying an Electric Scooter",
      desc: "Electric scooters have become increasingly popular as a convenient and eco-friendly mode of transportation. Whether you're looking for a fun..."
    },
    {
      id: 2,
      time: "08,Sep 2023",
      img: "https://greenshift-road.myshopify.com/cdn/shop/articles/Blog_03_Maintaining_Your_Electric_Scooter.jpg?v=1698312513&width=1000",
      title: "John Mathew",
      subtitle: "Must have Accessories",
      desc: "Are you the proud owner of a stylish kickback scooter, or perhaps you're considering getting one for your daily urban..."
    },
    {
      id: 3,
      time: "08,Sep 2023",
      img: "https://greenshift-road.myshopify.com/cdn/shop/articles/Blog_02_Charging_Electric_Scooters.jpg?v=1699597716&width=1000",
      title: "John Mathew 1 comment",
      subtitle: "Electric scooters for all ages",
      desc: "Electric scooters are remarkably user-friendly. They are designed with simplicity in mind, making them accessible to a wide range of..."
    },
    {
      id: 4,
      time: "08,Sep 2023",
      img: "https://greenshift-road.myshopify.com/cdn/shop/articles/Blog_05_Electric_Scooters_for_Heavy_Adults.jpg?v=1698311291&width=1000",
      title: "John Mathew",
      subtitle: "Tips to maintain Your Electric Scooter",
      desc: "Always consult your scooter's user manual for specific maintenance instructions."
    },
    {
      id: 5,
      time: "08,Sep 2023",
      img: "http://greenshift-road.myshopify.com/cdn/shop/articles/Blog_04_Electric_Scooter_Accessories.jpg?v=1698312339&width=1000",
      title: "John Mathew",
      subtitle: "Benefits of Electric Scooters for Commuters",
      desc: "Electric scooters have rapidly gained popularity as a convenient and eco-friendly mode of urban transportation."
    },
    {
      id: 6,
      time: "08,Sep 2023",
      img: "http://greenshift-road.myshopify.com/cdn/shop/articles/Blog_06_Consider_When_Buying_an_Electric_Scooter.jpg?v=1698312003&width=1000",
      title: "John Mathew",
      subtitle: "Safety Tips to Avoid Injuries",
      desc: "Electric kick scooters are a fun and convenient way to get around, but safety should always be a top priority...."
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };  

  return (
    <div className={styles.newsBoxContainer}>
      <h2 className={styles.newsBoxTitle}>News Articles</h2>
      <div className={styles.newsBoxCard}>
        {currentItems.map((item) => (
          <div key={item.id} className={styles.newsItem}>
            <img src={item.img} alt={item.title} className={styles.newsItemImage} />
            <p className={styles.newsItemTime}>{item.time}</p>
            <h3 className={styles.newsItemTitle}>{item.title}</h3>
            <h4 className={styles.newsItemSubtitle}>{item.subtitle}</h4>
            <p className={styles.newsItemDesc}>{item.desc}</p>
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
  );
};

export default NewsBox;
