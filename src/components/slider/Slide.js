import classes from "./slide.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import "swiper/css/pagination";


const Slide = (props) => {
  return (
    <div className={classes["content-wraper"]}>
      <div className={classes.wraper}>
        <img src={props.background} alt="background"></img>
      </div>

      <main>
        <div className={classes.headers}>
          <h2>{props.topTitle}</h2>
          <h1>{props.bottomTitle}</h1>
        </div>
        <span>{props.middleText}</span>
        <div className={classes.keypoints}>
          {props.keypoints.map((item, index) => (
            
            <div className={classes.keypoint} key={index}>
              <FontAwesomeIcon icon={faCircleCheck} className={classes.icon} />
              {item}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Slide;
