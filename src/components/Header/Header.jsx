import React from "react";
import "./style.css";

import avatar from "../../assets/user_dp.png";

import { Logo } from "../../assets/logo";
import { HomeIcon } from "../../assets/icons/nav/HomeIcon";
import { TourIcon } from "../../assets/icons/nav/TourIcon";
import { BeepIcon } from "../../assets/icons/nav/BeepIcon";
import { NotificationIcon } from "../../assets/icons/nav/NotificationIcon";

import { useNavigate } from "react-router-dom";
import { HiSearch } from "react-icons/hi";

export const Header = ({ nav }) => {
  const location = useNavigate();

  return (
    <header className="header-bar">
      <div className="header-bar__wrapper">
        <img
          className="header-bar__logo"
          alt="chatbeeper logo"
          src={Logo}
          width={40}
          height={40}
        />
        <div className="header-bar__search">
          <HiSearch />
          <input type="search" name="" id="" placeholder="Search" />
        </div>

        <nav>
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
          <a>
            <NotificationIcon />
            <p>Notifications</p>
          </a>
          <a href="/profile" className={nav == "profile" ? "active" : ""}>
            <img alt="user dp" src={avatar} width={28} height={28} />
            <p>Profile</p>
          </a>
        </nav>
      </div>
    </header>
  );
};
