import classes from "./FoodItemStyles.module.css";
import our_food_item_img from "../../../../Images/Our_Food/our_food_item.png";

export default function FoodItem() {
  return (
    <div className={classes.food_item}>
      <div className={classes.img_holder}>
        <img src={our_food_item_img} width={160} height={140} />
      </div>
      <div className={classes.food_desc}>
        <p>Гамбургер мини</p>
        <div className={classes.dotted_line}></div>
        <mark className={classes.price}>220 &#8381;</mark>
      </div>
    </div>
  );
}
