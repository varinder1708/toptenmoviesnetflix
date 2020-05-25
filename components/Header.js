import "./Header.scss";
import NavBar from "./NavBar";

import navButtons from "../config/buttons";
const Header = (props) => (
    // <div className="Header">
    //   {props.appTitle}
    // </div>
    <>
    <NavBar navButtons={navButtons} />
    </>
  );
export default Header;
