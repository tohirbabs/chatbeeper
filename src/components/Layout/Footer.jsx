import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { BeepIcon, HomeIcon, NotificationIcon, TourIcon } from "../icons";
import { Divider } from "@mui/material";
import { AccountCircleOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Footer({ setAddBeep }) {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const navigate = useNavigate();

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: { md: "none" },
        zIndex: 1000,
      }}
      elevation={3}
    >
      <Divider />
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ pb: 2, height: "66px" }}
      >
        <BottomNavigationAction icon={<HomeIcon />} />
        <BottomNavigationAction icon={<TourIcon />} />
        <BottomNavigationAction
          onClick={() => {
            setAddBeep(true);
          }}
          icon={<BeepIcon />}
        />
        <BottomNavigationAction icon={<NotificationIcon />} />
        <BottomNavigationAction
          icon={<AccountCircleOutlined />}
          onClick={() => {
            navigate("/:username/profile");
          }}
        />
      </BottomNavigation>
    </Paper>
    // </Box>
  );
}
