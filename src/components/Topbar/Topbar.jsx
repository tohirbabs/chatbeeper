import React from "react";
import "./style.css";

import avatar from "../../assets/user_dp.png";

import { Logo } from "../../assets/logo";
import { HomeIcon } from "../../assets/icons/nav/HomeIcon";
import { TourIcon } from "../../assets/icons/nav/TourIcon";
import { BeepIcon } from "../../assets/icons/nav/BeepIcon";
import { NotificationIcon } from "../../assets/icons/nav/NotificationIcon";

export const Topbar = () => {
  return (
    <div className="topbar">
      <div className="nav-logo">
        <img alt="chatbeeper logo" src={Logo} width={40} height={40} />
      </div>
      <div className="search">
        <input type="search" name="" id="" placeholder="Search" />
      </div>
      <div className="nav">
        <div className="nav-item">
          <div className="nav-icon">
            <HomeIcon />
          </div>
          <p>Home</p>
        </div>
        <div className="nav-item">
          <div className="nav-icon">
            <TourIcon />
          </div>
          <p>Tour</p>
        </div>
        <div className="nav-item">
          <div className="nav-icon">
            <BeepIcon />
          </div>
          <p>Beep</p>
        </div>
        <div className="nav-item">
          <div className="nav-icon">
            <NotificationIcon />
          </div>
          <p>Notifications</p>
        </div>
        <div className="nav-item">
          <img alt="chatbeeper logo" src={avatar} width={25} height={25} />

          <p>Profile</p>
        </div>
      </div>
    </div>
  );
};
