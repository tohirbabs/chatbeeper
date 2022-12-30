import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { AiOutlineArrowRight } from "react-icons/ai";

import { container, h1, button } from "./style";

import welcome from "../../assets/welcomer.png";
import { Stack } from "@mui/material";
import { StyledButton } from "../../components/StyledButton";
import { GetStartedIllustration } from "./Get-started-illustration";
import { pageAnimation } from "../../animations";

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
      <Container sx={container}>
        <Stack spacing={7}>
          <GetStartedIllustration />
          <Typography variant="h1" sx={h1}>
            Share. Interact. Mingle.
          </Typography>
          <StyledButton
            variant="contained"
            onClick={() => location("/create-account")}
          >
            Get Started <AiOutlineArrowRight />
          </StyledButton>
        </Stack>
      </Container>
    </motion.div>
  );
}
