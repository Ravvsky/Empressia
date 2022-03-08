import classes from "./quote.module.css";
import {useParallax } from "react-scroll-parallax";
import { useSelector } from "react-redux";
const Quote = () => {

  const parallax = useParallax({
    scale: [1, 1.5],
  })

  const language = useSelector((state) => state.language.language);
  const quoteData = useSelector((state)=>state.quote)

  return (
    <section className={classes.container}>
      <div className={classes.wraper }>
        <img
          src={quoteData.background}
          alt="background"
          ref={parallax.ref}
        ></img>
      </div>
      <div className={classes.quote}>
        <p>{quoteData.text[language]}</p>
      </div>
    </section>
  );
};

export default Quote;
