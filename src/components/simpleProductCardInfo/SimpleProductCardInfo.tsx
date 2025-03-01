import React, { useState } from 'react';
import style from "./simpleProductCardInfo.module.css";

const SimpleProductCardInfo = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const data = [
        {
            name: "VeloWave M5",
            subtitle: "Urban Commuting Evolution",
            description: "The best scooter in the market for a smooth ride",
            duration: "6.30 hrs",
            range: "126 km",
            battery: "77 kWh",
            batteryImg: "https://greenshift-road.myshopify.com/cdn/shop/files/Emission-icon.svg?v=1694095411",
            rangeImg: "https://greenshift-road.myshopify.com/cdn/shop/files/Range-icon.svg?v=1694093594",
            durationImg: "https://greenshift-road.myshopify.com/cdn/shop/files/Battery-icon.svg?v=1694093243",
            image: "https://greenshift-road.myshopify.com/cdn/shop/files/Product11.jpg?v=1698312725",
            imageHover: "https://greenshift-road.myshopify.com/cdn/shop/files/Product11.2.jpg?v=1698312739&width=533"
        },
        {
            name: "Segway - Ninebot Z40X12",
            subtitle: "Efficiency Meets Style",
            description: "The best scooter in the market for a smooth ride",
            duration: "8.50 hrs",
            range: "126 km",
            battery: "77 kWh",
            batteryImg: "https://greenshift-road.myshopify.com/cdn/shop/files/Emission-icon.svg?v=1694095411",
            rangeImg: "https://greenshift-road.myshopify.com/cdn/shop/files/Range-icon.svg?v=16940935943",
            durationImg: "https://greenshift-road.myshopify.com/cdn/shop/files/Battery-icon.svg?v=1694093243",
            image: "https://greenshift-road.myshopify.com/cdn/shop/files/Product1.jpg?v=1698049151",
            imageHover: "https://greenshift-road.myshopify.com/cdn/shop/files/Product1.2.jpg?v=1698049176"
        },
        {
            name: "Electric Scooter",
            subtitle: "Charging Convenience Included",
            description: "The best scooter in the market for a smooth ride",
            duration: "10.30 hrs",
            range: "135 km",
            battery: "80 kWh",
            batteryImg: "https://greenshift-road.myshopify.com/cdn/shop/files/Emission-icon.svg?v=1694095411",
            rangeImg: "https://greenshift-road.myshopify.com/cdn/shop/files/Range-icon.svg?v=1694093594",
            durationImg: "https://greenshift-road.myshopify.com/cdn/shop/files/Battery-icon.svg?v=1694093243",
            image: "https://greenshift-road.myshopify.com/cdn/shop/files/Product12.1.jpg?v=1698312943",
            imageHover: "https://greenshift-road.myshopify.com/cdn/shop/files/Product12.2.jpg?v=1698312943&width=533"
        }
    ];

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
