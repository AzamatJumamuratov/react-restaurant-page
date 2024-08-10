import Title from "../../Leaf Components/Title/Title";
import FoodItem from "./Food_Item/Food_Item";
import classes from "./OurFoodStyles.module.css";
import ourfood_img from "../../../Images/Our_Food/Our_Food_Img.png";

export default function OurFood() {
  return (
    <section className={classes.OurFood}>
      <div className="wrapper">
        <Title className={classes.title} type="h2">
          <span style={{ color: "#000" }}>Наши</span> Блюда
        </Title>
        <div className={classes.food_content}>
          <div className={classes.imgCaption}>
            <img src={ourfood_img} width={445} height={478} alt="" />
          </div>
          <div className={classes.food_menu}>
            <FoodItem />
            <FoodItem />
            <FoodItem />
          </div>
        </div>
      </div>
    </section>
  );
}
