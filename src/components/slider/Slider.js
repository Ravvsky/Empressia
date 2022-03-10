
import { Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./pagination.css";
import "swiper/css";
import "swiper/css/pagination";
import Topbar from "./Topbar";
import Header from "./Header";
import Slide from "./Slide";
import { useSelector } from "react-redux";
import styled from 'styled-components'

const TopSection = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
`


const Slider = () => {
  const language = useSelector((state) => state.language.language);
  const slidesData = useSelector((state) => state.slider.slides);

  return (
    <section>
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
        <TopSection>
          <Topbar />
          <Header />
        </TopSection>

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
     
        <div className="pagi-wraper">
          <div className="pagi" />
        </div>
      </Swiper>
    </section>
  );
};

export default Slider;
