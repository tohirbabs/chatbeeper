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
import getDesignTokens from "./utilities/muitheme";
import { useBeeperStore } from "./utilities/store";
import { Auth } from "./Pages/auth";
import { AppLayout } from "./Pages/Private";
import { HomeFeed } from "./Pages/Private/HomeFeed";
import Profile from "./Pages/Private/Profile";

export default function App() {
  const token = useBeeperStore((state) => state.auth);

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
  const muitheme = React.useMemo(
    () => createTheme(getDesignTokens(mode)),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={muitheme}>
      <CssBaseline />
      <Toaster />
      <AnimatePresence mode="wait">
        <Routes>
          <Route index element={<GetStarted />} />
          <Route path="auth" element={<Auth />}>
            <Route path="signup" element={<SignUp />} />
            <Route path="verifymail" element={<Verify />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path=":username" element={<AppLayout />}>
            <Route path="home" element={<HomeFeed />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  );
}
