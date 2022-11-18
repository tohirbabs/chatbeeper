import "./style.css";

import { useNavigate } from "react-router-dom";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { motion } from "framer-motion";
import { FiEdit } from "react-icons/fi";
import { RiLinksFill } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";

import { pageAnimation } from "../../animations";
import { h1, button, box, h2, p } from "./style";

import banner from "../../assets/user_banner.png";
import sms from "../../assets/sms-icon.png";
import checkmark from "../../assets/checkmark.png";
import avatar from "../../assets/user_dp.png";
import { Divider } from "@mui/material";
import Beep from "../../components/Beep/Beep";
import { Feed } from "../../components/Feed/Feed";

export default function UserProfile() {
  const location = useNavigate();
  return (
    <>
      <img src={banner} className="banner" alt="chatbeeper logo" />

      <div className="container">
        <Box sx={box}>
          <img src={avatar} alt="chatbeeper logo" />

          <Typography variant="h1" sx={h1}>
            Jane Doe
          </Typography>
          <Typography variant="h2" sx={h2}>
            @janedoe_10
            <img src={checkmark} className="checkmark" alt="chatbeeper logo" />
          </Typography>
          <Typography variant="p" sx={p}>
            Hi there, I'm a product design who loves solving real life problems
            with my superpower 😁
          </Typography>
          <div className="sect"></div>
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
            <img src={sms} className="msg" alt="chatbeeper logo" />
          </div>
          <div className="sections">
            <div className="section active_section">Beeps</div>
            <div className="section">Pictures</div>
            <div className="section">Videos</div>
          </div>
          <div className="sect"></div>
        </Box>
        <Feed />
      </div>
    </>
  );
}
