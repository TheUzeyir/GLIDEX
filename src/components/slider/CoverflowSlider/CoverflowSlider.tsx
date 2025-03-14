import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import style from "./CoverflowSlider.module.css";

export default function App() {
  const testimonials = [
    {
      name: "John Smith",
      location: "New York, NY",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 5,
      review:
        "The AeroGlide X1 is a superb electric scooter. It's agile, and the battery life is excellent. I'm zipping around town with ease!",
    },
    {
      name: "Lisa Anderson",
      location: "San Francisco, CA",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
      review:
        "I've paired my AquaSync Smart Water Bottle with my scooter. It's the perfect hydration companion on long rides. I love the reminders!",
    },
    {
      name: "Michael Chan",
      location: "Chicago, IL",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 5,
      review:
        "The HyperTron V2 is my dream scooter. It's sleek, powerful, and takes me wherever I want to go. The speed is exhilarating!",
    },
    {
      name: "Sarah Lee",
      location: "Los Angeles, CA",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 5,
      review:
        "This e-bike has changed my daily commute. Fast, reliable, and stylish. Absolutely love it!",
    },
    {
      name: "James Carter",
      location: "Miami, FL",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      rating: 5,
      review:
        "The best investment I’ve made for my commute. The ride is smooth, and the design is top-notch!",
    },
  ];
 
  let slides = [];
  for (let i = 0; i < testimonials.length; i++) {
    slides.push(
      <SwiperSlide key={testimonials[i].name} className={style.swiperSlide}>
        <div className={style.slideContent}>
          <img src={testimonials[i].image} alt={testimonials[i].name} className={style.avatar} />
          <h3 className={style.name}>{testimonials[i].name}</h3>
          <i className={style.location}>{testimonials[i].location}</i>
          <p className={style.review}>"{testimonials[i].review}"</p>
        </div>
      </SwiperSlide>
    );
  }

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      slidesPerView={3} 
      spaceBetween={20}
      
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination]}
      className={style.mySwipers}
    >
      {slides}
    </Swiper>
  );
}
