import classes from "./FeedbackStyles.module.css";

export default function Feedback({ text, avatar, priveleges, name }) {
  return (
    <div className={classes.feedback}>
      <p className={classes.text}>{text}</p>
      <img width={100} height={100} src={avatar} className={classes.avatar} />
      <b className={classes.priveleges}>{priveleges}</b>
      <mark className={classes.name}>{name}</mark>
    </div>
  );
}
