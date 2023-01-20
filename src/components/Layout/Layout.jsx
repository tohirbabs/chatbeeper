import { useState } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { Header } from "../Header/Header";
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

export const Layout = ({ children, setHomeFeedData, homeFeedData }) => {
  const [sidebar, setSidebar] = useState("");
  const [overlay, setOverlay] = useState("");
  const [addBeep, setAddBeep] = useState(false);

  const userInfo = useStore((state) => state.userReg.auth);

  const location = useLocation();
  if (!userInfo) {
    location("/ceate-account");
  }
  const drawerWidth = 260;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  console.log(mobileOpen);

  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        width: { lg: "1200px" },
        margin: "auto",
      }}
    >
      <HeaderBar handleDrawerToggle={handleDrawerToggle} />
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
      <Footer />
      {/* <BeepPrompt open={addBeep} setAddBeep={setAddBeep} /> */}
    </Box>
  );
};
