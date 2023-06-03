import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

import Footer from "./Footer";
import HeaderBar from "./Header";
import SideNav from "./Sidebar";
import { Rightbar } from "./Rightbar";

export default function PageLayout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <HeaderBar />
      <SideNav />
      <Box
        component="main"
        sx={{
          width: { xs: "100%", sm: `calc(100% - 60vw)` },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Toolbar />

        {children}
      </Box>
      <Rightbar />

      <Footer />
      {/* <BeepPrompt open={addBeep} setAddBeep={setAddBeep} /> */}
    </Box>
  );
}
