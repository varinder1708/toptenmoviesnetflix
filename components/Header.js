import "./Header.scss";
import {isMobile, isBrowser} from "react-device-detect";
import NavBar from "./NavBar";
const Header = (props) => {
  // <div className="Header">   {props.appTitle} </div>
  return (isMobile && props.navbar && props.navbar.showmenu
    ? <NavBar navButtons={props.navbar.navButtons}/>
    : '')

};
export default Header;
