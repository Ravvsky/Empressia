import classes from "./footer.module.css";
import Navigation from "./Navigation";
import oval from "../../img/oval.svg";
import arrow from "../../img/chevron-left.svg";
import logo from "../../img/empressia-logo.svg";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { languageActions } from "../../store/language-slice";
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
    <footer>
      <section className={classes.topSection}>
        <span className={classes.header}>{title}</span>
        <div className={classes.socials}>
          <a href="/">Facebook</a>
          <a href="/">Instagram</a>
        </div>
        <div className={classes.lang}>
          <span
            className={`${classes["lang-item"]} ${
              language === "PL" ? classes.active : classes.inactive
            } `}
            onClick={languageChangeHandler}
          >
            PL
          </span>
          <span
            className={`${classes["lang-item"]} ${
              language === "EN" ? classes.active : classes.inactive
            } `}
            onClick={languageChangeHandler}
          >
            EN
          </span>
          <span
            className={`${classes["lang-item"]} ${
              language === "RU" ? classes.active : classes.inactive
            } `}
            onClick={languageChangeHandler}
          >
            RU
          </span>
        </div>
      </section>

      <section className={classes.middleSection}>
        <Navigation
          title={firstTab.title}
          links={firstTab.names.map((item, index) => ({ link: item, id: index }))}
        />
        <Navigation title={secondTab.title} links={secondTab.names.map((item, index) => ({ link: item, id: index }))} />
        <Navigation
          title={thirdTab.title}
          links={thirdTab.names.map((item, index) => ({ link: item, id: index }))}        />
        <Navigation
          title={fourthTab.title}
          links={thirdTab.names.map((item, index) => ({ link: item, id: index }))}        />


        <div className={classes["oval-wrapper"]}>
          <img src={oval} alt="oval"></img>
          <img src={arrow} alt="arrow" className={classes.arrow}></img>
        </div>
      </section>

      <section className={classes.bottomSection}>
        <div className={classes.copyrights}>
          <span>&#169; 2020 NuPowerHouse - all rights reserved.</span>
          <span> {language==='PL' ? 'Polityka prywatności' : language==='EN' ? 'Privacy policy' : 'политика конфиденциальности'}</span>
        </div>
        <div className={classes.credits}>
          <span>&#8901; {time}</span>
          <span>{language==='PL' ? 'Realizacja' : language==='EN' ? 'Realization' : 'реализация'}</span>
          <img src={logo} alt="empressia logo"></img>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
