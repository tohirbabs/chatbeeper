import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Container from "@mui/material/Container";
import { Logo } from "../../assets/logo";
import "./style.css";
import { BeepPrompt } from "../BeepPrompt/BeepPrompt";

import HeaderBar from "./Header";
import Footer from "./Footer";
import SideDrawer from "./Sidebar";
import { Box, Toolbar } from "@mui/material";
import { useBeeperStore } from "../../utilities/store";
import { pageAnimation } from "../../utilities/animations";
import { Rightbar } from "./Rightbar";

export const Layout = ({ children, setHomeFeedData, homeFeedData }) => {
  const [addBeep, setAddBeep] = useState(false);

  const [loading, setloading] = useState(false);

  const updateUserData = useBeeperStore((state) => state.updateUserData);
  const updateAvatar = useBeeperStore((state) => state.updateAvatar);
  const userData = useBeeperStore((state) => state.userData);
  const userAvatar = useBeeperStore((state) => state.userAvatar);

  const userInfo = useBeeperStore((state) => state.auth);
  const navigate = useNavigate();
  console.log(userInfo);

  // useEffect(() => {
  //   if (userInfo) {
  //     GET("user", userInfo.jwt)
  //       .then((res) => res.json())
  //       .then(
  //         (res) =>
  //           (res._id && updateUserData(res)) ||
  //           (res.message && toast(res.message))
  //       )
  //       .catch((err) => console.log("error:", err))
  //       .finally(() => setloading(false));
  //   } else {
  //     // navigate("/create-account");
  //   }
  // }, []);

  const drawerWidth = 260;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {loading ? (
        <motion.div
          variants={pageAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transitions={pageAnimation.transition}
        >
          <Container
            sx={{
              display: "grid",
              placeItems: "center",
              height: "100vh",
            }}
          >
            <Box
              component="img"
              alt="chatbeeper logo"
              src={Logo}
              width={80}
              height={80}
            />
          </Container>
        </motion.div>
      ) : (
        <Box
          sx={{
            display: "flex",
            position: "relative",
            width: { lg: "1180px" },
            margin: "auto",
          }}
        >
          <HeaderBar
            handleDrawerToggle={handleDrawerToggle}
            setAddBeep={setAddBeep}
          />
          <SideDrawer
            handleDrawerToggle={handleDrawerToggle}
            setAddBeep={setAddBeep}
            mobileOpen={mobileOpen}
          />

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <Toolbar />
            <Box
              sx={{
                display: { xs: "block", sm: "grid" },
                gridTemplateColumns: "8fr 5fr",
              }}
            >
              {children}
              <Rightbar />
            </Box>
          </Box>
          {/* <FooterMenu
        nav={location.pathname}
        setAddBeep={setAddBeep}
        overlay={overlay}
      /> */}
          <Footer setAddBeep={setAddBeep} />
          <BeepPrompt open={addBeep} setAddBeep={setAddBeep} />
        </Box>
      )}
    </>
  );
};
