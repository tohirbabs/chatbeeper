import React from "react";
import Beep from "../Beep/Beep";
import avatar from "../../assets/mark-avatar.png";
import beepImg1 from "../../assets/display-img.png";
import beepImg2 from "../../assets/beep-img.png";
import { useStore } from "../../store";
import { Box, Typography } from "@mui/material";
import BeepCard from "../Beep/BeepCard";

export const HomeFeed = () => {
  const feed = useStore((state) => state.feeds);

  const homeFeedData = [
    {
      userDp: avatar,
      userName: "Jason Bourne",
      userHandle: "@jb",
      beepAge: "1 hour ago",
      beepImg: false,
      beepText:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie ultrices non non elementum vel. Varius amet euismod ut tortor,  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie ultrices non non elementum vel. Varius amet euismod ut tortor...",
      replies: "10",
      rebeeps: "2",
      dislikes: "1",
      likes: "25",
    },
    {
      userDp: avatar,
      userName: "John Doe",
      userHandle: "@jdoe",
      beepAge: "16 mins ago",
      beepImg: beepImg2,
      beepText:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie ultrices non non elementum vel. Varius amet euismod ut tortor...",

      replies: "1k",
      rebeeps: "168",
      dislikes: "17",
      likes: "2567",
    },
    {
      userDp: avatar,
      userName: "Mark Peter",
      userHandle: "@markpetr",
      beepAge: "2 weeks ago",
      beepImg: beepImg1,
      beepText: " Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      replies: "80",
      rebeeps: "265",
      dislikes: "35",
      likes: "775",
    },
  ];
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
