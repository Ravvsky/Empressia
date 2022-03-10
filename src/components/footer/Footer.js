import Navigation from "./Navigation";
import oval from "../../img/oval.svg";
import arrow from "../../img/chevron-left.svg";
import logo from "../../img/empressia-logo.svg";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { languageActions } from "../../store/language-slice";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #2a2a2a;
  padding-left: 13rem;
  padding-top: 15rem;
  padding-bottom: 15rem;

  font-family: "Barlow";
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.7rem;

  a:visited {
    color: #fff;
  }
`;

const TopSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding-bottom: 7rem;
`;

const Header = styled.span`
  font-family: "Kelson Sans";
  font-weight: 600;
  font-size: 4rem;
  line-height: 4.8rem;
  max-width: 30rem;
`;

const Socials = styled.div`
  a {
    margin-right: 2rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.24);
  }
  a:hover {
    color: rgba(255, 255, 255, 0.75);
  }
`;

const LanguageWrapper = styled.div`
  padding-right: 13rem;
`;

const LanguageItem = styled.span`
  padding-right: 2rem;
  user-select: none;
  cursor: pointer;
  opacity: 0.32;

  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
  &:hover {
    opacity: 1;
  }
`;

const MiddleSection = styled.section`
  display: flex;
  justify-content: space-between;
`;
const OvalWrapper = styled.div`
  position: relative;
  margin-right: 13rem;

  > * {
    &:nth-child(2) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const BottomSection = styled.section`
  position: relative;
  display: flex;
  top: 10rem;
  justify-content: space-between;
`;
const Copyrights = styled.div`
  span {
    padding-right: 3rem;
  }
`;
const Credits = styled.div`
  padding-right: 13rem;

  span {
    font-family: "Barlow";
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.7rem;
    padding-right: 1.5rem;
  }
`;
const Footer = () => {
  const dispatch = useDispatch();

  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  const language = useSelector((state) => state.language.language);
  const title = useSelector((state) => state.footer[language].title);
  const firstTab = useSelector((state) => state.footer[language].firstTab);
  const secondTab = useSelector((state) => state.footer[language].secondTab);
  const thirdTab = useSelector((state) => state.footer[language].thirdTab);
  const fourthTab = useSelector((state) => state.footer[language].fourthTab);

  const languageChangeHandler = (value) => {
    dispatch(languageActions.change(value.target.innerText));
  };

  useEffect(() => {
    setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);
  }, []);

  return (
    <FooterWrapper>
      <TopSection>
        <Header>{title}</Header>
        <Socials>
          <a href="/">Facebook</a>
          <a href="/">Instagram</a>
        </Socials>
        <LanguageWrapper>
          <LanguageItem
            active={language === "PL"}
            onClick={languageChangeHandler}
          >
            PL
          </LanguageItem>
          <LanguageItem
            active={language === "EN"}
            onClick={languageChangeHandler}
          >
            EN
          </LanguageItem>
          <LanguageItem
            active={language === "RU"}
            onClick={languageChangeHandler}
          >
            RU
          </LanguageItem>
        </LanguageWrapper>
      </TopSection>

      <MiddleSection>
        <Navigation
          title={firstTab.title}
          links={firstTab.names.map((item, index) => ({
            link: item,
            id: index,
          }))}
        />
        <Navigation
          title={secondTab.title}
          links={secondTab.names.map((item, index) => ({
            link: item,
            id: index,
          }))}
        />
        <Navigation
          title={thirdTab.title}
          links={thirdTab.names.map((item, index) => ({
            link: item,
            id: index,
          }))}
        />
        <Navigation
          title={fourthTab.title}
          links={thirdTab.names.map((item, index) => ({
            link: item,
            id: index,
          }))}
        />

        <OvalWrapper>
          <img src={oval} alt="oval"></img>
          <img src={arrow} alt="arrow"></img>
        </OvalWrapper>
      </MiddleSection>

      <BottomSection>
        <Copyrights>
          <span>&#169; 2020 NuPowerHouse - all rights reserved.</span>
          <span>
            {language === "PL"
              ? "Polityka prywatności"
              : language === "EN"
              ? "Privacy policy"
              : "политика конфиденциальности"}
          </span>
        </Copyrights>
        <Credits>
          <span>&#8901; {time}</span>
          <span>
            {language === "PL"
              ? "Realizacja"
              : language === "EN"
              ? "Realization"
              : "реализация"}
          </span>
          <img src={logo} alt="empressia logo"></img>
        </Credits>
      </BottomSection>
    </FooterWrapper>
  );
};

export default Footer;
