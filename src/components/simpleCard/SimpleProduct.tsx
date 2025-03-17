import style from './simpleProduct.module.css'

const SimpleProduct = () => {
  return (
    <div className='container'>
        <div className={style.simpleProduct}>
            <h2 className={style.simpleProduct_title}>Yeni karyeranıza doğru ilk addımı atın</h2>
            <p className={style.simpleProduct_subtitle}>Peşəkar səviyyədə təlim alın və aparıcı şirkətlər tərəfindən tanınan etimadnamə qazanın.</p>
             <img className={style.simpleProduct_img} src="https://www.cio.com/wp-content/uploads/2025/03/222343-0-05220400-1741291792-certificate-programs-gorodenkoff-shutterstock_2102457331.jpg?quality=50&strip=all&w=1024" alt="" />
        </div>
    </div>
  )
}

export default SimpleProduct
