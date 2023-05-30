import { Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { LoginForm } from "../../components/AuthForms";
import ChatBeeperLogo from "../../components/Logo";
import { pageAnimation } from "../../utilities/animations";

export default function Login() {
  return (
    <motion.div
      variants={pageAnimation}
      animate="animate"
      initial="initial"
      exit="exit"
      transition={pageAnimation.transition}
    >
      <Stack width="100vw" spacing={5} mt={5} alignItems="center">
        <ChatBeeperLogo />
        <Typography variant="h1">Login to your account</Typography>

        <LoginForm />

        <Typography variant="body1">
          Don't have a beeper account?{" "}
          <Link to="/auth/signup">
            <Typography variant="link">Sign up</Typography>
          </Link>
        </Typography>
      </Stack>
    </motion.div>
  );
}
