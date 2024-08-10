import { useEffect } from "react";
import Button from "../../../../Leaf Components/Button/Button";
import classes from "./PointerStyles.module.css";
import arrow_icon from "../../../../../Assets/arrow_up.svg";

export default function Pointer() {
  let scrollTop = window.scrollY;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    function handleScroll() {
      scrollTop = window.scrollY;

      let pointer = document.querySelector(`.${classes.pointer}`);

      if (scrollTop > 800) {
        pointer.classList.remove(classes.hide);
      } else {
        pointer.classList.add(classes.hide);
      }
    }
  });
  return (
    <Button
      className={classes.pointer + ` ${classes.hide}`}
      onClick={() =>
        document.getElementById("header").scrollIntoView({ behavior: "smooth" })
      }
    >
      <img src={arrow_icon} width={15} height={15} />
    </Button>
  );
}
