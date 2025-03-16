import { useMemo,useState } from "react";
import data from "../../json/data.json";
import { MdKeyboardArrowRight } from "react-icons/md";
import style from "./mainPageProduct.module.css";

const MainPageProduct = () => {
  const randomItem = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
  }, [data]);

  const [selectedPower, setSelectedPower] = useState(randomItem.difficultyLevel);

  const handlePowerChange = (power: string) => {
    setSelectedPower(power);
  };  


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
            <button className={style.mainPageProduct__details_btnBox_btn_add}>Favorilərə əlavə et</button>
            <button className={style.mainPageProduct__details_btnBox_btn_view}>Data ətrafı məlumat al<MdKeyboardArrowRight/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageProduct;
