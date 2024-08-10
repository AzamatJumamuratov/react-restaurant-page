import classes from "./MainStyles.module.css";
import OurChefs from "./Our_Chefs/Our_Chefs";
import OurFood from "./Our_Food/Our_Food";
import OurFoodGallery from "./Our_Food_Gallery/Our_Food_Gallery";
import OurMenu from "./Our_Menu/Our_Menu";
import OurStory from "./Our_Story/Our_Story";
import Testimonials from "./Testimonials/Testimonials";

export default function Main({ className }) {
  let targetClassName = classes.main + " " + className ? className : "";
  return (
    <main className={targetClassName}>
      <OurStory />
      <OurFood />
      <OurMenu />
      <Testimonials />
      <OurFoodGallery />
      <OurChefs />
    </main>
  );
}
