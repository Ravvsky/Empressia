import cursor from "../../img/compass.svg";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ContentWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32.8rem;
  margin-top: 20rem;
  margin-bottom: 20rem;
  cursor: url(${cursor}), auto;

  @media(max-width: 480px){

    gap: 5rem;
    flex-direction: column;
    margin-top: 10rem;
    margin-bottom: 10rem;
  }
`;
const LeftSection = styled.section`
  > img {
    max-width: 40rem;
    max-height: 58.4rem;

    @media(max-width: 480px){
      max-width: 100%;
      width: 35rem;
      margin: 0 auto;
    }
  }
`;
const RightSection = styled.section`
  > h2 {
    font-family: "Kelson Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 6.4rem;
    line-height: 7.2rem;
    max-width: 42rem;
    text-transform: uppercase;
    color: #000;
  }

  > span {
    font-family: "Barlow";
    font-weight: 500;
    font-size: 2rem;
    line-height: 3.2rem;
    color: #767676;
    max-width: 33.2rem;
    display: block;
    margin-top: 4.6rem;
    margin-bottom: 12.8rem;
  }

  > img {
    max-width: 40rem;
    max-height: 58.4rem;
  }

  @media(max-width: 480px){

    >h2{
      font-size: 5rem;
      max-width: 40rem;
      margin-left: 3rem;
      margin-right: 3rem;
    }

    >span{
      font-size: 1.8rem;
      margin-left: 3rem;
      margin-right: 3rem;
    }

    > img{
      max-width: 100%;
      width: 35rem;
      display: block;
      margin: 0 auto

    }
  }
`;

const Content = () => {
  const language = useSelector((state) => state.language.language);

  const contentData = useSelector((state) => state.content);
  return (
    <ContentWrapper>
      <LeftSection>
        <img src={contentData.images[0]} alt="travel1"></img>
      </LeftSection>
      <RightSection>
        <h2>{contentData[language].title}</h2>
        <span>{contentData[language].description}</span>
        <img src={contentData.images[1]} alt="travel2"></img>
      </RightSection>
    </ContentWrapper>
  );
};

export default Content;
