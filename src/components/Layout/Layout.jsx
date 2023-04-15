import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Container from "@mui/material/Container";
import { pageAnimation } from "../../animations";
import { Logo } from "../../assets/logo";
import "./style.css";
import { FooterMenu } from "../FooterMenu/FooterMenu";
import { Overlay } from "../Overlay/Overlay";
import { BeepPrompt } from "../BeepPrompt/BeepPrompt";
import { useLocation } from "react-router-dom";
import { useStore } from "../../store";

import { AddBeep } from "../AddBeep/AddBeep";
import HeaderBar from "./Header";
import Footer from "./Footer";
import SideDrawer from "./Sidebar";
import { Box, Toolbar } from "@mui/material";
import toast from "react-hot-toast";
import { GET } from "../../utils/request";

export const Layout = ({ children, setHomeFeedData, homeFeedData }) => {
  const [sidebar, setSidebar] = useState("");
  const [overlay, setOverlay] = useState("");
  const [addBeep, setAddBeep] = useState(false);

  const [loading, setloading] = useState(false);

  const updateUserData = useStore((state) => state.updateUserData);
  const updateAvatar = useStore((state) => state.updateAvatar);
  const userData = useStore((state) => state.userData);
  const userAvatar = useStore((state) => state.userAvatar);

  const userInfo = useStore((state) => state.auth);
  const navigate = useNavigate();
  console.log(userInfo);

  // useEffect(() => {
  //   if (userInfo) {
  //     GET("user", userInfo.jwt)
  //       .then((res) => res.json())
  //       .then(
  //         (res) =>
  //           (res._id && updateUserData(res)) ||
  //           (res.message && toast(res.message))
  //       )
  //       .catch((err) => console.log("error:", err))
  //       .finally(() => setloading(false));
  //   } else {
  //     // navigate("/create-account");
  //   }
  // }, []);

  const drawerWidth = 260;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  console.log(mobileOpen);

  return (
    <>
      {loading ? (
        <motion.div
          variants={pageAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transitions={pageAnimation.transition}
        >
          <Container
            sx={{
              display: "grid",
              placeItems: "center",
              height: "100vh",
            }}
          >
            <Box
              component="img"
              alt="chatbeeper logo"
              src={Logo}
              width={80}
              height={80}
            />
          </Container>
        </motion.div>
      ) : (
        <Box
          sx={{
            display: "flex",
            position: "relative",
            width: { lg: "1200px" },
            margin: "auto",
          }}
        >
          <HeaderBar
            handleDrawerToggle={handleDrawerToggle}
            setAddBeep={setAddBeep}
          />
          <SideDrawer
            handleDrawerToggle={handleDrawerToggle}
            mobileOpen={mobileOpen}
          />

          <Box
            component="main"
            sx={{
              flexGrow: 1,

              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <Toolbar />
            {children}
          </Box>
          {/* <FooterMenu
        nav={location.pathname}
        setAddBeep={setAddBeep}
        overlay={overlay}
      /> */}
          <Footer setAddBeep={setAddBeep} />
          <BeepPrompt open={addBeep} setAddBeep={setAddBeep} />
        </Box>
      )}
    </>
  );
};
