import "./style.css";

import avatar from "../../assets/user_dp.png";

import { Logo } from "../../assets/logo";
import { HomeIcon } from "../../assets/icons/nav/HomeIcon";
import { TourIcon } from "../../assets/icons/nav/TourIcon";
import { BeepIcon } from "../../assets/icons/nav/BeepIcon";
import { NotificationIcon } from "../../assets/icons/nav/NotificationIcon";

import { useNavigate } from "react-router-dom";

export const FooterMenu = ({ nav }) => {
  const location = useNavigate();

  return (
    <nav className="footer">
      <a href="/home" className={nav == "home" ? "active" : ""}>
        <HomeIcon active={nav == "home" ? true : false} />
        <p>Home</p>
      </a>
      <a>
        <TourIcon />
        <p>Tour</p>
      </a>
      <a>
        <BeepIcon />
        <p>Beep</p>
      </a>
      <a
        href="/notifications"
        className={nav == "notifications" ? "active" : ""}
      >
        <NotificationIcon active={nav == "notifications" ? true : false} />
        <p>Notifications</p>
      </a>
      <a href="/profile" className={nav == "profile" ? "active" : ""}>
        <img alt="user dp" src={avatar} width={28} height={28} />
        <p>Profile</p>
      </a>
    </nav>
  );
};
