import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.app}>
      <Header derivedClassName={"wrapper"} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
