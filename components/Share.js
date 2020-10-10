
// import navButtons from "../config/buttons";
import "./Share.scss";
import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    HatenaIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon
  } from "react-share";
  import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
  } from "react-share";
import {isMobile,isBrowser} from "react-device-detect";


const Share = props => {
  return (<>
<div className="share">
<TwitterIcon size={32} round={true} />
<FacebookShareButton  url={props.url} >
<FacebookIcon size={32} round={true}/>
</FacebookShareButton>
<WhatsappShareButton url={props.url}>
<WhatsappIcon size={32} round={true}/>
</WhatsappShareButton>
<TwitterIcon size={32} round={true}/>
<EmailIcon size={32} round={true}/>
<LinkedinIcon size={32} round={true}/>
</div>
    </>
)
};
  export default Share;


