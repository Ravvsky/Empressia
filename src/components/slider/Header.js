import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import logo from "../../img/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { languageActions } from "../../store/language-slice";
import { useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 8.3rem;
  margin-top: 4.6rem;
  display: flex;
  justify-content: space-between;
  font-family: "Barlow";
`;

const Contact = styled.div`
  position: relative;
  top: calc(50% - 1.7rem / 2 - 0.5px);
  font-size: 1.4rem;
  display: flex;
  gap: 2rem;
  margin-left: 13rem;
`;

const Icon = styled.span`
  opacity: 0.56;
`;

const Lang = styled.span`
  display: flex;
  gap: 4px;
  cursor: pointer;
`;

const FAIcon = styled.div`
  opacity: 0.56;
  margin-left: 1rem;
`;

const LanguageChange = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  background-color: white;
  height: fit-content;
  margin-top: 3rem;
  position: relative;
  right: 5rem;
  ${(props) => !props.isVisible && `opacity: 0`}
`;

const LanguageItem = styled.span`
  font-size: 1.4rem;
  font-family: "Barlow";
  font-weight: 600;
  padding: 0.5px 0;
  padding: 1.5rem 2rem;
  &:hover {
    background: rgb(219, 219, 219);
  };
`;


const Logo = styled.div`
  align-self: flex-end;
  margin-right: 18rem;
`;

const Navigation = styled.div`
  position: relative;
  top: calc(50% - 1.7rem / 2 - 0.5px);
  font-family: "Barlow";
  font-size: 1.4rem;
  font-weight: 600;
  display: flex;
  gap: 2rem;
  margin-right: 17rem;
`;
const HamburgerLines = styled.div`
  display: block;
  position: absolute;
  height: 0.8rem;
  width: 1.4rem;
  bottom: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.6rem 2.3rem;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.4);
  cursor: pointer;
`;
const Line = styled.span`
  display: block;
  height: 2px;
  width: 100%;
  border-radius: 1rem;
  background: #4a5568;
`;
const Header = (props) => {
  
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);

  const [isVisible, setIsVisible] = useState(false);
  const languageChangeHandler = (test) => {
    
    dispatch(languageActions.change(test));
    setIsVisible(false);
  };

  const languageVisibilityHandler = () => {
    setIsVisible(!isVisible);
  };
  return (
    <HeaderContainer>
      <Contact>
        <div>
          <Icon>t:</Icon>
          <span> 000 000 000</span>
        </div>
        <div>
          <Icon>m:</Icon>
          <span> biuro@nupowerhouse.pl</span>
        </div>
        <Lang onClick={languageVisibilityHandler}>
          <span>{language}</span>
          <FAIcon>
            <FontAwesomeIcon icon={faAngleDown} />
          </FAIcon>

          <LanguageChange isVisible={isVisible}>
            <LanguageItem alias={"PL"} onClick={languageChangeHandler.bind(null, 'PL')}>
              Polish
            </LanguageItem>
            <LanguageItem alias={"EN"} onClick={languageChangeHandler.bind(null, 'EN')}>
              English
            </LanguageItem>
            <LanguageItem alias={"RU"} onClick={languageChangeHandler.bind(null, 'RU')}>
              Russian
            </LanguageItem>
          </LanguageChange>
        </Lang>
      </Contact>

      <Logo>
        <img src={logo} alt="NuPowerHouse logo"></img>
      </Logo>

      <Navigation>
        <span>NuPower</span>
        <div>
          <HamburgerLines>
            <Line />
            <Line />
          </HamburgerLines>
        </div>
      </Navigation>
    </HeaderContainer>
  );
};
export default Header;
