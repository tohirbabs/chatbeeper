import { Routes, Route } from "react-router-dom";
import React from "react";

import { Toaster } from "react-hot-toast";

// MUI Imports
import {
  createTheme,
  useMediaQuery,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { AnimatePresence } from "framer-motion";

// Pages
import { Login, SignUp, GetStarted } from "./Pages/index";
import { Verify } from "./Pages/auth/Verify";

// Utility Imports
import getDesignTokens from "./utilities/apptheme";
import { useBeeperStore } from "./utilities/store";
import { Auth } from "./Pages/auth";
import { AppLayout } from "./Pages/Private";
import { HomeFeed } from "./Pages/Private/HomeFeed";
import Profile from "./Pages/Private/Profile";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./utilities/firebase";
import { useNavigate } from "react-router-dom";

export default function App() {
  const token = useBeeperStore((state) => state.auth);

  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  // Theme settings
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme:dark)");

  // const [mode, setMode] = React.useState("dark");
  const [mode, setMode] = React.useState(prefersDarkMode ? "dark" : "light");

  const colorMode = React.useMemo(
    () => ({
      //  The mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  //  Update the theme only if the mode changes
  const apptheme = React.useMemo(
    () => createTheme(getDesignTokens(mode)),
    [prefersDarkMode]
  );

  React.useEffect(() => {
    navigate("/app/explore");
  }, [user]);
  return (
    <ThemeProvider theme={apptheme}>
      <CssBaseline />
      <Toaster />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path=":username" element={<AppLayout />}>
            <Route path="explore" element={<HomeFeed />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<p>Page in development</p>} />
          </Route>
          {/* <Route path="*" element={<p>This Page does not exist</p>} /> */}
          <Route index element={<Login />} />
          <Route path="auth" element={<Auth />}>
            <Route path="signup" element={<SignUp />} />
            <Route path="verifymail" element={<Verify />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  );
}
