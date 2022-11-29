import "./style.css";

import { FiEdit } from "react-icons/fi";
import { RiLinksFill } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";

import banner from "../../assets/banner.png";
import sms from "../../assets/sms-icon.png";
import checkmark from "../../assets/checkmark.png";
import avatar from "../../assets/user_dp.png";
import { Divider } from "@mui/material";
import Beep from "../../components/Beep/Beep";
import { Feed } from "../../components/Feed/Feed";
import { FooterMenu } from "../../components/FooterMenu/FooterMenu";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { ProfileFeed } from "../ProfileFeed/ProfileFeed";

export const Profile = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user-data"]);
  const location = useNavigate();

  if (!cookies.userData.firstname) {
    location("/ceate-account");
  }

  return (
    <div className="profile">
      <div className="profile__wrapper">
        <div className="profile__display-imgs">
          <img src={banner} className="profile__banner" alt="chatbeeper logo" />
          <img src={avatar} alt="user dp" className="profile__dp" />
        </div>

        <div className="profile__info">
          <h1>
            {`${cookies.userData.firstname} ${cookies.userData.lastname}`}
          </h1>
          <h2>
            <p>{`@${cookies.userData.username}`}</p>
            <img src={checkmark} className="checkmark" alt="checkmark" />
          </h2>
          <p>
            Hi there, I'm a product design who loves solving real life problems
            with my superpower 😁
          </p>
          <div className="user_info">
            <div className="info">
              <p>8,200</p>
              <p>Following</p>
            </div>
            <div className="divider"></div>
            <div className="info">
              <p>800</p>
              <p>Followers</p>
            </div>
            <div className="divider"></div>
            <div className="info">
              <p>
                <HiOutlineLocationMarker />
              </p>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
          <p className="link">
            <RiLinksFill />
            <a href="/">https://behance.net/janedoe</a>
          </p>
          <div className="user_action">
            <div className="action">
              <p>Edit profile</p>
              <FiEdit />
            </div>
            {/* <img src={sms} className="msg" alt="chatbeeper logo" /> */}
          </div>
          <div className="sections">
            <div className="section active_section">Beeps</div>
            <div className="section">Pictures</div>
            <div className="section">Videos</div>
          </div>
        </div>
        <div className="profile__feed"></div>
      </div>
      <ProfileFeed />
    </div>
  );
};
