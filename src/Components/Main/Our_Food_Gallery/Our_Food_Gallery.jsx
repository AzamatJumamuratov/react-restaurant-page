import classes from "./OurFoodGalleryStyles.module.css";
import Title from "../../Leaf Components/Title/Title";
import img1 from "../../../Images/Food_Gallery/img1.png";
import img2 from "../../../Images/Food_Gallery/img2.png";
import img3 from "../../../Images/Food_Gallery/img3.png";

export default function OurFoodGallery() {
  return (
    <section className={classes.food_gallery}>
      <div className="wrapper">
        <Title type="h2" className={classes.title}>
          <span style={{ color: "#000" }}>Галерея</span> Блюд
        </Title>

        <div className={classes.gallery}>
          <img src={img1} />
          <img src={img2} />
          <img src={img3} />
          <img src={img2} />
          <img src={img3} />
          <img src={img1} />
        </div>
      </div>
    </section>
  );
}
