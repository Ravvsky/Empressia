import classes from "./slide.module.css";
const Slide = (props) => {
  return (
    <div className={classes.slide}>
      <div className={classes["img-wrapper"]}>
          <span className={classes.number}>{props.number}</span>
        <img src={props.image} alt="slide1" className={classes["slide-img"]}></img>
        <div className={`${classes.content} ${classes['active-slide']}`}>
            <div className={classes.title}>
                <p>{props.title}</p>
                </div>
            <span className={classes.description}>{props.description}</span>
        </div>
      </div>
    </div>
  );
};

export default Slide;
