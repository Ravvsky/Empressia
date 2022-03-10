import { useSelector } from "react-redux";
import styles from "styled-components";

const Text = styles.span`
position: relative;
top: calc(50% - 17px / 2 - 0.5px);
`;

const Wrapper = styles.section`
min-height: 5vh;
background-color: rgba(0, 0, 0, 0.4);
border-bottom: 2px #4a5568 solid;
color: #fff;
text-align: center;
height: 5vh;
font-family: "Barlow", sans-serif;
font-weight: 600;
font-size: 14px;
line-height: 17px;

margin-left: -130px;
margin-right: -100px;
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
