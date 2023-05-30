import {
  Box,
  CircularProgress,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Beep from "../../components/Beep/Beep";
import { useBeeperStore } from "../../utilities/store";
import BeepCard from "../../components/Beep/BeepCard";
import { getBeeps } from "../../utilities/firebase";
import { FeedTwoTone } from "@mui/icons-material";

export const HomeFeed = () => {
  // const feed = useBeeperStore((state) => state.feeds);
  const addToFeed = useBeeperStore((state) => state.addToFeed);

  const [loading, setloading] = useState(false);
  const [feed, setFeed] = useState([]);

  const location = useNavigate();

  const fetchData = async () => {
    setloading(true);

    const res = await getBeeps();

    setFeed(res);
    setloading(false);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   GET("feed", userInfo.jwt)
  //     .then((res) => res.json())
  //     .then((res) => console.log(res))
  //     // .then((res) => console.log(res))

  //     .catch((err) => console.log("error:", err))
  //     .finally(() => setloading(false));
  // }, []);

  return (
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
  );
};
