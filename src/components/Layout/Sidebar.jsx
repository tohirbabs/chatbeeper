import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircleRounded";
import { Badge } from "@mui/material";
import {
  BookmarkIcon,
  LogoutIcon,
  SettingsIcon,
  SmsIcon,
  NotificationIcon,
  HomeIcon,
} from "../icons";
import { logout } from "../../utilities/firebase";
import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

function SideNav({ active }) {
  const activeNavItems = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "Profile", icon: <AccountCircle fontSize="large" /> },
    {
      text: "Notifications",
      icon: (
        <Badge badgeContent={4} color="error">
          <NotificationIcon />
        </Badge>
      ),
    },

    { text: "Saved Beeps", icon: <BookmarkIcon /> },
    {
      text: "Messages",
      icon: <SmsIcon />,
    },

    { text: "Settings", icon: <SettingsIcon /> },

    {
      text: "Logout",
      icon: <LogoutIcon />,
      action: () => {
        console.log("clicked");
        logout();
      },
    },
  ];
  const navItems = [
    { text: "Explore", icon: <HomeIcon /> },

    { text: "Settings", icon: <SettingsIcon /> },
  ];

  const activeDrawer = (
    <div>
      <Toolbar />
      <List sx={{ ml: { md: "20%" }, mr: { md: "1rem" } }}>
        {activeNavItems.map((navItem, index) => (
          <NavLink
            to={navItem.text.toLowerCase()}
            style={{ textDecoration: "none" }}
          >
            {({ isActive, isPending }) => (
              <ListItem key={index}>
                <ListItemButton
                  onClick={navItem.action}
                  sx={{
                    borderRadius: "1rem",
                    background: isActive ? "rgb(56 111 164/ 0.5)" : "",
                  }}
                >
                  <ListItemIcon>{navItem.icon}</ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography
                        variant="body"
                        style={{
                          fontSize: "1rem",
                          fontFamily: "Mentimun",
                          color: "white",
                        }}
                      >
                        {navItem.text}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            )}
          </NavLink>
        ))}
      </List>
    </div>
  );

  const drawer = (
    <div>
      <Toolbar />
      <List sx={{ ml: { md: "20%" }, mr: { md: "1rem" } }}>
        {navItems.map((navItem, index) => (
          <NavLink
            to={navItem.text.toLowerCase()}
            style={{ textDecoration: "none" }}
          >
            {({ isActive, isPending }) => (
              <ListItem key={index}>
                <ListItemButton
                  onClick={navItem.action}
                  sx={{
                    borderRadius: "1rem",
                    background: isActive ? "rgb(56 111 164/ 0.5)" : "",
                  }}
                >
                  <ListItemIcon>{navItem.icon}</ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography
                        variant="body"
                        style={{
                          fontSize: "1rem",
                          fontFamily: "Mentimun",
                          color: "white",
                        }}
                      >
                        {navItem.text}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            )}
          </NavLink>
        ))}
      </List>
    </div>
  );
  console.log(active);
  return (
    <Box
      component="nav"
      sx={{ width: { sm: "25vw" }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "25vw",
            zIndex: 1000,
          },
        }}
        open
      >
        {active ? activeDrawer : drawer}
      </Drawer>
    </Box>
  );
}

export default SideNav;
