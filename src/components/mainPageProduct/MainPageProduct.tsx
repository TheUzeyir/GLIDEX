import { useMemo, useState, useEffect } from "react";
import data from "../../json/data.json";
import { MdKeyboardArrowRight } from "react-icons/md";
import style from "./mainPageProduct.module.css";
import { useDispatch } from "react-redux";
import { addLikedProduct } from "../../store/likedSlice";
import ToastAlert from "../../alert/AddProductAlert"; 
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from 'react-router-dom';

interface LikedProduct {
  id: number;
  name: string;
  image: string;
  price: string; 
  description: string;
  difficultyLevel: string;
} 

const MainPageProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useUser();
  const handleNavigate = (id: number) => {
    navigate(`/detail-info/${id}`);
    window.scrollTo(0, 0);
  };

  const randomItem = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
  }, []);

  const [selectedPower, setSelectedPower] = useState(randomItem.difficultyLevel);
  const [showToast, setShowToast] = useState(false);

  const handlePowerChange = (power: string) => {
    setSelectedPower(power);
  };

  const addToFavorite = () => {
    if (!user) {
      window.location.href = "/signIn"; 
      return;
    }

    const storedFavorites: LikedProduct[] = JSON.parse(localStorage.getItem("favorites") || "[]");

    const newFavorite: LikedProduct = {
      id: randomItem.id,
      name: randomItem.name,
      image: randomItem.image,
      price: randomItem.price.toString(),  
      description: randomItem.description,
      difficultyLevel: randomItem.difficultyLevel,
    };

    const updatedFavorites = [...storedFavorites, newFavorite];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    dispatch(addLikedProduct(newFavorite));

    setShowToast(true);
  };

  useEffect(() => {
    const storedFavorites: LikedProduct[] = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (storedFavorites.length > 0) {
      storedFavorites.forEach((product: LikedProduct) => {
        dispatch(addLikedProduct(product));
      });
    }
  }, [dispatch]);

  return (
    <div className="container">
      <div className={style.mainPageProduct}>
        <img
          src={randomItem.image}
          alt={randomItem.name}
          className={style.mainPageProduct__img}
        />
        <div className={style.mainPageProduct__details}>
          <p className={style.mainPageProduct__name}>{randomItem.name}</p>
          <p className={style.mainPageProduct__subtitle}>{randomItem.subtitle}</p>
          <p className={style.mainPageProduct__quantity}>Qiyməti-{randomItem.price}AZN</p>
          <p className={style.mainPageProduct__description}>{randomItem.description}</p>
          <p className={style.mainPageProduct__courseDuration}>Müddəti: {randomItem.courseDuration}</p>
          <div className={style.mainPageProduct__specs}>
            <span className={style.mainPageProduct__specLabel}>Çətinlik Səviyyəsi:</span>
            <span className={style.mainPageProduct__specValue}>{randomItem.difficultyLevel}</span>
          </div>
          <p className={style.mainPageProduct__BoxTitle}>Əldə edəcəyiniz bacarıqlar:</p>
          <div className={style.mainPageProduct__powerOptions_box}>
            <p
              className={`${style.mainPageProduct__powerOption} ${selectedPower === "Başlanğıc" ? style.selected : ""}`}
              onClick={() => handlePowerChange("Başlanğıc")}>{randomItem.skill}</p>
            <p
              className={`${style.mainPageProduct__powerOption} ${selectedPower === "Orta" ? style.selected : ""}`}
              onClick={() => handlePowerChange("Orta")}>{randomItem.skill2}</p>
            <p
              className={`${style.mainPageProduct__powerOption} ${selectedPower === "İrəli" ? style.selected : ""}`}
              onClick={() => handlePowerChange("İrəli")}>{randomItem.skill3}</p>
          </div>
          <div className={style.mainPageProduct__details_btnBox}>
            <button
              className={style.mainPageProduct__details_btnBox_btn_add}
              onClick={addToFavorite}
            >
              Favorilərə əlavə et
            </button>
            <button className={style.mainPageProduct__details_btnBox_btn_view} onClick={() => handleNavigate(randomItem.id)}>
              Data ətrafı məlumat al<MdKeyboardArrowRight />
            </button>
          </div>
        </div>
      </div>
      {showToast && <ToastAlert message="Favorilərə əlavə edildi" />}
    </div>
  );
};

export default MainPageProduct;
