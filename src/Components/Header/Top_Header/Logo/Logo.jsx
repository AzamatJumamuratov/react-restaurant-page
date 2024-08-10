import classes from "./LogoStyles.module.css";
import logoSVG from "../../../../Assets/Logo.svg";
import logoMini from "../../../../Assets/Logo_mini.svg";

import { useEffect, useRef } from "react";

export default function Logo() {
  const logo = useRef(null);
  let docwidth = document.documentElement.scrollWidth;

  useEffect(() => {
    window.addEventListener("resize", changeLogo);
    function changeLogo() {
      docwidth = document.documentElement.scrollWidth;
      if (docwidth < 678) {
        logo.current.src = logoMini;
      } else {
        logo.current.src = logoSVG;
      }
    }

    return () => document.removeEventListener("resize", changeLogo);
  }, []);

  return (
    <div className={classes.Logo}>
      <img ref={logo} src={docwidth < 678 ? logoMini : logoSVG} alt="logo" />
    </div>
  );
}
