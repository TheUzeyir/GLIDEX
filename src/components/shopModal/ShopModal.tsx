import style from './shopModal.module.css';

interface ShopModalProps {
  isVisible: boolean;
}

const ShopModal: React.FC<ShopModalProps> = ({ isVisible }) => {
  return (
    <div 
      className={style.shopModalContainer}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <div className={style.shopModal}>
        <div className={style.shopModalLeft}>
          <div className={style.shopModalCategory}>
            <h2 className={style.categoryTitle}>By Features</h2>
            <ul className={style.categoryTitle_ul}>
              <li>Low Speed</li>
              <li>High Speed</li>
              <li>Off Road</li>
              <li>Long Lasting Battery</li>
              <li>Dual Disc Breake</li>
            </ul>
          </div>
          <div className={style.shopModalCategory}>
            <h2 className={style.categoryTitle}>By Gears</h2>
            <ul className={style.categoryTitle_ul}>
              <li>Rider Glove</li>
              <li>Helmet</li>
              <li>Power Bank</li>
              <li>Water Bottles</li>
              <li>Jacket</li>
            </ul>
          </div>
          <div className={style.shopModalCategory}>
            <h2 className={style.categoryTitle}>By Category</h2>
            <ul className={style.categoryTitle_ul}>
              <li>Eco Essentials</li>
              <li>Urban Rides</li>
              <li>Adventure Gear</li>
              <li>Scoot Accessories</li>
              <li>Style & Safety</li>
            </ul>
          </div>
        </div>
        <div className={style.shopModalRight}>
          <div className={style.shopModalRightItem_left}>
            <img
              src="https://greenshift-road.myshopify.com/cdn/shop/files/menu-1img.jpg?v=1694762556&width=750"
              alt="Shop Accessories"
              className={style.shopImage_left}
            />
            <p className={style.shopModalRightItem_leftTitle}>Shop Accessories</p>
          </div>
          <div className={style.shopModalRightItem_right}>
            <img
              src="https://greenshift-road.myshopify.com/cdn/shop/files/menu-2img.jpg?v=1694762556&width=750"
              alt="New Arrivals"
              className={style.shopImage_right}
            />
            <div className={style.shopModalRightItem_right_textBox}>
              <p className={style.shopModalRightItem_right_textBox_title}>New Arrivals</p>
              <p className={style.shopModalRightItem_right_textBox_subtitle}>Shop Today</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopModal;
