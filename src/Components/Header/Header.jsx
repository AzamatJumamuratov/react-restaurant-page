import classes from "./HeaderStyles.module.css";
import Intro from "./Intro/Intro";
import Navigation from "./Top_Header/Navigation";

export default function Header({ derivedClassName }) {
  return (
    <header id="header" className={classes.Header}>
      <Navigation />
      <Intro derivedClassName={derivedClassName} />
    </header>
  );
}
