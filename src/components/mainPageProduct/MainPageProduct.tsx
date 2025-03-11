import { useMemo, useState } from "react";
import data from "../../json/data.json";
import { MdKeyboardArrowRight } from "react-icons/md";
import style from "./mainPageProduct.module.css";

const MainPageProduct = () => {
  const randomItem = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
  }, [data]);

  const [selectedPower, setSelectedPower] = useState(randomItem.power);

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
          <p className={style.mainPageProduct__quantity}>Rs.{randomItem.quantity}</p>
          <p className={style.mainPageProduct__description}>{randomItem.description}</p>
          <div className={style.mainPageProduct__specs}>
            <div className={style.mainPageProduct__specCard}>
              <img
                src={randomItem.batteryImg}
                alt="Battery"
                className={style.mainPageProduct__specImg}
              />
              <div className={style.mainPageProduct__specText}>
                <span className={style.mainPageProduct__specLabel}>
                  {randomItem.batteryText}
                </span>
                <span className={style.mainPageProduct__specValue}>
                  {randomItem.battery}
                </span>
              </div>
            </div>
            <div className={style.mainPageProduct__specCard}>
              <img
                src={randomItem.rangeImg}
                alt="Range"
                className={style.mainPageProduct__specImg}
              />
              <div className={style.mainPageProduct__specText}>
                <span className={style.mainPageProduct__specLabel}>
                  {randomItem.rangeText}
                </span>
                <span className={style.mainPageProduct__specValue}>
                  {randomItem.range}
                </span>
              </div>
            </div>
            <div className={style.mainPageProduct__specCard}>
              <img
                src={randomItem.durationImg}
                alt="Duration"
                className={style.mainPageProduct__specImg}
              />
              <div className={style.mainPageProduct__specText}>
                <span className={style.mainPageProduct__specLabel}>
                  {randomItem.durationText}
                </span>
                <span className={style.mainPageProduct__specValue}>
                  {randomItem.duration}
                </span>
              </div>
            </div>
          </div>
          <div className={style.mainPageProduct__powerOptions}>
            <h2>Power: {selectedPower}</h2>
            <div className={style.mainPageProduct__powerOptions_box}>
              <p className={`${style.mainPageProduct__powerOption} ${selectedPower === "350W" ? style.selected : ""}`} 
              onClick={() => handlePowerChange("350W")}>350W</p>
              <p className={`${style.mainPageProduct__powerOption} ${selectedPower === "550W" ? style.selected : ""}`}
              onClick={() => handlePowerChange("550W")}>550W</p>
            </div>
          </div>
          <div className={style.mainPageProduct__color}>
            <p>Color: {randomItem.color}</p>
          </div>
          <div className={style.mainPageProduct__details_btnBox}>
            <button className={style.mainPageProduct__details_btnBox_btn_add}>Add to cart</button>
            <button className={style.mainPageProduct__details_btnBox_btn_view}>View full details <MdKeyboardArrowRight/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageProduct;
