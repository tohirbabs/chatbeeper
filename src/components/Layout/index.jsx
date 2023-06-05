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
import { Button, IconButton } from "@mui/material";
import { BeepIcon } from "../icons";
import { BeepPrompt } from "../BeepPrompt/BeepPrompt";

export default function PageLayout({ children }) {
  const [user, loading, error] = useAuthState(auth);
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openSignup, setOpenSignup] = React.useState(false);
  const [addBeep, setAddBeep] = React.useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <HeaderBar active={user} openSignup={() => setOpenSignup(true)} />
      <SideNav active={user} />
      <Box
        component="main"
        position="relative"
        sx={{
          width: { xs: "100%", sm: `calc(100% - 60vw)` },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Toolbar />

        {children}
        {user && (
          <Box
            sx={{
              position: "fixed",
              bottom: 60,
              right: { xs: 20, md: "38vw" },
              zIndex: 10000,
            }}
          >
            <IconButton
              variant="contained"
              color="primary"
              sx={{
                borderRadius: "1rem",
                padding: "1rem 1rem",
                background: "#4392d4",
              }}
              onClick={() => setAddBeep(true)}
            >
              <BeepIcon />
            </IconButton>
          </Box>
        )}
      </Box>
      <Rightbar active={user} />

      <Footer
        openLogin={() => setOpenLogin(true)}
        openSignup={() => setOpenSignup(true)}
        active={user}
      />
      <BeepPrompt open={addBeep} setAddBeep={setAddBeep} />
      <LoginForm open={openLogin} handleClose={() => setOpenLogin(false)} />
      <SignUpForm open={openSignup} handleClose={() => setOpenSignup(false)} />
    </Box>
  );
}
