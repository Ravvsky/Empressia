import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import "swiper/css/pagination";
import styled from "styled-components";
import PropTypes from "prop-types";


const ContentWrapper = styled.div`
  font-weight: 600;
  font-family: "Kelson Sans";
  line-height: 5.8rem;
  width: 100%;
  height: 90vh;
  background: black;
`;

const BackgroundWrapper = styled.div`
  height: 90vh;
  opacity: 0.6;

  > img {
    object-position: 25% 55%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Main = styled.main`
  position: absolute;
  bottom: 50%;
  transform: translate(0%, 50%);
  margin-left: 13rem;
  display: flex;
  flex-direction: column;

  > span {
    font-family: "Barlow";
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.7rem;
  }

  @media (max-width: 480px) {
    margin-left: 2rem;
    bottom: 35%;
    > span {
      font-size: 1.2rem;
    }
  }
`;
const Headers = styled.div`
  margin-bottom: 2.8rem;

  > h1 {
    font-family: "Kelson Sans";
    font-size: 7.2rem;
    line-height: 8rem;
    margin: 0;
  }

  > h2 {
    font-family: "Barlow";
    font-weight: 700;
    text-transform: uppercase;
    font-size: 4rem;
    letter-spacing: 2px;
    margin: 0;
  }

  @media(max-width: 480px){
 
    > h1{
      font-size: 5rem;
      line-height: 6rem;
    }

    > h2{
      font-size: 2rem;
    }
  }
`;

const Keypoints = styled.div`
  margin-top: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  line-height: 1.7rem;
  font-size: 1.6rem;

  @media(max-width: 480px){
    div {
      display: flex;
      margin-right: 1.2rem;
    }
}
`;

const IconWrapper = styled.div`
  margin-right: 1.6rem;
  color: #4a5568;
  display: inline-block;
  font-size: 1.6rem;
`;
const Slide = (props) => {
  return (
    <ContentWrapper>
      <BackgroundWrapper>
        <img src={props.background} alt="background"></img>
      </BackgroundWrapper>

      <Main>
        <Headers>
          <h2>{props.topTitle}</h2>
          <h1>{props.bottomTitle}</h1>
        </Headers>
        <span>{props.middleText}</span>
        <Keypoints>
          {props.keypoints.map((item, index) => (
            <div key={index}>
              <IconWrapper>
                <FontAwesomeIcon icon={faCircleCheck} />
              </IconWrapper>
              {item}
            </div>
          ))}
        </Keypoints>
      </Main>
    </ContentWrapper>
  );
};
Slide.propTypes = {
  topTitle: PropTypes.string,
  bottomTitle: PropTypes.string,
  middleText: PropTypes.string,
  keypoints: PropTypes.arrayOf(PropTypes.string)
};
export default Slide;
