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
                    <h2 className={`${classes.text} ${classes.first}`} ref={textToLeft.ref}>{text}</h2>
                    <h2 className={`${classes.text} ${classes.second}`} ref={textToRight.ref}>{text}</h2>

      </section>

  );
};

export default Tagline;
