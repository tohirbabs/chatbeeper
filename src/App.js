import { Routes, Route, useLocation } from "react-router-dom";
import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme, Paper, useMediaQuery } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { Home } from "./Pages/index";

import getDesignTokens from "./theme/theme";

import { CookiesProvider } from "react-cookie";
import { Toaster } from "react-hot-toast";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Login } from "./Pages/Login/Login";
import GetStarted from "./Pages/GetStarted/GetStarted";
import CreateAccount from "./Pages/Signup/Signup";
import { Verify } from "./Pages/Verify";
import { Layout } from "./components/Layout/Layout";
import UserFeed from "./Pages/UserFeed/UserFeed";
import UserProfile from "./Pages/UserProfile/UserProfile";
import useToken from "./Hooks/useToken";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme:dark)");
  // const preferredMode =
  const [mode, setMode] = React.useState("dark");
  // const [mode, setMode] = React.useState(prefersDarkMode ? "dark" : "light");

  const client = new QueryClient();

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
  const theme = React.useMemo(
    () => createTheme(getDesignTokens(mode)),
    [prefersDarkMode]
  );

  const location = useLocation();

  const onBoardRoutes = [
    "/",
    "/welcome",
    "/login",
    "/create-account",
    "/verify",
    "/create-business-account",
  ];

  const { token, setToken } = useToken();

  console.log(token);
  if (!token) {
    return (
      <QueryClientProvider client={client}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Toaster />
          <AnimatePresence mode="wait">
            <Login setToken={setToken} />
          </AnimatePresence>
        </ThemeProvider>
      </QueryClientProvider>
    );
  }

  return (
    <CookiesProvider>
      <QueryClientProvider client={client}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Toaster />
          <AnimatePresence mode="wait">
            {!onBoardRoutes.includes(location.pathname) ? (
              <Layout>
                <Routes location={location} key={location.pathname}>
                  <Route exact path="/profile" element={<UserProfile />} />
                  <Route exact path="/home" element={<UserFeed />} />
                  {/* <Route
                    exact
                    path="/notifications"
                    element={<Notification />}
                  /> */}
                  {/* <Route
                    exact
                    path="/follower_requests"
                    element={<FollowerRequest />}
                  /> */}
                </Routes>
              </Layout>
            ) : (
              <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/welcome" element={<GetStarted />} />
                <Route
                  exact
                  path="/create-account"
                  element={<CreateAccount />}
                />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/verify" element={<Verify />} />
              </Routes>
            )}
          </AnimatePresence>
        </ThemeProvider>
      </QueryClientProvider>
    </CookiesProvider>
  );
}

export default App;
