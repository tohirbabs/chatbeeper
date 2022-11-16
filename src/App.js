import { Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme, Paper } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { Home, Onboarding } from "./Pages/index";
import {
  PersonalAccount,
  BusinessAccout,
  AccountCreation,
} from "./Pages/Registration";
import { BeepTest } from "./Pages/beep_test";
import getDesignTokens from "./theme/theme";

function App() {
  const [mode, setMode] = React.useState("dark");

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
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const location = useLocation();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/welcome" element={<Onboarding />} />
            <Route path="/create-account" element={<AccountCreation />} />
            <Route
              path="/create-personal-account"
              element={<PersonalAccount />}
            />
            <Route
              path="/create-business-account"
              element={<BusinessAccout />}
            />
            <Route path="/beep-test" element={<BeepTest />} />
          </Routes>
        </AnimatePresence>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
