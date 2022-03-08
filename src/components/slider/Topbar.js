import { useSelector } from 'react-redux';
import classes from './topbar.module.css'

const Topbar = () => {
  const language = useSelector((state) => state.language.language);
  const topBar = useSelector((state) => state.slider.topBar[language]);

  return (
    <section className={classes.information}>
      <span className={classes.topbar}>
      {topBar}
      </span>
    </section>
  );
};

export default Topbar