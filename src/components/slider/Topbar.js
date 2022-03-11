import { useSelector } from "react-redux";
import styled from "styled-components";

const Text = styled.span`
position: relative;
top: calc(50% - 1.7rem / 2 - 0.5px);
`;

const Wrapper = styled.section`
min-height: 5vh;
background-color: rgba(0, 0, 0, 0.4);
border-bottom: 2px #4a5568 solid;
color: #fff;
text-align: center;
height: 5rem;
font-family: "Barlow", sans-serif;
font-weight: 600;
font-size: 1.4rem;
line-height: 1.7rem;
margin-right: -10rem;

@media(max-width: 480px){
  margin-right: initial;
  font-size: 1.2rem;
}
`

const Topbar = () => {
  const language = useSelector((state) => state.language.language);
  const topBar = useSelector((state) => state.slider.topBar[language]);

  return (
    <Wrapper>
      <Text>{topBar}</Text>
    </Wrapper>
  );
};



export default Topbar;
