import Button from "../../Leaf Components/Button/Button";
import Title from "../../Leaf Components/Title/Title";
import ArticleAbout from "./ArticleAbout/ArticleAbout";
import classes from "./IntroStyles.module.css";

export default function Intro({ derivedClassName }) {
  return (
    <section className={classes.intro}>
      <div className={derivedClassName}>
        <div className={classes.content_container}>
          <Title className={classes.main_title}>Добро пожаловать в</Title>
          <Title className={classes.secondary_title}>Наш ресторан</Title>
          <div className={classes.restaurant_name}>
            <div className={classes.hor_line}></div>
            <p className={classes.subtitle}>ДОМ ЛУЧШЕЙ ЕДЫ</p>
            <div className={classes.hor_line}></div>
          </div>
          <Button
            style={{
              marginTop: 21 + "px",
            }}
          >
            МЕНЮ
          </Button>
        </div>
      </div>
      <div className={classes.intro_about}>
        <div className={derivedClassName}>
          <ArticleAbout
            title={`Магическая Атмосфера`}
            pTxt={
              "В нашем заведении царит магическая атмосфера наполненная вкусными ароматами"
            }
          ></ArticleAbout>
          <ArticleAbout
            title={`Лучшее качество Еды`}
            pTxt={"Качество нашей Еды - отменное!"}
          ></ArticleAbout>
          <ArticleAbout
            title={`Недорогая Еда`}
            pTxt={
              "Стоимость нашей Еды зависит только от ее количества. Качество всегда на высоте!"
            }
          ></ArticleAbout>
        </div>
      </div>
    </section>
  );
}
