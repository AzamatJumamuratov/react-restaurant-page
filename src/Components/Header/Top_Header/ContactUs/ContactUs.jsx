import classes from "./ContactUsStyles.module.css";
import phone_icon from "../../../../Assets/phone.svg";
import Button from "../../../Leaf Components/Button/Button";

export default function ContactUs({ className }) {
  const targetClassName = classes.ContactUs + ` ${className}`;
  return (
    <div className={targetClassName}>
      <div>
        <div className={classes.number}>
          <img src={phone_icon} />
          <mark>+999-888-76-54</mark>
        </div>
        <span className={classes.info_txt}>
          Свяжитесь с нами для бронирования
        </span>
      </div>
      <Button className={classes.btn}>ЗАКАЗ СТОЛИКА</Button>
    </div>
  );
}
