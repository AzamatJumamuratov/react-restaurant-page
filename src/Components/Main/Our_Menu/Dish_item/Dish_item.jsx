import Button from "../../../Leaf Components/Button/Button";
import Title from "../../../Leaf Components/Title/Title";
import classes from "./DishItemStyles.module.css";
import dish_img from "../../../../Images/Our_Menu/dish_img.jpg";

export default function DishItem({ recomended = false }) {
  return (
    <div className={classes.DishItem}>
      {recomended && <div className={classes.recomended}>RECOMENDED</div>}
      <div className={classes.dish_img}>
        <img src={dish_img} />
        <div className={classes.dish_rating}>420</div>
      </div>
      <Title type="h3" className={classes.title}>
        Гамбургер макси
      </Title>
      <p>Максимально толстый слой мяса</p>
      <Button className={classes.button}>ЗАКАЗАТЬ</Button>
    </div>
  );
}
