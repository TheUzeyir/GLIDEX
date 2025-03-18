import { FaBook } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import style from "./serviceCard.module.css";

const ServiceCard = () => {

    const data = [
        {
            id: 1,
            img: <FaBook className={style.ServiceCard_icon} />,
            title: "Yüksək Keyfiyyətli Dərslər",
            subtitle: "Hər dərsə yüksək texnologiya ilə dəstək veriləcək, bütün dərslər qeydə alınacaq və tələbələrə istədikləri zaman təkrar baxma imkanı tanınacaq."
        },
        {
            id: 2,
            img: <FaClipboardList className={style.ServiceCard_icon} />,
            title: "Real Layihələrdə Təcrübə",
            subtitle: "Tələbələrə real layihələrdə işləmə şansı verilir, bu da gələcəkdə iş bazarına hazırlıqlarını artırır. Qrup şəklində real iş mühiti yaradılır."
        },
        {
            id: 3,
            img: <FaPen className={style.ServiceCard_icon} />,
            title: "Əlavə Ev Tapşırıqları",
            subtitle: "Tələbələrin biliklərini daha da təkmilləşdirmək üçün əlavə ev tapşırıqları təqdim edilir, beləliklə hər bir tələbənin inkişafı izlənilir."
        },
        {
            id: 4,
            img: <FaChalkboardTeacher className={style.ServiceCard_icon} />,
            title: "Təcrübəli Müəllimlərlə Dərslər",
            subtitle: "Sahə üzrə təcrübəli müəllimlər tərəfindən yönləndirilən dərslər, həmçinin laboratoriya və praktiki dərslər, tələbələrə real dünya təcrübəsi qazandırır."
        }
    ];

    return (
        <div className="container">
            <div className={style.ServiceCard}>
                {data.map((item) => (
                    <div className={style.ServiceCard_box} key={item.id}>
                        <div className={style.ServiceCard_icon_container}>
                            {item.img}
                        </div>
                        <h2 className={style.ServiceCard_box_title}>{item.title}</h2>
                        <p className={style.ServiceCard_box_subtitle}>{item.subtitle}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceCard;
