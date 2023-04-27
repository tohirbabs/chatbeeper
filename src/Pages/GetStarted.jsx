import React from "react";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";

import { AiOutlineArrowRight } from "react-icons/ai";

import { Box, Container, Stack } from "@mui/material";
import { StyledButton } from "../components/StyledButton";
import { GetStartedIllustration } from "../components/Get-started-illustration";
import { pageAnimation } from "../utilities/animations";

import { container } from "./Home/style";
import { Logo } from "../assets/logo";

export default function GetStarted() {
  const [loadIn, setLoadIn] = React.useState(true);
  const location = useNavigate();

  React.useEffect(() => {
    setTimeout(() => setLoadIn(false), 4000);
  }, []);

  return (
    <motion.div
      variants={pageAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transitions={pageAnimation.transition}
    >
      <Container sx={container}>
        {loadIn ? (
          <Box
            component="img"
            alt="chatbeeper logo"
            src={Logo}
            width={80}
            height={80}
          />
        ) : (
          <Stack
            width="100%"
            maxWidth="375px"
            spacing={20}
            alignItems="center"
            margin="auto"
          >
            <GetStartedIllustration />
            <Box width="100%" textAlign="center">
              <Typography pb={3}>Share. Interact. Mingle.</Typography>
              <StyledButton
                variant="contained"
                onClick={() => location("auth/signup")}
              >
                <Typography pr={1}>Get Started </Typography>
                <AiOutlineArrowRight />
              </StyledButton>
            </Box>
          </Stack>
        )}
      </Container>
    </motion.div>
  );
}
