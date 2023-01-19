import { useNavigate } from "react-router-dom";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";

import { container, h1, button } from "./style";

import welcome from "../../assets/welcomer.png";
import { pageAnimation } from "../../utils/animations";

export default function Onboarding() {
  const location = useNavigate();
  return (
    <motion.div
      variants={pageAnimation}
      animate="animate"
      initial="initial"
      // exit="exit"
      transition={pageAnimation.transition}
    >
      <Stack width="100vw" mt={5} alignItems="center">
        <img src={welcome} alt="chatbeeper logo" />
        <Typography variant="h1">Share. Interact. Mingle.</Typography>
        <Button
          sx={button}
          // color={"primary"}
          variant="contained"
          onClick={() => location("/create-account")}
        >
          Get Started <AiOutlineArrowRight />
        </Button>
      </Stack>
    </motion.div>
  );
}
