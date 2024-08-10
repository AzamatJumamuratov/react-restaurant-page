import classes from "./TitleStyles.module.css";

export default function Title({
  children,
  className,
  type = "h2",
  txtWrap = false,
  ...props
}) {
  let targetClassName = classes.title + ` ${classes[type]}` + ` ${className}`;
  targetClassName += txtWrap ? " " + classes.wrap : "";
  let elem;
  switch (type) {
    case "h1":
      elem = (
        <h1 className={targetClassName} {...props}>
          {children}
        </h1>
      );
      break;
    case "h2":
    default:
      elem = (
        <h2 className={targetClassName} {...props}>
          {children}
        </h2>
      );
      break;
    case "h3":
      elem = (
        <h3 className={targetClassName} {...props}>
          {children}
        </h3>
      );
      break;
  }
  return elem;
}
