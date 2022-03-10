import Slide from "./Slide";
import { tns } from "tiny-slider";
import { useEffect } from "react";
import "./slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import styled from 'styled-components'

const TravelsWrapper = styled.section`
    margin-top: 216px;
    margin-bottom: 117px;
    position: relative;
    padding-left: 35%;
`


const Travels = () => {
  const language = useSelector((state) => state.language.language);

  const slideData = useSelector((state) => state.travels);

  useEffect(() => {
    const slider = tns({
      container: ".slider-wrapper",
      items: 1.1,
      slideBy: 1,
      mouseDrag: true,
      autoplay: true,
      autoplayTimeout: 4000,
      nav: false,
      autoplayButtonOutput: false,
      controlsContainer: ".arrows",
    });
  }, []);

  return (
    <TravelsWrapper>
      <div className="arrows">
        <button className="arrow left-arrow">
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button className="arrow right-arrow">
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
      <div className="slider-wrapper">
        {slideData.slides.map((item, index) => (
          <Slide
            key={index}
            number={item.number}
            title={item[language].title}
            description={item[language].description}
            image={item.image}
          />
        ))}
      </div>
    </TravelsWrapper>
  );
};

export default Travels;
