import { Routes, Route, useLocation } from "react-router-dom";
import React from "react";

import { CookiesProvider } from "react-cookie";
import { Toaster } from "react-hot-toast";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// MUI Imports
import {
  createTheme,
  useMediaQuery,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { AnimatePresence } from "framer-motion";

// Pages
import { Home, Login, SignUp, GetStarted } from "./Pages/index";

import { Verify } from "./Pages/Verify";
import { Layout } from "./components/Layout/Layout";
import UserFeed from "./Pages/UserFeed/UserFeed";
import UserProfile from "./Pages/UserProfile/UserProfile";

// Utility Imports
import { useStore } from "./store";
import getDesignTokens from "./utils/muitheme";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme:dark)");
  const token = useStore((state) => state.auth);

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
  const muitheme = React.useMemo(
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
  // console.log(token);

  // if (!token) {
  //   return (
  //     <QueryClientProvider client={client}>
  //       <ThemeProvider theme={muitheme}>
  //         <CssBaseline />
  //         <Toaster />
  //         <AnimatePresence mode="wait">
  //           <Login />
  //         </AnimatePresence>
  //       </ThemeProvider>
  //     </QueryClientProvider>
  //   );
  // }

  return (
    <CookiesProvider>
      <QueryClientProvider client={client}>
        <ThemeProvider theme={muitheme}>
          <CssBaseline />
          <Toaster />
          <AnimatePresence mode="wait">
            {!onBoardRoutes.includes(location.pathname) ? (
              <Routes location={location} key={location.pathname}>
                <Route
                  exact
                  path="/profile"
                  element={
                    <Layout>
                      <UserProfile />
                    </Layout>
                  }
                />
                <Route
                  exact
                  path="/home"
                  element={
                    <Layout>
                      <UserFeed />
                    </Layout>
                  }
                />

                <Route path="*" element={<p>Page not found</p>} />
              </Routes>
            ) : (
              <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/welcome" element={<GetStarted />} />
                <Route exact path="/create-account" element={<SignUp />} />
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
