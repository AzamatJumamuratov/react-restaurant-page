import classes from "./AnchorStyles.module.css";

export default function Anchor({ href, children, className = "", ...props }) {
  const targetClassName = classes.anchor + ` ${className}`;
  return (
    <a className={targetClassName} href={href} {...props}>
      {children}
      <div className={classes.anchorLine}>
        <div></div>
        <div></div>
      </div>
    </a>
  );
}
