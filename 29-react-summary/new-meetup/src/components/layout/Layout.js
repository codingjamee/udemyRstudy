import classes from "./Layout.module.css";
import MainNavigtion from "./MainNavigation";

const Layout = (props) => {
  return (
    <div>
      <MainNavigtion />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};
export default Layout;
