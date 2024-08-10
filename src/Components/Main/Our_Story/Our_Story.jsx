import classes from "./OurStoryStyles.module.css";
import Title from "../../Leaf Components/Title/Title";
import story_img1 from "../../../Images/story_image1.png";
import story_img2 from "../../../Images/story_image2.png";
import story_img3 from "../../../Images/story_image3.png";
import Reservation from "./Reservation/Reservation";

export default function OurStory() {
  return (
    <section className={classes.OurStory}>
      <div className="wrapper">
        <article className={classes.story}>
          <Title type="h2">
            <mark style={{ color: "#000" }}>Наша</mark> История
          </Title>
          <p className={classes.paragraph}>
            Как и у любого другого самобытного места, у нас есть своя, особая
            история. Идея ресторана пришла основателям неожиданно. Во время
            прогулки по лесу создатель нашего ресторана застрял в сотнях
            километров от ближайшего населенного пункта. Вдали от цивилизации и
            связи им пришлось навремя обустровать себе нехитрый быт, добывать и
            готовить себе еду.
          </p>
          <div className={classes.statistics}>
            <figure>
              93
              <figcaption>Напитки</figcaption>
            </figure>
            <figure>
              206
              <figcaption>Еда</figcaption>
            </figure>
            <figure>
              71
              <figcaption>Закуски</figcaption>
            </figure>
          </div>
        </article>
        <div className={classes.story_images}>
          <div>
            <img
              className={classes.img1}
              src={story_img1}
              width="233px"
              height="300px"
            />
          </div>
          <div>
            <img
              src={story_img2}
              className={classes.img2}
              width="254px"
              height="300px"
            />
          </div>
          <div>
            <img
              src={story_img3}
              className={classes.img3}
              width="255px"
              height="430px"
            />
          </div>
          <div className={classes.design_box}></div>
        </div>
      </div>
      <Reservation />
    </section>
  );
}
