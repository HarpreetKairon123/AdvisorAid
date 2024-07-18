import "./NavBar.css";
import { Link } from "react-router-dom";

export const MiddleSideNavbar = () => {
  return (
    <div className="sidenav">
      <Link to="/cases">Cases</Link>
      <Link to="/clients">Clients</Link>
      <Link to="/Reminders">Reminders</Link>
      <a href="#">Library</a>
      <a href="#">Contract Templates</a>
      <a href="#">Forms</a>
      <a href="#">Chats</a>
      <a href="#">Users</a>
      <a href="#">Setting</a>
    </div>
  );
};
