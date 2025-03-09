import { useState } from 'react';
import style from "./simpleProductCardInfo.module.css";
import data from "../../json/data.json"

const SimpleProductCardInfo = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className={style.productCard_main}>
            <div className='container'>
                <h2 className={style.productCard_main_title}>Explore our best collections</h2>
                <p className={style.productCard_main_subtitle}>Top kick scooter picks for an exhilarating ride</p>
                <div className={style.productCard_container}>
                    {data.map((product, index) => (
                        <div 
                            className={style.productCard} 
                            key={product.name}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <img 
                                src={hoveredIndex === index ? product.imageHover : product.image} 
                                alt="product" 
                                className={style.productCard_mainImg}
                            />
                            <div className={style.productCard_info}>
                                <h3 className={style.productCard_title}>{product.name}</h3>
                                <p className={style.productCard_subtitle}>{product.subtitle}</p>
                                <div className={style.productCard_info_Box}>
                                    <div className={style.productCard_info_card}>
                                        <img src={product.batteryImg} alt="" />
                                        <span>{product.battery}</span>   
                                    </div>
                                    <div className={style.productCard_info_card}>
                                        <img src={product.durationImg} alt="" />
                                        <span>{product.duration}</span>
                                    </div>
                                    <div className={style.productCard_info_card}>
                                        <img src={product.rangeImg} alt="" />
                                        <span>{product.range}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SimpleProductCardInfo;
