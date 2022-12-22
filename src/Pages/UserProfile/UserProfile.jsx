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

import { Profile } from "../../components/Profile/Profile";
import { Rightbar } from "../../components/Rightbar/Rightbar";
import "./style.css";
import { Layout } from "../../components/Layout/Layout";
export default function UserProfile() {
  const location = useNavigate();
  return (
    <div className="user-profile__main">
      <Profile />
      <Rightbar />
    </div>
  );
}
