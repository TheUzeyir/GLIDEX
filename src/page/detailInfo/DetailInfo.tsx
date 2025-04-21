import { useMemo, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../../json/data.json";
import style from "./detailInfo.module.css";
import { useDispatch } from "react-redux";
import { addLikedProduct } from "../../store/likedSlice";
import ToastAlert from "../../alert/AddProductAlert";
import { useUser } from "@clerk/clerk-react";
import { MdKeyboardArrowRight } from "react-icons/md";
import HeaderDetskop from "../../layout/header/headerDetskop/HeaderDetskop";
import HeaderResponsive from "../../layout/header/headerResponsive/HeaderResponsive";
import Footer from "../../layout/footer/footerDetskop/Footer";
import FooterResponsive from "../../layout/footer/footerResponsive/FooterResponsive";
import ServiceCard from "../../components/serviceCard/ServiceCard";
import { IoChevronBackOutline } from "react-icons/io5";

interface LikedProduct {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  difficultyLevel: string;
}

const DetailInfo = () => {
  const { id } = useParams();
  const [showToast, setShowToast] = useState(false);
  const [selectedPower, setSelectedPower] = useState("");
  const { user } = useUser();
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const item = useMemo(() => data.find((item) => item.id === Number(id)), [id]);

  const handlePowerChange = (power: string) => {
    setSelectedPower(power);
  };

  const addToFavorite = useCallback(() => {
    if (!user) {
      window.location.href = "/signIn";
      return;
    }

    const storedFavorites: LikedProduct[] = JSON.parse(localStorage.getItem("favorites") || "[]");

    const isAlreadyFavorite = storedFavorites.some(fav => fav.id === item?.id);
    if (isAlreadyFavorite) {
      setShowToast(true);
      return;
    }

    if (!item) return;

    const newFavorite: LikedProduct = {
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price.toString(),
      description: item.description,
      difficultyLevel: item.difficultyLevel,
    };

    const updatedFavorites = [...storedFavorites, newFavorite];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    dispatch(addLikedProduct(newFavorite));
    setShowToast(true);
  }, [user, item, dispatch]);

  if (!item) return <p>Item not found!</p>;

  return (
    <div>
    <HeaderDetskop/>
    <HeaderResponsive/>
    <div className="container">
        <div className={style.detailInfo}>
            <h3 className={style.detailInfoGoback} onClick={()=>(navigate(-1))}><IoChevronBackOutline/>Geri</h3>
            <div className={style.mainPageProduct}>
                <img
                src={item.image}
                alt={item.name}
                className={style.mainPageProduct__img}
                />
                <div className={style.mainPageProduct__details}>
                <p className={style.mainPageProduct__name}>{item.name}</p>
                <p className={style.mainPageProduct__subtitle}>{item.subtitle}</p>
                <p className={style.mainPageProduct__quantity}>Qiyməti - {item.price} AZN</p>
                <p className={style.mainPageProduct__description}>{item.description}</p>
                <p className={style.mainPageProduct__courseDuration}>Müddəti: {item.courseDuration}</p>
                <div className={style.mainPageProduct__specs}>
                    <span className={style.mainPageProduct__specLabel}>Çətinlik Səviyyəsi:</span>
                    <span className={style.mainPageProduct__specValue}>{item.difficultyLevel}</span>
                </div>
                <p className={style.mainPageProduct__BoxTitle}>Əldə edəcəyiniz bacarıqlar:</p>
                <div className={style.mainPageProduct__powerOptions_box}>
                    <p
                    className={`${style.mainPageProduct__powerOption} ${selectedPower === "Başlanğıc" ? style.selected : ""}`}
                    onClick={() => handlePowerChange("Başlanğıc")}
                    >
                    {item.skill}
                    </p>
                    <p
                    className={`${style.mainPageProduct__powerOption} ${selectedPower === "Orta" ? style.selected : ""}`}
                    onClick={() => handlePowerChange("Orta")}
                    >
                    {item.skill2}
                    </p>
                    <p
                    className={`${style.mainPageProduct__powerOption} ${selectedPower === "İrəli" ? style.selected : ""}`}
                    onClick={() => handlePowerChange("İrəli")}
                    >
                    {item.skill3}
                    </p>
                </div>
                <div className={style.mainPageProduct__details_btnBox}>
                    <button
                    className={style.mainPageProduct__details_btnBox_btn_add}
                    onClick={addToFavorite}
                    >
                    Favorilərə əlavə et
                    </button>
                    <a
                    href="https://wa.me/994507970044"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.mainPageProduct__details_btnBox_btn_view}
                    >
                    WhatsApp ilə əlaqə <MdKeyboardArrowRight />
                    </a>
                </div>
                </div>
            </div>
        </div>
    </div>
      <ServiceCard/>
      <Footer/>
      <FooterResponsive/>
      {showToast && <ToastAlert message="Favorilərə əlavə edildi" />}
    </div>
  );
};

export default DetailInfo;
