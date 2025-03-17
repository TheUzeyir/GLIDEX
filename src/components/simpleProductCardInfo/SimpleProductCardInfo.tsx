import { useState, useEffect } from 'react';
import style from "./simpleProductCardInfo.module.css";
import data from "../../json/data.json"; 

const shuffleArray = <T,>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
};

const SimpleProductCardInfo = () => {
    const [randomCourses, setRandomCourses] = useState<typeof data>([]);

    
    useEffect(() => {
        setRandomCourses(shuffleArray(data).slice(0, 3));
    }, []);

    const handleCardClick = (id: number) => {
        console.log(`Clicked card ID: ${id}`);
    };

    return (
        <div className={style.productCard_main}>
            <div className='container'>
                <h2 className={style.productCard_main_title}>Bizim ən yaxşı IT kurslarımızı kəşf et</h2>
                <p className={style.productCard_main_subtitle}>Karyerana uyğun mükəmməl IT kursunu seç</p>
                <div className={style.productCard_container}>
                    {randomCourses.map((course) => (
                        <div 
                            className={style.productCard} 
                            key={course.id} 
                            onClick={() => handleCardClick(course.id)}
                        >
                            <img 
                                src={course.image} 
                                alt={course.name} 
                                className={style.productCard_mainImg}
                            />
                            <div className={style.productCard_info}>
                                <h3 className={style.productCard_title}>{course.name}</h3>
                                <p className={style.productCard_subtitle}>{course.subtitle}</p>
                                <div className={style.productCard_info_Box}>
                                    <div className={style.productCard_info_card}>
                                        <strong className={style.productCard_info_card_title}>Müddət:</strong> 
                                        <span>{course.courseDuration}</span>   
                                    </div>
                                    <div className={style.productCard_info_card}>
                                        <strong className={style.productCard_info_card_title}>Qiymət:</strong> 
                                        <span>{course.price} AZN</span>
                                    </div>
                                    <div className={style.productCard_info_card}>
                                        <strong className={style.productCard_info_card_title}>Çətinlik səviyyəsi:</strong> 
                                        <span>{course.difficultyLevel}</span>
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
