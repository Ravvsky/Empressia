import { useParallax } from "react-scroll-parallax";
import { useSelector } from "react-redux";

import styled from "styled-components";

const Container = styled.section`
  position: relative;
  text-align: center;
  color: white;
  height: 60rem;
  margin-bottom: 10rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BackgroundWrapper = styled.div`
  overflow: hidden;
  height: 60rem;
`;

const QuoteWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Kelson Sans";
  font-weight: 600;
  font-size: 4.8rem;
  line-height: 5.8rem;
  max-width: 90rem;

  p {max-width: 63rem}
`;

const Quote = () => {
  const parallax = useParallax({
    scale: [1, 1.5],
  });

  const language = useSelector((state) => state.language.language);
  const quoteData = useSelector((state) => state.quote);

  return (
    <Container>
      <BackgroundWrapper>
        <img
          src={quoteData.background}
          alt="background"
          ref={parallax.ref}
        ></img>
      </BackgroundWrapper>
      <QuoteWrapper>
        <p>{quoteData.text[language]}</p>
      </QuoteWrapper>
    </Container>
  );
};

export default Quote;
