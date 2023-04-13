import React from "react";
import { useStore } from "../../store";
import { Box, Typography } from "@mui/material";
import BeepCard from "../Beep/BeepCard";

export const HomeFeed = () => {
  const feed = useStore((state) => state.feeds);

  return feed ? (
    <>
      {feed.map((data, i) => (
        <BeepCard data={data} key={i} />
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
