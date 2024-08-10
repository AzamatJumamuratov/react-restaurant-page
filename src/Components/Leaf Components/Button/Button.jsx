import { useRef } from "react";
import classes from "./ButtonStyles.module.css";

export default function Button({
  children,
  className = "",
  onClick,
  ...props
}) {
  const btn = useRef(null);
  const targetClassName = classes.Button + ` ${className}`;
  return (
    <button
      ref={btn}
      onMouseMove={(e) => setStyle(e)}
      className={targetClassName}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );

  function setStyle(e) {
    let x = Math.round(e.clientX - btn.current.getBoundingClientRect().left);
    let y = Math.round(e.clientY - btn.current.getBoundingClientRect().top);
    btn.current.style.setProperty("--mouse-x", x + "px");
    btn.current.style.setProperty("--mouse-y", y + "px");
  }
}
