import { useState } from "react";
import { SignUpForm } from "../../components/Form";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Stack, Typography } from "@mui/material";
import ChatBeeperLogo from "../../components/Logo";
import { pageAnimation } from "../../utils/animations";

export default function CreateAccount() {
  return (
    <motion.div
      variants={pageAnimation}
      animate="animate"
      initial="initial"
      exit="exit"
      transition={pageAnimation.transition}
    >
      <Stack width="100vw" mt={5} alignItems="center">
        <ChatBeeperLogo />

        <Typography variant="h1" my={2}>
          Create an account
        </Typography>

        {/* <MultiStep currentForm={currentForm} setCurrentForm={setCurrentForm} /> */}

        <SignUpForm />
        <Typography variant="body1" my={2}>
          Already have a beeper account?{" "}
          <Link to="/login">
            <Typography variant="link">Log in</Typography>
          </Link>
        </Typography>
      </Stack>
    </motion.div>
  );
}
