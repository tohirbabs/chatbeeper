import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";

import { AiOutlineArrowRight } from "react-icons/ai";

import { Stack } from "@mui/material";
import { StyledButton } from "../components/StyledButton";
import { pageAnimation } from "../animations";
import { GetStartedIllustration } from "../components/Get-started-illustration";

export default function GetStarted() {
  const location = useNavigate();
  return (
    <motion.div
      variants={pageAnimation}
      animate="animate"
      initial="initial"
      exit="exit"
      transition={pageAnimation.transition}
    >
      <Stack
        width="100vw"
        maxWidth="375px"
        spacing={5}
        pt={8}
        alignItems="center"
        margin="auto"
      >
        <GetStartedIllustration />
        <Typography variant="h1">Share. Interact. Mingle.</Typography>
        <StyledButton
          variant="contained"
          onClick={() => location("/create-account")}
        >
          Get Started <AiOutlineArrowRight />
        </StyledButton>
      </Stack>
    </motion.div>
  );
}
