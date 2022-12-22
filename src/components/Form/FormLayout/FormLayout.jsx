import { useState } from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { motion } from "framer-motion";

import { container, mainBox, heading, footing } from "./style";
import MultiStep from "./MultiStep";
import ChatBeeperLogo from "../../Logo";
import { pageAnimation } from "../../../animations";
import { NavLink } from "react-router-dom";

export default function FormLayout({
  children,
  currentForm,
  setCurrentForm,
  login,
}) {
  return (
    <motion.div
      variants={pageAnimation}
      animate="animate"
      initial="initial"
      transition={pageAnimation.transition}
    >
      <Container sx={container}>
        <Box sx={mainBox}>
          <ChatBeeperLogo />

          <Typography variant="h1" sx={heading}>
            {login ? "Login to your account" : " Create an account"}
          </Typography>
          {login ? null : (
            <MultiStep
              currentForm={currentForm}
              setCurrentForm={setCurrentForm}
            />
          )}

          {children}
          <Box sx={footing}>
            {login ? (
              <>
                <Typography variant="p" sx={footing}>
                  Don't have a beeper account?
                </Typography>
                <NavLink
                  to="/welcome"
                  style={{
                    textDecoration: "none",
                    color: "#386FA4",
                    fontSize: "1.1rem",
                  }}
                >
                  Sign up
                </NavLink>
              </>
            ) : (
              <>
                <Typography variant="p" sx={footing}>
                  Already have a beeper account?
                </Typography>
                <NavLink
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "#386FA4",
                    fontSize: "1.1rem",
                  }}
                >
                  Log in
                </NavLink>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </motion.div>
  );
}
