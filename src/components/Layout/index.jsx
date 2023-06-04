import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

import Footer from "./Footer";
import HeaderBar from "./Header";
import SideNav from "./Sidebar";
import { Rightbar } from "./Rightbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utilities/firebase";
import { LoginForm, SignUpForm } from "../AuthForms";

export default function PageLayout({ children }) {
  const [user, loading, error] = useAuthState(auth);
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openSignup, setOpenSignup] = React.useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <HeaderBar />
      <SideNav active={user} />
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
      <Rightbar active={user} />

      <Footer
        openLogin={() => setOpenLogin(true)}
        openSignup={() => setOpenSignup(true)}
        active={user}
      />
      {/* <BeepPrompt open={addBeep} setAddBeep={setAddBeep} /> */}
      <LoginForm open={openLogin} handleClose={() => setOpenLogin(false)} />
      <SignUpForm open={openSignup} handleClose={() => setOpenSignup(false)} />
    </Box>
  );
}
