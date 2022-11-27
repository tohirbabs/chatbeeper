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

import banner from "../../assets/banner.png";
import sms from "../../assets/sms-icon.png";
import checkmark from "../../assets/checkmark.png";
import avatar from "../../assets/user_dp.png";
import { Divider } from "@mui/material";
import Beep from "../../components/Beep/Beep";
import { Feed } from "../../components/Feed/Feed";
import { FooterMenu } from "../../components/FooterMenu/FooterMenu";
import { Topbar } from "../../components/Topbar/Topbar";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Profile } from "../../components/Profile/Profile";
import { Rightbar } from "../../components/Rightbar/Rightbar";
import "./style.css";
export default function UserProfile() {
  const location = useNavigate();
  return (
    <>
      <Topbar />
      <div className="profile-body">
        <Sidebar />
        <Profile />
        <Rightbar />
      </div>
      <FooterMenu />
    </>
  );
}
