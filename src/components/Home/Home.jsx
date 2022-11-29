import "./style.css";

import { FiEdit } from "react-icons/fi";
import { RiLinksFill } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";

import banner from "../../assets/banner.png";
import sms from "../../assets/sms-icon.png";
import checkmark from "../../assets/checkmark.png";
import avatar from "../../assets/user_dp.png";
import { Divider } from "@mui/material";
import Beep from "../Beep/Beep";
import { Feed } from "../Feed/Feed";
import { FooterMenu } from "../FooterMenu/FooterMenu";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { ProfileFeed } from "../ProfileFeed/ProfileFeed";
import { HomeFeed } from "../HomeFeed/HomeFeed";

export const Home = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user-data"]);
  const location = useNavigate();

  if (!cookies.userData.firstname) {
    location("/ceate-account");
  }

  return (
    <div className="home">
      <div className="home__wrapper"></div>
      <HomeFeed />
    </div>
  );
};
