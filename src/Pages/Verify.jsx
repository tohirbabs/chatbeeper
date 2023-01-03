import {
  Box,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import Logo from "../assets/verify.png";
import { motion } from "framer-motion";

import { container, footing, heading, mainBox } from "./style";
import { pageAnimation } from "../animations";
import VerificationInput from "react-verification-input";
import { StyledButton } from "../components/StyledButton";
import { useState } from "react";
import { PATCH, POST } from "../utils/request";
import toast from "react-hot-toast";
import { useStore } from "../store";
import { useNavigate } from "react-router-dom";

export const Verify = () => {
  const [code, setcode] = useState("");
  const [loading, setloading] = useState(false);
  const user = useStore((state) => state.userReg.data);
  const navigate = useNavigate();

  console.log(code);
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
        <Box component="img" alt="chatbeeper logo" src={Logo} />

        <Typography variant="h1" sx={heading}>
          Verification
        </Typography>
        <Typography variant="p">
          Please enter the 6 digit verification code sent to {user.email}
        </Typography>

        <VerificationInput
          onChange={(e) => {
            setcode(e);
          }}
        />

        <StyledButton
          variant="contained"
          onClick={() => {
            setloading(true);

            const body = {
              //   username: user.username,
              //   email: user.email,
              //   token: code,
              username: "dev_panda",
              email: "tohirbabs@gmail.com",
              token: code,
            };
            PATCH("auth/verify-token/email", JSON.stringify(body))
              .then((res) => res.json())
              .then((res) =>
                //   res.message ? toast(res.message) : console.log(res)
                navigate("/login")
              )
              .catch((err) => console.log("error:", err))
              .finally(() => setloading(false));
          }}
        >
          {loading ? <CircularProgress color="secondary" /> : "Verify"}
        </StyledButton>
      </Stack>
    </motion.div>
  );
};
