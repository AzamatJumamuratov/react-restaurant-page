import classes from "./LinksStyles.module.css";
import cart_icon from "../../../../Assets/cart.svg";
import burger_img from "../../../../Assets/burger.svg";
import Anchor from "../../../Leaf Components/Anchor/Anchor";
import Button from "../../../Leaf Components/Button/Button";
import { useEffect, useRef, useState } from "react";
import SideBar from "./SideBar/SideBar";
import Pointer from "./Pointer/Pointer";

export default function Links() {
  const [menu, setMenu] = useState(false);
  const menuList = useRef(null);
  let docWidth = document.documentElement.scrollWidth;
  let scrollTop = window.scrollY;

  useEffect(() => {
    let scrollStart = false;
    window.addEventListener("resize", MenuOnResize);
    document.addEventListener("mousedown", HandleMouseDown);
    window.addEventListener("scroll", HandleScroll);
    window.addEventListener("scrollend", HandleScrollEnd);
    return () => {
      window.removeEventListener("resize", MenuOnResize);
      document.removeEventListener("mousedown", HandleMouseDown);
      window.removeEventListener("scroll", HandleScroll);
      window.removeEventListener("scrollend", HandleScrollEnd);
    };

    function MenuOnResize() {
      docWidth = document.documentElement.scrollWidth;
      if (docWidth > 950) {
        setMenu(true);
      } else {
        setMenu(false);
      }
    }

    function HandleMouseDown(e) {
      let logic = !e.target.closest(
        `.${classes.list}, .${classes.burger_btn}, .${classes.sidebar}`
      );

      console.log(logic);

      if (logic) {
        HideMenu();
      }
    }

    function HandleScroll() {
      scrollTop = window.scrollY;

      if (!scrollStart) {
        scrollStart = true;
        HideMenu();
      }
    }

    function HideMenu() {
      if (docWidth < 950) {
        setMenu(false);
      }
    }

    function HandleScrollEnd() {
      scrollStart = false;
    }
  }, []);

  return (
    <>
      <Button className={classes.burger_btn} onClick={() => setMenu(!menu)}>
        <img className={classes.burger} src={burger_img} />
      </Button>

      {((docWidth < 950 && menu) || docWidth > 950) && (
        <ul ref={menuList} className={classes.list}>
          <li>
            <Anchor href="#">ГЛАВНАЯ</Anchor>
          </li>
          <li>
            <Anchor href="#">МЕНЮ</Anchor>
          </li>
          <li>
            <Anchor href="#">О НАС</Anchor>
          </li>
          <li>
            <Anchor href="#">БРОНЬ</Anchor>
          </li>
          <li>
            <Anchor href="#">
              <img src={cart_icon} alt="" />
            </Anchor>
          </li>
        </ul>
      )}

      {docWidth < 678 && menu && <SideBar className={classes.sidebar} />}

      <Pointer />
    </>
  );
}
