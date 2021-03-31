import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faTimes,
  faUser,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./MeetingInfo.scss";

const MeetingInfo = () => {
  return (
    <div className="meeting_info_block">
      <div className="meeting_header">
        <h3>Your meeting's ready</h3>
        <FontAwesomeIcon
          className="icon"
          icon={faTimes}
        />
      </div>
      <button className="add_people_btn">
        <FontAwesomeIcon className="icon" icon={faUser} />
        Add Others
      </button>
      <p className="info_text">
        Or share this meeting link with others you want in the meeting
      </p>
      <div className="meet_link">
        <span>url</span>
        <FontAwesomeIcon
          className="icon"
          icon={faCopy}
          onClick={() => navigator.clipboard.writeText("url")}
        />
      </div>
      <div className="permission_text">
        <FontAwesomeIcon className="icon red" icon={faShieldAlt} />
        <p className="small_text">
          People who use this meeting link must get your permission before they
          can join.
        </p>
      </div>
      <p className="small_text">Joined as gopichandanasiri@gmail.com</p>
    </div>
  );
};

export default MeetingInfo;