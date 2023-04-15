import React from "react";
import { useStore } from "../../store";
import { Box, Typography } from "@mui/material";
import BeepCard from "../Beep/BeepCard";
import Beep from "../Beep/Beep";

export const HomeFeed = () => {
  const feed = useStore((state) => state.feeds);
  console.log(feed);
  return feed ? (
    <>
      {feed.map((data, i) => (
        <Beep data={data} key={i} />
      ))}
    </>
  ) : (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "2rem 0",
      }}
    >
      <Typography sx={{ fontSize: "1rem" }}>No Feeds Yet</Typography>
    </Box>
  );
};
