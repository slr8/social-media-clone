import "./closeFriend.css";

export default function CloseFriend({ user }) {
  return (
    <li className="sidebar-second-li">
      <img src={user.profilePicture} className="sidebar-img" />
      <span className="sidebar-second-span">{user.username}</span>
    </li>
  );
}

