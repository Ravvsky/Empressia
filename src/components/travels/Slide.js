import styled from "styled-components";
import PropTypes from "prop-types";

const SlideWrapper = styled.div`
  height: 632px;
  user-select: none;
`;
const ImageWrapper = styled.div`
  position: relative;

  img {
    width: 63.2rem;
    height: 63.2rem;
    object-fit: cover;
  }
`;

const Number = styled.span`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-family: "Minion 3 Display", serif;
  font-size: 36rem;
  line-height: 52.5rem;

  @media (max-width: 480px) {
    display: none;
  }
`;
const Content = styled.div`
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  width: 30rem;
  height: 38rem;
  padding: 7rem 14.8rem 7rem 7.4rem;
  overflow: hidden;

  span {
    bottom: 7rem;
    display: block;
    max-width: 36rem;
    width: 36rem;
    font-family: "Barlow";
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 3rem;
    color: #767676;
  }

  @media(max-width: 480px){
    padding: 2rem;
    width: 30rem;
    height: 30rem;
    span {
      max-width: 27rem;
      font-size: 1.4rem;
      line-height: 2.4rem;
    }
  }

`;
const Title = styled.div`
  font-family: "Kelson Sans";
  font-weight: 600;
  font-size: 4.8rem;
  line-height: 5.8rem;
  color: #000000;
  p {
    margin: 0;
  }

  @media(max-width: 480px){
    font-size: 2.4rem;
    line-height: 1.5;
    margin-bottom: 2rem;
  }
`;

const Slide = (props) => {
  return (
    <SlideWrapper>
      <ImageWrapper>
        <Number>{props.number}</Number>
        <img src={props.image} alt="slide1"></img>
        <Content>
          <Title>
            <p>{props.title}</p>
          </Title>
          <span>{props.description}</span>
        </Content>
      </ImageWrapper>
    </SlideWrapper>
  );
};

Slide.propTypes = {
  number: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
export default Slide;
