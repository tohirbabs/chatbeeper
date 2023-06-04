import { useNavigate } from "react-router-dom";

import { FiEdit } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiLinksFill } from "react-icons/ri";

import banner from "../../assets/banner.png";
import checkmark from "../../assets/checkmark.png";

import "./style.css";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
// import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { auth, db } from "../../utilities/firebase";
import { getAuth } from "firebase/auth";
import { ProfileHeader } from "../../components/Profile/ProfileHeader";

import {
  Box,
  CircularProgress,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import Beep from "../../components/Beep/Beep";
import { useBeeperStore } from "../../utilities/store";
import BeepCard from "../../components/Beep/BeepCard";
import { getBeeps } from "../../utilities/firebase";
import { FeedTwoTone } from "@mui/icons-material";

export default function Profile() {
  const location = useNavigate();
  // const [user, loading, error] = useAuthState(auth);
  // console.log(user.uid);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  // const fetchUserName = async () => {
  //   try {
  //     const q = query(collection(db, "users"), where("uid", "==", user?.uid));

  //     const doc = await getDocs(q);
  //     // const data = doc.docs[0].data();
  //     console.log(doc.data());
  //     // setName(data.firstname + " " + data.lastname);
  //     // setUsername(data.username);
  //   } catch (err) {
  //     console.error(err);
  //     alert("An error occured while fetching user data");
  //   }
  // };
  // useEffect(() => {
  //   if (loading) return;
  //   if (!user) return navigate("/");
  //   fetchUserName();
  // }, [user, loading]);

  // getAuth()
  //   .getUser(user?.uid)
  //   .then((userRecord) => {
  //     // See the UserRecord reference doc for the contents of userRecord.
  //     console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
  //   })
  //   .catch((error) => {
  //     console.log("Error fetching user data:", error);
  //   });

  const [loading, setloading] = useState(false);
  const [feed, setFeed] = useState([]);

  const fetchData = async () => {
    setloading(true);

    const res = await getBeeps();

    setFeed(res);
    setloading(false);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="profile">
      <ProfileHeader />
      <Stack alignItems="center" width="100%">
        {loading ? (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              justifyContent: "center",
              padding: "2rem 0",
            }}
          >
            <CircularProgress />
            <Typography sx={{ fontSize: "1rem" }}>Getting Feed...</Typography>
          </Box>
        ) : feed.length ? (
          <Box
            position="relative"
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {feed.map((data, i) => (
              <BeepCard data={data} key={i} />
            ))}
            <Toolbar />
          </Box>
        ) : (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              padding: "2rem 0",
            }}
          >
            <Typography sx={{ fontSize: "1rem" }}>
              No Feeds Yet, Add beeps to your feed
            </Typography>
          </Box>
        )}
      </Stack>
    </div>
  );
}
