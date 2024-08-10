import Title from "../../Leaf Components/Title/Title";
import classes from "./OurChefsStyles.module.css";
import chef1img from "../../../Images/Our_Chefs/Chef1.png";
import chef2img from "../../../Images/Our_Chefs/Chef2.png";
import chef3img from "../../../Images/Our_Chefs/Chef3.png";

export default function OurChefs() {
  return (
    <section className={classes.OurChefs}>
      <div className="wrapper">
        <Title type="h2" className={classes.title}>
          <span style={{ color: "#000" }}>Наши</span> Повара
        </Title>

        <div className={classes.chefs_gallery}>
          <img src={chef1img}></img>
          <img src={chef2img}></img>
          <img src={chef3img}></img>
        </div>
      </div>
    </section>
  );
}
