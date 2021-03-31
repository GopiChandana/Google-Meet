import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faQuestionCircle,
    faExclamationCircle,
    faCog,
  } from "@fortawesome/free-solid-svg-icons";
  import "./Header.scss"
const Header = ()=>{
    return (
       <div className="header">
        <div className="logo">
           <img src="https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_2x_icon_124_40_292e71bcb52a56e2a9005164118f183b.png" alt="logo"/>
        <span className="meet">
           Meet
        </span>
        </div>
        <div className="icons_block">
            <FontAwesomeIcon className="each_icon" icon={faQuestionCircle}/>
            <FontAwesomeIcon className="each_icon" icon={faExclamationCircle}/>
            <FontAwesomeIcon className="each_icon" icon={faCog}/>
        </div>
       </div>
    )
}

export default Header