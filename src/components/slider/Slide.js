
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import "swiper/css/pagination";
import styled from "styled-components";

const ContentWrapper = styled.div`
  font-weight: 600;
  font-family: "Kelson Sans";
  line-height: 58px;
  width: 100%;
  height: 90vh;
  background: black;
`;

const BackgroundWrapper = styled.div`
  height: 90vh;
  opacity: 0.6;

  > img {
    object-position: 25% 55%;
  }
`;

const Main = styled.main`
  position: absolute;
  bottom: 50%;
  transform: translate(0%, 50%);
  margin-left: 130px;
  display: flex;
  flex-direction: column;

  > span {
    font-family: "Barlow";
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
  }
`;
const Headers = styled.div`
  margin-bottom: 28px;

  > h1 {
    font-family: "Kelson Sans";
    font-size: 72px;
    line-height: 80px;
    margin: 0;
  }

  > h2 {
    font-family: "Barlow";
    font-weight: 700;
    text-transform: uppercase;
    font-size: 40px;
    letter-spacing: 2px;
    margin: 0;
  }
`;

const Keypoints = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  line-height: 17px;
`;

const IconWrapper = styled.div`
  margin-right: 16px;
  color: #4a5568;
  display: inline-block ;
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
                <FontAwesomeIcon
                  icon={faCircleCheck}
                />
              </IconWrapper>
              {item}
            </div>
          ))}
        </Keypoints>
      </Main>
    </ContentWrapper>
  );
};

export default Slide;
