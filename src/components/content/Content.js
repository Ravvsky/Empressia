import cursor from "../../img/compass.svg";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ContentWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 328px;
  margin-top: 200px;
  cursor: url(${cursor}), auto;
`;
const LeftSection = styled.section`
  > img {
    max-width: 400px;
    max-height: 584px;
  }
`;
const RightSection = styled.section`
  > h2 {
    font-family: "Kelson Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 72px;
    max-width: 420px;
    text-transform: uppercase;
    color: #000;
  }

  > span {
    font-family: "Barlow";
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    color: #767676;
    max-width: 332px;
    display: block;
    margin-top: 46px;
    margin-bottom: 128px;
  }

  > img {
    max-width: 400px;
    max-height: 584px;
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
