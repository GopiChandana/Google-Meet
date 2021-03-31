import "./HomePage.scss";
import Header from "../subcomponents/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faKeyboard } from "@fortawesome/free-solid-svg-icons";
const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <div className="body">
        <div className="Left_body">
          <div className="text">
            <h2>Premium video meetings. Now free for everyone.</h2>
            <p>
              We re-engineered the service we built for secure business
              meetings, Google Meet, to make it free and available for all.
            </p>
            <div className="actions">
              <button className="btn green">
                <FontAwesomeIcon className="each_icon" icon={faVideo} />
                New Meeting
              </button>
              <div className="input_block">
                <div className="input_section">
                  <FontAwesomeIcon className="each_icon" icon={faKeyboard} />
                  <input placeholder="Enter a code or link" />
                </div>
                <button className="btn no-bg">Join</button>
              </div>
            </div>
          </div>
          <div className="googlemeet">
            <a href="#">Learn more </a> about Google Meet
          </div>
        </div>
        <div className="Right_body">
        <div className="text">
            <img src="https://www.gstatic.com/meet/google_meet_marketing_ongoing_meeting_grid_427cbb32d746b1d0133b898b50115e96.jpg" alt="imm"/>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;
