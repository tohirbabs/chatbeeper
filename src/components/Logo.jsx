import { Box } from "@mui/material";
import { Logo } from "../assets/logo";
export default function ChatBeeperLogo() {
  return (
    <Box
      component="img"
      alt="chatbeeper logo"
      src={Logo}
      width={60}
      height={60}
    />
  );
}
