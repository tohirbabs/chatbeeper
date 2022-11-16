import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import { pageAnimation } from "../../animations";

import { container } from "./style";

import beepImg from "../../assets/beep/display_img.png";
import avatar from "../../assets/beep/avatar.png";

export default function Beep() {
  return (
    <motion.div
      variants={pageAnimation}
      animate="animate"
      initial="initial"
      transition={pageAnimation.transition}
    >
      <Box>
        <Box>
          <div className="">
            <img src={avatar} alt="" />
            <div className="">
              <p>
                <span>Mark Peter</span>
                <span>@markpetr</span>
              </p>
              <p>1 hour ago</p>
            </div>
          </div>
        </Box>
        <img src={beepImg} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          molestie ultrices non non elementum vel. Varius amet euismod ut
          tortor... see more
        </p>
        <Box></Box>
      </Box>
    </motion.div>
  );
}
