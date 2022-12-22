import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Container from "@mui/material/Container";
import { pageAnimation } from "../../animations";
import { Logo } from "../../assets/logo";

import { container } from "./style";
export default function Index() {
  const history = useNavigate();

  useEffect(() => {
    setTimeout(() => history("/login"), 3000);
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
        <img alt="chatbeeper logo" src={Logo} width={80} height={80} />
      </Container>
    </motion.div>
  );
}
