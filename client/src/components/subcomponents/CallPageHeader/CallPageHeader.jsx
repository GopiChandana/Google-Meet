import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import{
    faUserFriends,
    faCommentAlt,
    faUserCircle,
} from "@fortawesome/free-solid-svg-icons" ;
import "./CallPageHeader.scss"
const CallPageHeader=()=>{
    return(
       <div className="frame_header">
        <div className="header_items icon_block">
        <FontAwesomeIcon className="icon" icon={faUserFriends}/>
        </div>
        <div className="header_items icon_block">
        <FontAwesomeIcon className="icon" icon={faCommentAlt}/>
        <span className="alert_circle_icon"></span>
        </div>
        <div className="header_items date_block">1:00 PM</div>
        <div className="header_items icon_block">
        <FontAwesomeIcon className="icon profile" icon={faUserCircle}/>
        </div>
       </div> 
    )
}

export default CallPageHeader