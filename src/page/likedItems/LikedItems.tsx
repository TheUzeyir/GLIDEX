import { useSelector, useDispatch } from "react-redux";
import { selectLikedProducts, removeLikedProduct } from "../../store/likedSlice";
import style from "./likedPage.module.css";
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

const LikedItems = () => {
  const likedProducts: Product[] = useSelector(selectLikedProducts);
  const dispatch = useDispatch();
  const nabivate = useNavigate()

  const handleRemove = (id: number) => {
    dispatch(removeLikedProduct(id));
  
    const storedFavorites: Product[] = JSON.parse(localStorage.getItem("favorites") || "[]");
    const updatedFavorites = storedFavorites.filter(product => product.id !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };
  

  return (
    <div className={style.likedItem}>
      <div className="container">
        <p onClick={()=>nabivate(-1)} className={style.likedItem_goBack}><IoChevronBackOutline/>Geri dön</p>
        <h2>Bəyənilmiş Məhsullar</h2>
        {likedProducts.length === 0 ? (
          <p>Heç bir bəyənilmiş məhsul yoxdur</p>
        ) : (
          <div className={style.shopPageProducts}>
            {likedProducts.map((product) => (
              <div className={style.productCard} key={product.id}>
                <div className={style.flipcardinner}>
                  <div className={style.flipcardfront}>
                    <img
                      src={product.image} 
                      alt={product.name}
                      className={style.productImage}
                    />
                    <p>{product.name}</p>
                  </div>
                  <div className={style.flipcardback}>
                    <img
                      src={product.image} 
                      alt={product.name}
                      className={style.productImage}
                    />
                    <div className={style.flipcardback_textBox}>
                      <p className={style.flipcardback_textBoxtitle}>{product.name}</p>
                      <p className={style.flipcardback_textBoxsubtitle}>{product.price}-AZN</p>
                      <div className={style.flipcardback_textBox_btnCard}>
                        <button className={style.flipcardback_textBox_btnCard_btn}>
                          Ətraflı məlumat
                        </button>
                        <button 
                          className={style.flipcardback_textBox_btnCard_btn}
                          onClick={() => handleRemove(product.id)} 
                        >
                          Bəyənilərdən Sil
                        </button>
                      </div>
                    </div>
                  </div>
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
