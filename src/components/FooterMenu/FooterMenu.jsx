import "./style.css";

import avatar from "../../assets/user_dp.png";

import { Logo } from "../../assets/logo";
import { HomeIcon } from "../../assets/icons/nav/HomeIcon";
import { TourIcon } from "../../assets/icons/nav/TourIcon";
import { BeepIcon } from "../../assets/icons/nav/BeepIcon";
import { NotificationIcon } from "../../assets/icons/nav/NotificationIcon";

import { NavLink, useNavigate } from "react-router-dom";

export const FooterMenu = ({ nav, setOverlay, overlay }) => {
  const location = useNavigate();

  return (
    <nav className="footer">
      <NavLink to="/home" activeClassName="active">
        <HomeIcon active={nav === "/home" ? true : false} />
        <p>Home</p>
      </NavLink>
      <a>
        <TourIcon />
        <p>Tour</p>
      </a>
      <a
        onClick={() => {
          overlay === "beepPrompt" ? setOverlay("") : setOverlay("beepPrompt");
        }}
      >
        <BeepIcon />
        <p>Beep</p>
      </a>
      <NavLink to="/notifications" activeClassName="active">
        <NotificationIcon active={nav === "/notifications" ? true : false} />
        <p>Notifications</p>
      </NavLink>
      <NavLink to="/profile" activeClassName="active">
        <img alt="user dp" src={avatar} width={28} height={28} />
        <p>Profile</p>
      </NavLink>
    </nav>
  );
};
