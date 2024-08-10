import ContactUs from "../../ContactUs/ContactUs";
import classes from "./SideBarStyles.module.css";
import Anchor from "../../../../Leaf Components/Anchor/Anchor";
import cart_icon from "../../../../../Assets/cart.svg";

export default function SideBar({ className }) {
  let targetClassName = classes.container + ` ${className}`;
  return (
    <div className={classes.SideBar}>
      <div className={targetClassName}>
        <ul className={classes.list}>
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
        <ContactUs />
      </div>
    </div>
  );
}
