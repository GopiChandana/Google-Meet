import "./CallPage.scss"
 import CallPageHeader from "../subcomponents/CallPageHeader/CallPageHeader";
 import CallPageFooter from "../subcomponents/CallPageFooter/CallPageFooter";
import MeetingInfo from "../subcomponents/MeetingInfo/MeetingInfo";
import Messenger from "../subcomponents/Messenger/Messenger";
import "./CallPage.scss"
const CallPage = ()=>{
    return(
        <div className="callpage_container">
        <video className="video_container" src="" controls></video>
        
        <CallPageHeader/> 
        <CallPageFooter/>
        <MeetingInfo/> 
        <Messenger/> 
        </div>
    )
}

export default CallPage;