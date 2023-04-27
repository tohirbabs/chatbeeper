import { useNavigate } from "react-router-dom";
import { HomeFeed } from "./HomeFeed";
import { FiEdit } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiLinksFill } from "react-icons/ri";

import banner from "../../assets/banner.png";
import checkmark from "../../assets/checkmark.png";

import "./style.css";

export default function Profile() {
  const location = useNavigate();
  return (
    <div className="profile">
      <div className="profile__wrapper">
        <div className="profile__display-imgs">
          <img src={banner} className="profile__banner" alt="chatbeeper logo" />
          <img
            src={`https://api.dicebear.com/5.x/adventurer/svg?seed=name`}
            alt="user dp"
            className="profile__dp"
          />
        </div>

        <div className="profile__info">
          <h1>New User</h1>
          <h2>
            <p>@user_name</p>

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
      <HomeFeed />
    </div>
  );
}
