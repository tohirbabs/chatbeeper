import { Box } from "@mui/material";
import { Logo } from "../assets/logo";
export default function ChatBeeperLogo({ size = 60 }) {
  return (
    <Box
      component="img"
      alt="chatbeeper logo"
      src={Logo}
      width={size}
      height={size}
    />
  );
}
