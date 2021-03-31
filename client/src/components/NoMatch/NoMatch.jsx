import { Link } from "react-router-dom";
import "./NoMatch.scss";
import Header from "../subcomponents/Header/Header";

const NoMatch = () => {
  return (
    <div className="no_match">
      <Header />
      <div className="no_match__content">
        <h2>Invalid video call name.</h2>
        <div className="action_btn">
          <Link className="btn green" to="/">
            Return to home screen
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NoMatch;