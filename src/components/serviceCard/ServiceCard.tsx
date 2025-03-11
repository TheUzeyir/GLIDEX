import { FaRegCreditCard } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6"
import { FaHeadset } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import style from "./serviceCard.module.css"

const ServiceCard = () => {

    const data =[
        {
            id:1,
            img:<FaTruckFast className={style.ServiceCard_icon}/>,
            title:"Fastest Delivery",
            subtitle:"Delivery ordered within 24 hours"
        },
        {
            id:2,
            img:<FaRegCreditCard className={style.ServiceCard_icon}/>,
            title:"Secure Payments",
            subtitle:"Payment protected by billdesk pro"
        },
        {
            id:3,
            img:<FaHeadset className={style.ServiceCard_icon}/>,
            title:"24*7 Support",
            subtitle:"Customer service active 24*7 all-over"
        },
        {
            id:4,
            img:<FaBoxOpen className={style.ServiceCard_icon}/>,
            title:"Trustworthy service ",
            subtitle:"Trustworthy and reliable service provider"
        }
    ]

  return (
    <div className="container">
        <div className={style.ServiceCard}>
            {
                data.map((item)=>(
                    <div className={style.ServiceCard_box} key={item.id}>
                        {item.img}
                        <h2 className={style.ServiceCard_box_title}>{item.title}</h2>
                        <p className={style.ServiceCard_box_subtitle}>{item.subtitle}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ServiceCard