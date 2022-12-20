import React from "react";
import "./style.css";

import avatar from "../../assets/user_dp.png";
import chatbeeper from "../../assets/chatbeeper.png";
import { SmsIcon } from "../../assets/icons/nav/SmsIcon";

import { Logo } from "../../assets/logo";
import { HomeIcon } from "../../assets/icons/nav/HomeIcon";
import { TourIcon } from "../../assets/icons/nav/TourIcon";
import { BeepIcon } from "../../assets/icons/nav/BeepIcon";
import { NotificationIcon } from "../../assets/icons/nav/NotificationIcon";

import { useNavigate } from "react-router-dom";
import { HiSearch } from "react-icons/hi";

export const Header = ({ nav, sidebar, setSidebar }) => {
  const location = useNavigate();

  function toggleSidebar() {
    sidebar == "" || sidebar === "close"
      ? setSidebar("open")
      : setSidebar("close");
    console.log(sidebar);
  }

  return (
    <header className="header-bar">
      <div className="mheader-bar__wrapper">
        <img
          alt="user dp"
          src={avatar}
          width={28}
          height={28}
          className="mheader-bar__dp"
          onClick={() => toggleSidebar()}
        />
        {/* <a href="/home"> */}
        <img
          alt="chatbeeper logo"
          src={chatbeeper}
          width="150px"
          className="mheader-bar__logo"
        />
        {/* </a> */}
        <nav>
          <SmsIcon />
          <HiSearch style={{ fontSize: "1.5rem", color: "white" }} />
        </nav>
      </div>
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
      </div>
    </header>
  );
};
