import "./Footer.scss";
import {site} from "config/constants";
// import {isMobile, isBrowser} from "react-device-detect";

const Footer = (props) => (
  <footer className="footer">
    {/* <div itemscope="itemscope" itemtype="http://schema.org/WebSite">
      <link itemprop="url" href={`${site}`}/>
    </div> */}
    <span>TRISHN</span>
    <span
      class="backtotop"
      onClick={() => window.scroll({top: 0, left: 0, behavior: 'smooth'})}>BACK TO TOP</span>
  </footer>
)
export default Footer;
