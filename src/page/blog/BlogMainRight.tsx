import style from "./blog.module.css"
import { GoClockFill } from "react-icons/go";

const BlogMainRight = () => {
  return (
    <div className={style.blogMainRight} data-aos="fade-down">
    <div className={style.blogMainRight_searchBox}>
      <input className={style.blogMainRight_searchBox_input} placeholder="Seminar Axtar" type="search" />
    </div>
    <div className={style.blogMainRight_comingNew}>
      <h2 className={style.blogMainRight_comingNew_title}>Gelecekde Olacaq Seminarlar</h2>
      <div className={style.blogMainRight_comingNew_item}>
        <img className={style.blogMainRight_comingNew_item_img} src="https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/ed-blog-11.jpg" alt="" />
        <div className={style.blogMainRight_comingNew_item_Box}>
          <h3 className={style.blogMainRight_comingNew_item_title}>Student Achievement Best Practice for</h3>
          <p className={style.blogMainRight_comingNew_item_subtitle}><GoClockFill/> 12. Dec, 2024</p>
        </div>
      </div>
      <div className={style.blogMainRight_comingNew_item}>
        <img className={style.blogMainRight_comingNew_item_img} src="https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/ed-blog-11.jpg" alt="" />
        <div className={style.blogMainRight_comingNew_item_Box}>
          <h3 className={style.blogMainRight_comingNew_item_title}>Student Achievement Best Practice for</h3>
          <p className={style.blogMainRight_comingNew_item_subtitle}><GoClockFill/> 12. Dec, 2024</p>
        </div>
      </div>
      <div className={style.blogMainRight_comingNew_item}>
        <img className={style.blogMainRight_comingNew_item_img} src="https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/ed-blog-11.jpg" alt="" />
        <div className={style.blogMainRight_comingNew_item_Box}>
          <h3 className={style.blogMainRight_comingNew_item_title}>Student Achievement Best Practice for</h3>
          <p className={style.blogMainRight_comingNew_item_subtitle}><GoClockFill/> 12. Dec, 2024</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BlogMainRight
