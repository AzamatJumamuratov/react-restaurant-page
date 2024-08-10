import classes from "./ArticleAboutStyles.module.css";
import Title from "../../../Leaf Components/Title/Title";
import dish_plate from "../../../../Assets/dish_plate_icon.svg";

export default function ArticleAbout({ title, pTxt }) {
  let arrWords = title.split(" ");
  let lastWord = arrWords.at(-1);
  lastWord = " " + lastWord;
  arrWords.length -= 1;
  arrWords = arrWords.join(" ");

  return (
    <article className={classes.ArticleAbout}>
      <img src={dish_plate} alt="" width="87px" height="87px"></img>
      <Title type="h3" className={classes.title}>
        {arrWords}
        <span style={{ color: "#BC9060" }}>{lastWord}</span>
      </Title>
      <p style={{ color: "#656363" }}>{pTxt}</p>
    </article>
  );
}
