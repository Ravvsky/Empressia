import styled from 'styled-components'


const SlideWrapper = styled.div`
  height: 632px;
  user-select: none;
`
const ImageWrapper = styled.div`
position: relative ;

img{
  width: 632px;
  height: 632px;
  object-fit: cover;
}
`

const Number = styled.span`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-family: "Minion 3 Display", serif;
  font-size: 360px;
  line-height: 525px;
`
const Content = styled.div`
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 380px;
  padding: 70px 148px 70px 74px;
  overflow: hidden;



  span{
    bottom: 70px;
  display: block;
  max-width: 360px;
  width: 360px;
  font-family: "Barlow";
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #767676;
  }
`
const Title = styled.div`
  font-family: "Kelson Sans";
  font-weight: 600;
  font-size: 48px;
  line-height: 58px;
  color: #000000;
  p{
    margin: 0
  }
`



const Slide = (props) => {
  return (
    <SlideWrapper>
      <ImageWrapper>
          <Number>{props.number}</Number>
        <img src={props.image} alt="slide1" ></img>
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

export default Slide;
