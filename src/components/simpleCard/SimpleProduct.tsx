import style from './simpleProduct.module.css'

const SimpleProduct = () => {
  return (
    <div className='container'>
        <div className={style.simpleProduct}>
            <h2 className={style.simpleProduct_title}>Spark Your Ride With Electric Power</h2>
            <p className={style.simpleProduct_subtitle}>With electric power shaping the future of the globe, explore our most reliable products now.</p>
             <img className={style.simpleProduct_img} src="https://greenshift-road.myshopify.com/cdn/shop/files/ev-b1.5.jpg?v=1693398183&width=2000" alt="" />
        </div>
    </div>
  )
}

export default SimpleProduct
