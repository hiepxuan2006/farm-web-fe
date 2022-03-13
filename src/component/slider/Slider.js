import React from "react";
import "./Slider.scss";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { baseURL } from "../../Context/ContTant";
function Slider(props) {
  SwiperCore.use([Autoplay]);
  const params = {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
    },
  };
  const imgslide = [
    `${baseURL}/slider_1.webp`,
    `${baseURL}/slider_3.jpg`,
    `${baseURL}/slider_2.jpg`,
  ];
  return (
    <div className="slider">
      <div className="slider__baner">
        <Swiper {...params}>
          {imgslide.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className="slider__desc"
                style={{ backgroundImage: `url(${item})` }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
