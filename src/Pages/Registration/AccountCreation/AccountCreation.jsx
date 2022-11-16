import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { HiOutlineBriefcase, HiOutlineUser } from "react-icons/hi";

import FormHelperText from "@mui/material/FormHelperText";

import {
  container,
  heading,
  box,
  textBox,
  button,
  account,
  nextButton,
  accountType,
} from "./style";
import { BriefcaseIcon } from "../../../assets/icons";
import { Logo } from "../../../assets/logo";
import { pageAnimation } from "../../../animations";

import { ManIcon, WomanIcon } from "../../../assets/icons";

import { useState } from "react";
import AccountTypeSelect from "../../../components/Form/AccountTypeSelect";

export default function AccountCreation() {
  const location = useNavigate();

  const [acctType, setAcctType] = useState("");

  return (
    <motion.div
      variants={pageAnimation}
      initial="initial"
      animate="animate"
      transition={pageAnimation.transition}
    >
      <Container sx={container}>
        <Box sx={box}>
          <img src={Logo} alt="" width={80} height={80} />

          <Box>
            <Typography variant="h1" sx={heading}>
              Hello
            </Typography>
            <Box sx={textBox}>
              <span>What type of account do</span>
              <span>you want to create</span>
            </Box>
          </Box>

          <Box>
            <Box sx={accountType.container}>
              <AccountTypeSelect
                icon={<HiOutlineUser width={20} height={20} />}
                label="personal"
                type={acctType}
                setType={setAcctType}
              />
              <AccountTypeSelect
                icon={<HiOutlineBriefcase width={20} height={20} />}
                label="business"
                type={acctType}
                setType={setAcctType}
              />
            </Box>
          </Box>

          <Button
            variant="contained"
            type="submit"
            onClick={() => {
              location(`/create-${acctType}-account`);
            }}
            sx={nextButton}
            disabled={acctType.length < 1 ? true : false}
          >
            Continue
          </Button>
        </Box>
      </Container>
    </motion.div>
  );
}
