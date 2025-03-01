import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import style from "./autoPlay.module.css";

const AutoPlayCard = () => {
    const progressContent = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100; // Keep it at 100% after completion
                }
                return prev + (100 / 50); // Increase progress every 100ms (2 seconds total)
            });
        }, 100);

        return () => clearInterval(interval);
    }, [activeIndex]);

    const onSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);
        setProgress(0); 
    };

    const data = [
        {
            id: 1,
            title: "Smooth Ride , Go Green With Our Certified E-Vehicles",
            subTitle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, ea.",
            item: "Smooth Ride , Go Green With Our Certified E-Vehicles",
            img: "https://greenshift-road.myshopify.com/cdn/shop/files/Slider_03.jpg?v=1695879954&width=2000",
            btnText: "Read more"
        },
        {
            id: 2,
            title: "Boost Your Business With Our Certified E-Vehicles",
            subTitle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, ea.",
            item: "Smooth Ride , Go Green With Our Certified E-Vehicles",
            img: "https://greenshift-road.myshopify.com/cdn/shop/files/Slider_02.png?v=1698306712&width=2000",
            btnText: "Read more"
        },
        {
            id: 3,
            title: "Smooth Ride , Go Green With Our Certified E-Vehicles",
            subTitle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, ea.",
            item: "Smooth Ride , Go Green With Our Certified E-Vehicles",
            img: "https://greenshift-road.myshopify.com/cdn/shop/files/Slider_01.jpg?v=1695879954&width=20000",
            btnText: "Read more"
        }
    ];

    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        return `<span class="${className} ${index === activeIndex ? style.activeBullet : ''}"></span>`;
                    },
                }}
                navigation={false}
                effect='fade'
                modules={[Autoplay, Pagination, EffectFade]}
                onSlideChange={onSlideChange}
                className="mySwiper"
            >
                {data.map((item, idx) => {
                    const nextIndex = (idx + 1) % data.length;
                    const nextImg = data[nextIndex].img;

                    return (
                        <SwiperSlide key={item.id}>
                            <div className={style.slideContent}>
                                <img src={item.img} alt="Current slide" className={style.slideContentImg} />
                                <div className={style.slideContentTextbox}>
                                    <p className={style.slideContentTextbox_title}>{item.title}</p>
                                    <p className={style.slideContentTextbox_subTitle}>{item.subTitle}</p>
                                    <p className={style.slideContentTextbox_item}>{item.item}</p>
                                    <button className={style.slideContentTextbox_Btn}>{item.btnText}</button>
                                    <div className={style.progresscontainer}>
                                        <div className={style.progressbar} style={{ width: `${progress}%` }} />
                                        <div className={style.timer}>{Math.ceil((2 - (progress / 100) * 2)).toFixed(0)}s</div>
                                    </div>
                                    <img className={style.slideContentTextbox_img} src={nextImg} alt="Next slide" />
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div className={style.swiperContent}>
                <p className={style.swiperContent_title}>{data[activeIndex].title}</p>
                <p className={style.swiperContent_subTitle}>{data[activeIndex].subTitle}</p>
                <button className={style.swiperContent_btn}>{data[activeIndex].btnText}</button>
            </div>
        </div>
    );
};

export default AutoPlayCard;
