import { Container, Stack, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import LoginForm from "../../components/Form/LoginForm";
import ChatBeeperLogo from "../../components/Logo";
import { container, footing, heading, mainBox } from "./style";

export const Login = () => {
  return (
    <Container sx={container}>
      <Stack sx={mainBox}>
        <ChatBeeperLogo />

        <Typography variant="h1" sx={heading}>
          Login to your account
        </Typography>

        <LoginForm />

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
    </Container>
  );
};
