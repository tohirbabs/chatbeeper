import "./style.css";

import avatar from "../../assets/user_dp.png";

import { Logo } from "../../assets/logo";
import { HomeIcon } from "../../assets/icons/nav/HomeIcon";
import { TourIcon } from "../../assets/icons/nav/TourIcon";
import { BeepIcon } from "../../assets/icons/nav/BeepIcon";
import { NotificationIcon } from "../../assets/icons/nav/NotificationIcon";

import { useNavigate } from "react-router-dom";

export const FooterMenu = () => {
  const location = useNavigate();

  return (
    <div className="footer">
      <div className="menu-item">
        <div className="menu-icon">
          <HomeIcon />
        </div>
        <p>Home</p>
      </div>
      <div className="menu-item">
        <div className="menu-icon">
          <TourIcon />
        </div>
        <p>Tour</p>
      </div>
      <div className="menu-item">
        <div className="menu-icon">
          <BeepIcon />
        </div>
        <p>Beep</p>
      </div>
      <div className="menu-item">
        <div className="menu-icon">
          <NotificationIcon />
        </div>
        <p>Notifications</p>
      </div>
      <div className="menu-item" onClick={() => location(`/profile`)}>
        <img alt="chatbeeper logo" src={avatar} width={25} height={25} />

        <p>Profile</p>
      </div>
    </div>
  );
};
