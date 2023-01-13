import { Box, Container, Stack, Typography } from "@mui/material";
import Logo from "../../assets/logo/chatBeeper.svg";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import LoginForm from "../../components/Form/LoginForm";
import { container, footing, heading, mainBox } from "./style";
import { pageAnimation } from "../../animations";

export const Login = ({ setToken }) => {
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
          Login to your account
        </Typography>

        <LoginForm setToken={setToken} />

        <Typography variant="p" sx={footing}>
          Don't have a beeper account?{" "}
          <Link
            to="/welcome"
            style={{
              textDecoration: "none",
              color: "#386FA4",
              fontSize: "1.1rem",
            }}
          >
            Sign up
          </Link>
        </Typography>
      </Stack>
    </motion.div>
  );
};
