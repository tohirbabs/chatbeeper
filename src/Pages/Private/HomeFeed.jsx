import { Box, CircularProgress, Stack, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Beep from "../../components/Beep/Beep";
import { useBeeperStore } from "../../utilities/store";
import BeepCard from "../../components/Beep/BeepCard";

export const HomeFeed = () => {
  const feed = useBeeperStore((state) => state.feeds);
  const [loading, setloading] = useState(false);

  const location = useNavigate();

  // useEffect(() => {
  //   GET("feed", userInfo.jwt)
  //     .then((res) => res.json())
  //     .then((res) => console.log(res))
  //     // .then((res) => console.log(res))

  //     .catch((err) => console.log("error:", err))
  //     .finally(() => setloading(false));
  // }, []);

  return (
    <Stack>
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
        <Box position="relative">
          {feed.map((data, i) => (
            <BeepCard data={data} key={i} />
          ))}
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
