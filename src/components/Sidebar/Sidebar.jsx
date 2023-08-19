import "./sidebar.css"
import WifiIcon from '@mui/icons-material/Wifi';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-first">
                <ul className="sidebar-ul">
                    <li className="sidebar-li"><WifiIcon /><span className="sidebar-span">Feed</span></li>
                    <li className="sidebar-li"><ChatIcon /><span className="sidebar-span">Chats</span></li>
                    <li className="sidebar-li"><PlayCircleIcon /><span className="sidebar-span">Videos</span></li>
                    <li className="sidebar-li"><GroupsIcon /><span className="sidebar-span">Groups</span></li>
                    <li className="sidebar-li"><BookmarksIcon /><span className="sidebar-span">Bookmarks</span></li>
                    <li className="sidebar-li"><QuestionMarkIcon /><span className="sidebar-span">Questions</span></li>
                    <li className="sidebar-li"><WorkIcon /><span className="sidebar-span">Jobs</span></li>
                    <li className="sidebar-li"><EventIcon /><span className="sidebar-span">Events</span></li>
                    <li className="sidebar-li"><SchoolIcon /><span className="sidebar-span">Courses</span></li>
                </ul>
                <button className="sidebar-button">Show more</button>
                <hr /></div>
            <div className="sidebar-second">
                <ul className="sidebar-second-ul">
                    {Users.map((u) => (
                        <CloseFriend key={u.id} user={u} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar