import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import AccountCircle from "@mui/icons-material/AccountCircleRounded";

import { LogoutIcon, SettingsIcon } from "../icons";
import ChatBeeperLogo from "../Logo";
import {
  InputBase,
  Menu,
  MenuItem,
  MenuList,
  alpha,
  styled,
} from "@mui/material";
import SearchIcon from "../icons/SearchIcon";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../utilities/firebase";

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

export default function HeaderBar({ active, setAddBeep, openSignup }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    logout();
  };

  const location = useLocation();

  console.log(location.pathname);
  const lastSlashIndex = location.pathname.lastIndexOf("/");
  const title = location.pathname.substring(lastSlashIndex + 1);

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          alignItems: "center",
          background: "rgba(10, 21, 30, 0.2)",

          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            width: { xs: "100%", md: "95%" },
            paddingRight: { md: "7vw" },
            maxWidth: "1450px",
          }}
        >
          <Box display={{ sm: "none" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => (active ? openSignup() : navigate("profile"))}
            >
              <AccountCircle fontSize="large" />
            </IconButton>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            gap={1}
            onClick={() => {
              navigate("explore");
            }}
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
            {title}
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
        <Divider width="100%" />
      </AppBar>
    </Box>
  );
}
