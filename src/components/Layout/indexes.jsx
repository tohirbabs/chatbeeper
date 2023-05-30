import * as React from "react";
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
import { Rightbar } from "./Rightbar";
import { logout } from "../../utilities/firebase";
import AccountCircle from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from "@mui/icons-material/Search";

import {
  BeepIcon,
  BookmarkIcon,
  BriefcaseIcon,
  FollowersIcon,
  LogoutIcon,
  SettingsIcon,
  SmsIcon,
  SponsoredIcon,
  TrendIcon,
  NotificationIcon,
  HomeIcon,
} from "../icons";
import docicon from "../../assets/docicon.png";
import moonrider from "../../assets/moonrider.png";
import wakanda from "../../assets/wakanda-img.png";
import playboy from "../../assets/playboy-img.png";
import minaj from "../../assets/minaj-img.png";
import depp from "../../assets/depp-img.png";
import church from "../../assets/church-img.png";
import Badge from "@mui/material/Badge";

import Logo from "../../assets/chatbeeper.png";
import ChatBeeperLogo from "../Logo";
import { InputBase, alpha, styled } from "@mui/material";

const drawerWidth = 300;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "1rem",

  // borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "21ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}));

export default function PageLayout({ children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "Profile", icon: <AccountCircle /> },
    {
      text: "Notifications",
      icon: (
        <Badge badgeContent={4} color="error">
          <NotificationIcon />
        </Badge>
      ),
    },

    // {
    //   text: "Create Beep",
    //   icon: <BeepIcon />,
    //   action: () => {
    //     // props.setAddBeep(true);
    //   },
    // },
    { text: "Saved Beeps", icon: <BookmarkIcon /> },
    { text: "Messages", icon: <SmsIcon /> },

    { text: "Settings", icon: <SettingsIcon /> },

    // { text: "Trending", icon: <TrendIcon /> },
    // { text: "Follower Requests", icon: <FollowersIcon /> },
    // { text: "Business Account", icon: <BriefcaseIcon /> },
    // { text: "Sponsored Beeps", icon: <SponsoredIcon /> },
    {
      text: "Logout",
      icon: <LogoutIcon />,
      action: () => {
        console.log("clicked");
        logout();
      },
    },
  ];

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List sx={{ ml: { md: "20%" }, mr: { md: "1rem" } }}>
        {navItems.map((navItem, index) => (
          <ListItem key={index}>
            <ListItemButton
              onClick={navItem.action}
              sx={{ borderRadius: "1rem" }}
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
                    }}
                  >
                    {navItem.text}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ alignItems: "center" }}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            width: "90%",
            paddingRight: { md: "7vw" },
            maxWidth: "1450px",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <ChatBeeperLogo size={35} />
          </IconButton>
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            // sx={{ position: { xs: "absolute", sm: "relative" } }}
          >
            <ChatBeeperLogo size={35} />

            <Typography
              variant="h1"
              sx={{
                fontFamily: "Mentimun",
                display: { xs: "none", md: "flex" },
              }}
            >
              Chatbeeper
            </Typography>
          </Box>
          <Typography
            variant="h1"
            width={400}
            sx={{ fontFamily: "Mentimun", display: { xs: "none", md: "flex" } }}
          >
            Home
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <ChatBeeperLogo size={35} />
          </IconButton>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search Chatbeeper"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
        </Toolbar>
        <Divider />
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: "25vw" }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          //   container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "70vw",
              zIndex: 1000,
            },
          }}
        >
          {drawer}
        </Drawer>
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
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          width: { sm: `calc(100% - 60vw)` },
        }}
      >
        <Toolbar />

        {children}
      </Box>
      <Box
        component="nav"
        sx={{ width: { sm: "35vw" }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          anchor="right"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "35vw",
              zIndex: 1000,
            },
          }}
          open
        >
          <Toolbar />
          <div className="right-bar">
            <div className="trending">
              <p>Now Trending</p>
              <div className="trend-class">
                <p>Worldwide</p>
                <p>Entertainment</p>
                <p>Sports</p>
              </div>
              <img src={moonrider} alt="" />
              <p>
                <span>1.</span> <img src={wakanda} alt="" />
                <span>Wakanda Forever</span>
              </p>
              <p>
                <span>2.</span> <img src={depp} alt="" />
                <span>Johnny Depp</span>
              </p>
              <p>
                <span>3</span> <img src={minaj} alt="" />
                <span>Nicki Minaj</span>
              </p>
              <p>
                <span>4</span> <img src={church} alt="" />
                <span>Church Girl</span>
              </p>
              <p>
                <span>5</span> <img src={playboy} alt="" />
                <span>Playboy</span>
              </p>
            </div>
            <div className="recent">
              <p>Recent Activities</p>
              <div className="activity">
                <img src={docicon} alt="" />
                <div className="activity-text">
                  <h3>How to let go of your past</h3>
                  <p>beeped by you</p>
                  <p>1 week ago</p>
                </div>
              </div>
              <div className="activity">
                <img src={docicon} alt="" />
                <div className="activity-text">
                  <h3>How to let go of your past</h3>
                  <p>beeped by you</p>
                  <p>1 week ago</p>
                </div>
              </div>
              <div className="activity">
                <img src={docicon} alt="" />
                <div className="activity-text">
                  <h3>How to let go of your past</h3>
                  <p>beeped by you</p>
                  <p>1 week ago</p>
                </div>
              </div>
            </div>
          </div>
        </Drawer>
      </Box>
    </Box>
  );
}
