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
import { Button, Divider, Stack, Typography } from "@mui/material";
import { AccountCircleOutlined, Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../icons/SearchIcon";
import { StyledButton } from "../StyledButton";

export default function Footer({ setAddBeep, active, openLogin, openSignup }) {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const navigate = useNavigate();
  console.log(active);
  if (active) {
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
          <BottomNavigationAction
            icon={<HomeIcon active={value == 0} />}
            href="/home"
          />
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
    );
  }
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        // display: { md: "none" },
        zIndex: 1000,
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
          background: "#386fa4",

          height: { xs: "4rem", md: "5rem" },
          width: "100%",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
        }}
      >
        <Stack
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          width="100%"
          sx={{
            padding: "0.3rem 0",
          }}
        >
          <Stack
            sx={{
              width: { md: "30%" },
              display: { xs: "none", sm: "block" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1rem", sm: "1.5rem" },
              }}
            >
              Don't miss exciting Beeps
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "0.6rem", sm: "1rem" },
              }}
            >
              People on Chatbeeper are the first to know.
            </Typography>
          </Stack>
          <Stack
            flexDirection="row"
            // gap={2}
            width="100%"
            maxWidth="400px"
            justifyContent="space-around"
          >
            <Button
              sx={{
                background: "#fff",
                color: "#386fa4",
                fontSize: { xs: "0.8rem", sm: "1rem" },
                fontFamily: "Mentimun",
                borderRadius: "0.8rem",
                width: "45%",
              }}
              onClick={() => openLogin()}
            >
              Log in
            </Button>
            <Button
              sx={{
                color: "#fff",
                border: "1px white solid",
                fontSize: { xs: "0.8rem", sm: "1rem" },
                fontFamily: "Mentimun",
                borderRadius: "0.8rem",
                width: "45%",
              }}
              onClick={() => openSignup()}
            >
              Sign Up
            </Button>
          </Stack>
        </Stack>
      </BottomNavigation>
    </Paper>
    // </Box>
  );
}
