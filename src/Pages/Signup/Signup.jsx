import { useState } from "react";
import { SignUpForm } from "../../components/Form";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { container, footing, heading, mainBox } from "./style";
import { Box, Container, Stack, Typography } from "@mui/material";
import Logo from "../../assets/logo/chatBeeper.svg";
import MultiStep from "../../components/Multistep/MultiStep";
import { pageAnimation } from "../../animations";

export default function CreateAccount() {
  const [currentForm, setCurrentForm] = useState(0);

  return (
    <motion.div
      variants={pageAnimation}
      animate="animate"
      initial="initial"
      exit="exit"
      transition={pageAnimation.transition}
      style={container}
    >
      <Stack sx={mainBox}>
        <Box
          component="img"
          alt="chatbeeper logo"
          src={Logo}
          width={50}
          height={50}
        />

        <Typography variant="h1" sx={heading}>
          Create an account
        </Typography>

        {/* <MultiStep currentForm={currentForm} setCurrentForm={setCurrentForm} /> */}

        <SignUpForm setCurrentForm={setCurrentForm} currentForm={currentForm} />

        <Typography variant="p" sx={footing}>
          Already have a beeper account?{" "}
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              color: "#386FA4",
              fontSize: "1.1rem",
            }}
          >
            Log in
          </Link>
        </Typography>
      </Stack>
    </motion.div>
  );
}
