import classes from "./tagline.module.css";
import { useParallax } from "react-scroll-parallax";
const Tagline = () => {
  const text =
    "You dream it. We plan it. — You dream it. We plan it. — You dream it. We plan it.";

    const textToLeft = useParallax({
     translateX: ['-50px', '-200px'],
    })
    const textToRight = useParallax({
      translateX: ['-700px', '-200px'],
     })

  return (
      <section>
                    <h1 className={`${classes.text} ${classes.first}`} ref={textToLeft.ref}>{text}</h1>
                    <h1 className={`${classes.text} ${classes.second}`} ref={textToRight.ref}>{text}</h1>

      </section>

  );
};

export default Tagline;
