import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import classes from "./header.module.css";
import logo from "../../img/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { languageActions } from "../../store/language-slice";
import { useState } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);

  const [isVisible, setIsVisible] = useState(false);
  const languageChangeHandler = (value) => {
    dispatch(languageActions.change(value.target.getAttribute("alias")));
    setIsVisible(false);
  };

  const languageVisibilityHandler = () => {
    setIsVisible(!isVisible);
  };
  return (
    <header>
      <div className={classes.contact}>
        <div>
          <span className={classes.icon}>t:</span>
          <span> 000 000 000</span>
        </div>
        <div>
          <span className={classes.icon}>m:</span>
          <span> biuro@nupowerhouse.pl</span>
        </div>
        <div className={classes.lang} onClick={languageVisibilityHandler}>
          <span>{language}</span>
          <FontAwesomeIcon
            icon={faAngleDown}
            className={classes.fontawesomeicon}
          />
          <div
            className={`${classes.languageChange} ${
              !isVisible && classes.invisible
            }`}
          >
            <span alias={"PL"} onClick={languageChangeHandler}>
              Polish
            </span>
            <span alias={"EN"} onClick={languageChangeHandler}>
              English
            </span>
            <span alias={"RU"} onClick={languageChangeHandler}>
              Russian
            </span>
          </div>
        </div>
      </div>

      <div className={classes.logo}>
        <img src={logo} alt="NuPowerHouse logo"></img>
      </div>

      <div className={classes.nav}>
        <span>NuPower</span>
        <div className={classes.hamburger}>
          <div className={classes["hamburger-lines"]}>
            <span className={`${classes.line} ${classes.line1}`}></span>
            <span className={`${classes.line} ${classes.line2}`}></span>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
