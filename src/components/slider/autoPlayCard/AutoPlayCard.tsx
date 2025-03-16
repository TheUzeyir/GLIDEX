import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import style from "./autoPlay.module.css";

const AutoPlayCard = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + (100 / 50); 
            });
        }, 100);

        return () => clearInterval(interval);
    }, [activeIndex]);

    const onSlideChange = (swiper: SwiperType) => {
        setActiveIndex(swiper.activeIndex);
        setProgress(0);
    };    

    const data = [
        {
            "id": 1,
            "title": "Effektiv Komanda İşi",
            "subTitle": "Uğurlu layihələr üçün güclü komanda ruhu və effektiv əməkdaşlıq qur.",
            "item": "Komanda ilə işləmə bacarıqlarını inkişaf etdir və məqsədlərə birlikdə çat",
            "img": "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "btnText": "Kurslarım"
        },
        {
            "id": 2,
            "title": "Yüksək Səviyyəli Təhsil",
            "subTitle": "Müasir tədris metodları və peşəkar müəllimlərlə gələcəyini formalaşdır.",
            "item": "İnnovativ təhsil yanaşmaları ilə biliklərini genişləndir və uğura aparan yolu kəşf et.",
            "img": "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?cs=srgb&dl=pexels-divinetechygirl-1181271.jpg&fm=jpg",
            "btnText": "Təhsilə Başla"
        },        
        {
            "id": 3,
            "title": "Süni İntellekt ilə Gələcəyini Qur",
            "subTitle": "Süni intellektin gücü ilə innovasiyalara addım at. Öyrən, inkişaf et və gələcəyini formalaşdır!",
            "item": "Süni intellekt texnologiyaları ilə karyeranı zirvəyə daşı",
            "img": "https://images.pexels.com/photos/6153752/pexels-photo-6153752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "btnText": "AI Kurslarım"
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
                                    <div className={style.slideContentTextboxs}>
                                        <p className={style.slideContentTextbox_title}>{item.title}</p>
                                        <p className={style.slideContentTextbox_subTitle}>{item.subTitle}</p>
                                        <p className={style.slideContentTextbox_item}>{item.item}</p>
                                    </div>
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