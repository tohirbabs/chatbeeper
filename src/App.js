import { Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme, Paper, useMediaQuery } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { Home, Onboarding } from "./Pages/index";
import {
  PersonalAccount,
  BusinessAccout,
  AccountCreation,
} from "./Pages/Registration";
import getDesignTokens from "./theme/theme";
import UserProfile from "./Pages/UserProfile/UserProfile";
import UserFeed from "./Pages/UserFeed/UserFeed";
import { CookiesProvider } from "react-cookie";
import { Toaster } from "react-hot-toast";
import FollowerRequest from "./Pages/FollowerRequest/FollowerRequests";
import Notification from "./Pages/Notification/Notifications";
import { Layout } from "./components/Layout/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { Login } from "./Pages/Login/Login";

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
    "/create-personal-account",
    "/create-business-account",
  ];

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
                  <Route
                    exact
                    path="/notifications"
                    element={<Notification />}
                  />
                  <Route
                    exact
                    path="/follower_requests"
                    element={<FollowerRequest />}
                  />
                </Routes>
              </Layout>
            ) : (
              <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/welcome" element={<Onboarding />} />
                <Route
                  exact
                  path="/create-account"
                  element={<AccountCreation />}
                />
                <Route
                  exact
                  path="/create-personal-account"
                  element={<PersonalAccount />}
                />
                <Route
                  exact
                  path="/create-business-account"
                  element={<BusinessAccout />}
                />
                <Route exact path="/login" element={<Login />} />
              </Routes>
            )}
          </AnimatePresence>
        </ThemeProvider>
      </QueryClientProvider>
    </CookiesProvider>
  );
}

export default App;
