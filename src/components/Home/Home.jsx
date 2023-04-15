import "./style.css";

import { FiEdit } from "react-icons/fi";
import { RiLinksFill } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";

import banner from "../../assets/banner.png";
import sms from "../../assets/sms-icon.png";
import checkmark from "../../assets/checkmark.png";
import avatar from "../../assets/user_dp.png";
import { Box, CircularProgress, Divider, Typography } from "@mui/material";
import Beep from "../Beep/Beep";
import { Feed } from "../Feed/Feed";
import { FooterMenu } from "../FooterMenu/FooterMenu";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { ProfileFeed } from "../ProfileFeed/ProfileFeed";
import { HomeFeed } from "../HomeFeed/HomeFeed";
import { useEffect, useState } from "react";
import { GET } from "../../utils/request";
import { useStore } from "../../store";

export const Home = () => {
  const [loading, setloading] = useState(false);

  const location = useNavigate();

  // useEffect(() => {
  //   GET("feed", userInfo.jwt)
  //     .then((res) => res.json())
  //     .then((res) => console.log(res))
  //     // .then((res) => console.log(res))

  //     .catch((err) => console.log("error:", err))
  //     .finally(() => setloading(false));
  // }, []);
  console.log(loading);

  return (
    <div className="home">
      {loading ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            justifyContent: "center",
            padding: "2rem 0",
          }}
        >
          <CircularProgress />
          <Typography sx={{ fontSize: "1rem" }}>Getting Feed...</Typography>
        </Box>
      ) : (
        <HomeFeed />
      )}
    </div>
  );
};
