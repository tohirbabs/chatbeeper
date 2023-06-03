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
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import { logout } from "../../utilities/firebase";
import AccountCircle from "@mui/icons-material/AccountCircleRounded";
import MoreVertIcon from "@mui/icons-material/MoreHorizOutlined";

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
import smsIcon from "../icons/sms.png";
import Logo from "../../assets/chatbeeper.png";
import ChatBeeperLogo from "../Logo";
import {
  InputBase,
  Menu,
  MenuItem,
  MenuList,
  alpha,
  styled,
} from "@mui/material";
import Footer from "./Footer";
import SearchIcon from "../icons/SearchIcon";

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
  padding: theme.spacing(0, 1),
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
    padding: theme.spacing(1),
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

export default function HeaderBar({ handleDrawerToggle, setAddBeep }) {
  // const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          alignItems: "center",
          background: "rgba(10, 21, 30, 0.2)",

          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            width: { xs: "100%", md: "90%" },
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
            <AccountCircle fontSize="large" />
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

          <div>
            <IconButton
              id="basic-button"
              color="inherit"
              aria-label="open drawer"
              edge="start"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{ display: { sm: "none" } }}
            >
              <ViewStreamIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              PaperProps={{
                style: {
                  borderRadius: "1rem", // Set the desired border radius
                },
              }}
            >
              <MenuList>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <SettingsIcon size={20} />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography
                        variant="body"
                        style={{
                          fontFamily: "Mentimun",
                        }}
                      >
                        Settings
                      </Typography>
                    }
                  />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <LogoutIcon size={20} />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography
                        variant="body"
                        style={{
                          fontFamily: "Mentimun",
                        }}
                      >
                        Log out
                      </Typography>
                    }
                  />
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
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
    </Box>
  );
}
