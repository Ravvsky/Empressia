import classes from "./content.module.css";

import { useSelector } from "react-redux";
const Content = () => {
  const language = useSelector((state) => state.language.language);

  const contentData = useSelector((state) => state.content);
  return (
    <section className={classes.content}>
      <section className={classes["left-section"]}>
        <img src={contentData.images[0]} alt="travel1"></img>
      </section>
      <section className={classes["right-section"]}>
        <h1>{contentData[language].title}</h1>
        <span>
          {contentData[language].description}
        </span>
        <img src={contentData.images[1]} alt="travel2"></img>
      </section>
    </section>
  );
};

export default Content;
