import classes from "./slider.module.css";

import { Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./pagination.css";
import "swiper/css";
import "swiper/css/pagination";
import Topbar from "./Topbar";
import Header from "./Header";
import Slide from "./Slide";
import { useSelector } from "react-redux";

const Slider = () => {
  const language = useSelector((state) => state.language.language);
  const slidesData = useSelector((state) => state.slider.slides);

  return (
    <section className={classes.container}>
      <Swiper
        modules={[Pagination, A11y]}
        loop={true}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".pagi",

          renderBullet: function (index, className) {
            let name = "Odkryj wyprawę";
            return `<div class="${className}">${name}  </div>`;
          },
        }}
      >
        <div className={classes.topSection}>
          <Topbar />
          <Header />
        </div>

        {slidesData.map((item, index) => (
          <SwiperSlide key={index}>
            <Slide
              background={item.image}
              topTitle={item[language].topTitle}
              bottomTitle={item[language].bottomTitle}
              middleText={item[language].middleText}
              keypoints={item[language].keypoints}
            />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide> */}
        <div className="pagi-wraper">
          <div className="pagi" />
        </div>
      </Swiper>
    </section>
  );
};

export default Slider;
