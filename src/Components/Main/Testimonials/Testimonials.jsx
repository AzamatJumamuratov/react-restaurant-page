import { useEffect, useRef } from "react";
import classes from "./TestimonialsStyles.module.css";
import data from "./FeedBacksData";
import Feedback from "./Feedback/Feedback";

export default function Testimonials() {
  const carousel = useRef(null);
  const list = useRef(null);
  const controlbtns = useRef(null);
  const swipe_speed = 2;
  let StartMouseX;

  useEffect(() => {
    controlbtns.current.children[0].classList.add(classes.selected);
    carousel.current.onpointerdown = (e) => {
      e.preventDefault();
      console.log("pointerdown");
      StartMouseX = e.pageX;

      function Drag(e) {
        let mouseX = e.pageX - StartMouseX;
        StartMouseX = e.pageX;
        list.current.scrollLeft -= mouseX * swipe_speed;
        console.log("pointermove");
      }
      carousel.current.addEventListener("pointermove", Drag);

      document.onpointercancel = (e) => {
        console.log("pointercancel");
      };

      document.onpointerup = (e) => {
        carousel.current.removeEventListener("pointermove", Drag);
        document.onpointerup = null;
        SnapScroll(list.current.scrollLeft + list.current.offsetWidth / 2);
        console.log("up");
      };
    };

    carousel.current.addEventListener("dragstart", prvDflt);
    function prvDflt() {
      return false;
    }

    return () => {
      carousel.current.onpointerdown = null;
      carousel.current.removeEventListener("dragstart", prvDflt);
    };
  }, []);

  function SnapScroll(scrollCenter) {
    let children = Array.from(list.current.children);
    let targetIndex;
    let nearestChild = children.reduce((nearest, child, index) => {
      if (nearest == null) {
        nearest = child;
        targetIndex = index;
      } else {
        let nearestPos = nearest.offsetLeft + nearest.offsetWidth / 2;
        let childPos = child.offsetLeft + child.offsetWidth / 2;

        let distNearest = Math.abs(scrollCenter - nearestPos);
        let distChild = Math.abs(scrollCenter - childPos);

        if (distChild < distNearest) {
          nearest = child;
          targetIndex = index;
        }
      }

      return nearest;
    }, null);
    console.log(nearestChild);

    list.current.scrollTo({
      left: nearestChild.offsetLeft,
      behavior: "smooth",
    });

    // nearestChild.scrollIntoView({
    //   behavior: "smooth",
    //   inline: "center",
    //   block: "center",
    // });

    removeSelected(controlbtns.current.children);
    controlbtns.current.children[targetIndex].classList.add(classes.selected);
  }

  function removeSelected(arr) {
    for (let val of arr) {
      val.classList.remove(classes.selected);
    }
  }

  return (
    <section ref={carousel} className={classes.testimonials}>
      <div className="wrapper">
        <div className={classes.carousel}>
          <ul ref={list} className={classes.list}>
            {data.map((feedback, i) => {
              return (
                <li key={i}>
                  <Feedback {...feedback} />
                </li>
              );
            })}
          </ul>
          <div ref={controlbtns} className={classes.controls}>
            <div className={classes.btn}></div>
            <div className={classes.btn}></div>
            <div className={classes.btn}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
