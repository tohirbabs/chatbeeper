import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ChatBeeperLogo from "../Logo";
import { SwipeableDrawer } from "@mui/material";
import {
  BookmarkIcon,
  BriefcaseIcon,
  FollowersIcon,
  LogoutIcon,
  SettingsIcon,
  SmsIcon,
  SponsoredIcon,
  TrendIcon,
} from "../icons";

const drawerWidth = 260;

function ResponsiveDrawer(props) {
  const { window } = props;

  const navItems = [
    { text: "Messages", icon: <SmsIcon /> },
    { text: "Trending", icon: <TrendIcon /> },
    { text: "Follower Requests", icon: <FollowersIcon /> },
    { text: "Settings", icon: <SettingsIcon /> },
    { text: "Saved Beeps", icon: <BookmarkIcon /> },
  ];
  const navItems2 = [
    { text: "Business Account", icon: <BriefcaseIcon /> },
    { text: "Sponsored Beeps", icon: <SponsoredIcon /> },
    { text: "Logout", icon: <LogoutIcon /> },
  ];

  const drawer = (
    <div>
      <Toolbar>
        <ChatBeeperLogo size={35} />
      </Toolbar>
      <Divider />
      <List>
        {navItems.map((navItem, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: "40px" }}>
                {navItem.icon}
              </ListItemIcon>
              <ListItemText primary={navItem.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {navItems2.map((navItem, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: "40px" }}>
                {navItem.icon}
              </ListItemIcon>
              <ListItemText primary={navItem.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  console.log(props.mobileOpen);
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <SwipeableDrawer
        container={container}
        variant="temporary"
        open={props.mobileOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </SwipeableDrawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            position: "fixed",
            ml: "calc(50vw - 600px)",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default ResponsiveDrawer;
