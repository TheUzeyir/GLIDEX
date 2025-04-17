import { useSelector } from "react-redux";
import { selectLikedProducts } from "../../store/likedSlice";
import style from "./likedPage.module.css";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

const LikedItems = () => {
  const likedProducts: Product[] = useSelector(selectLikedProducts);
  
  return (
  <div className={style.likedItem}>
    <div className="container">
        <h2>Bəyənilmiş Məhsullar</h2>
        {likedProducts.length === 0 ? (
          <p>Heç bir bəyənilmiş məhsul yoxdur</p>
        ) : (
          <div className={style.shopPageProducts}>
            {likedProducts.map((product) => (
              <div key={product.id} className={style.productCard}>
                <img
                  src={product.image} 
                  alt={product.name}
                  className={style.productImage}
                />
                <div className={style.product_textBox}>
                  <p className={style.productName}>{product.name}</p>
                  <p className={style.productPrice}>Qiymət-{product.price} AZN</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LikedItems;
