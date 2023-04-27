import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Container from "@mui/material/Container";

import { container } from "./style";
import { Box } from "@mui/material";
import { pageAnimation } from "../../utilities/animations";
import { Logo } from "../../assets/logo";
export default function Index() {
  const history = useNavigate();

  useEffect(() => {
    setTimeout(() => history("/"), 3000);
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
        <Box
          component="img"
          alt="chatbeeper logo"
          src={Logo}
          width={80}
          height={80}
        />
      </Container>
    </motion.div>
  );
}
