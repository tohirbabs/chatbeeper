import { useNavigate } from "react-router-dom";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { AiOutlineArrowRight } from "react-icons/ai";

import { container, h1, button } from "./style";

import welcome from "../../assets/welcomer.png";
import { Stack } from "@mui/material";
import { StyledButton } from "../../components/StyledButton";

export default function GetStarted() {
  const location = useNavigate();
  return (
    <Container sx={container}>
      <Stack>
        <img src={welcome} alt="chatbeeper logo" />
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
  );
}
