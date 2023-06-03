import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import {
  BeepIcon,
  HomeIcon,
  NotificationIcon,
  SmsIcon,
  TourIcon,
} from "../icons";
import { Divider } from "@mui/material";
import { AccountCircleOutlined, Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../icons/SearchIcon";

export default function Footer({ setAddBeep }) {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const navigate = useNavigate();
  console.log(value);
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: { md: "none" },
        zIndex: 1000,
        background: "transparent",
      }}
      // elevation={3}
    >
      <Divider />
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          background: "rgba(10, 21, 30, 0.2)",

          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
        }}
      >
        <BottomNavigationAction icon={<HomeIcon active={value == 0} />} />
        <BottomNavigationAction icon={<SearchIcon active={value == 1} />} />
        {/* <BottomNavigationAction
          onClick={() => {
            setAddBeep(true);
          }}
          icon={<BeepIcon />}
        /> */}
        <BottomNavigationAction
          icon={<NotificationIcon active={value == 2} />}
        />
        <BottomNavigationAction icon={<SmsIcon active={value == 3} />} />
      </BottomNavigation>
    </Paper>
    // </Box>
  );
}
