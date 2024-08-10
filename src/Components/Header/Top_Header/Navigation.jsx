import ContactUs from "./ContactUs/ContactUs";
import Logo from "./Logo/Logo";
import Links from "./Links/Links";
import classes from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={classes.top_header}>
      <div className="wrapper">
        <Logo />
        <div className={classes.nav_contactUs_container}>
          <Links />
          <div className={classes.line}></div>
          <ContactUs className={classes.ContactUs} />
        </div>
      </div>
    </nav>
  );
}
