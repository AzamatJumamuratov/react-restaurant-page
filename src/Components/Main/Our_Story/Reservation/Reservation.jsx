import Button from "../../../Leaf Components/Button/Button";
import Title from "../../../Leaf Components/Title/Title";
import classes from "./ReservationStyles.module.css";

export default function Reservation() {
  return (
    <article className={classes.Reservation}>
      <div className="wrapper">
        <figure className={classes.theme_texts}>
          <figcaption>
            <Title className={classes.title} type="h2" txtWrap>
              Отпразднуйте в одном из самых лучших ресторанов.
            </Title>
          </figcaption>
          <p className={classes.p}>Только в этом месяце бизнес-ланч от 250 ₽</p>
        </figure>
        <Button>ЗАКАЗ СТОЛИКА</Button>
      </div>
    </article>
  );
}
