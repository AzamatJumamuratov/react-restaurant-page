import Title from "../../Leaf Components/Title/Title";
import DishItem from "./Dish_item/Dish_item";
import classes from "./OurMenuStyles.module.css";

export default function OurMenu() {
  return (
    <section className={classes.OurMenu}>
      <div className="wrapper">
        <Title type="h2" className={classes.title}>
          Наше меню
        </Title>
        <div className={classes.dish_items}>
          <DishItem recomended />
          <DishItem />
          <DishItem />
        </div>
      </div>
    </section>
  );
}
