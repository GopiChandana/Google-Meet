import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import "./Alert.scss";

const Alert = ({ messageAlert }) => {
  return (
    <div className="message_alert_popup">
      <div className="alert_header">
        <FontAwesomeIcon className="icon" icon={faCommentAlt} />
        <h3>{messageAlert.payload.user}</h3>
      </div>
      <p className="alert_msg">{messageAlert.payload.msg}</p>
    </div>
  );
};

export default Alert;