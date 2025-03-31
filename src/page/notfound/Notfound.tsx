import HeaderDetskop from '../../layout/header/headerDetskop/HeaderDetskop'
import HeaderResponsive from '../../layout/header/headerResponsive/HeaderResponsive'
import Footer from '../../layout/footer/footerDetskop/Footer'
import FooterResponsive from '../../layout/footer/footerResponsive/FooterResponsive'
import { useNavigate } from 'react-router-dom'
import style from "./notfound.module.css"

const Notfound = () => {

    const navigate=useNavigate()

  return (
    <div className={style.notFound}>
      <HeaderDetskop/>
      <HeaderResponsive/>
        <div className={style.notFoundHeader}>
            <img className={style.notFoundHeaderImg} src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?cs=srgb&dl=pexels-luis-gomes-166706-546819.jpg&fm=jpg" alt="" />
            <h1 className={style.notFoundHeader_text}>Page Not Found</h1>
            <div className={style.notFoundHeader_textBox_navtext}>
                <span className={style.notFoundHeader_textBox_navtext_title} onClick={()=>navigate('/')}>Home</span>/
                <span className={style.notFoundHeader_textBox_navtext_subtitle}>Page Not Found</span>
            </div>
        </div>
        <div className="container">
          <div className={style.notFoundMain}>
              <span className={style.notFoundMain_title}> 404 - Page Not Found</span>
              <span className={style.notFoundMain_subtitle}>The page you are looking for does not exist</span>
              <button className={style.notFoundMain_btn} onClick={()=>navigate('/')}>Back To Home</button>
          </div>
        </div>
      <Footer/>
      <FooterResponsive/>
    </div>
  )
}

export default Notfound
