import React from "react";
import Beep from "../Beep/Beep";
import avatar from "../../assets/mark-avatar.png";
import beepImg from "../../assets/display-img.png";

export const HomeFeed = () => {
  const homeFeedData = [
    {
      userDp: avatar,
      userName: "Mark Peter",
      userHandle: "@markpetr",
      beepAge: "1 hour ago",
      beepImg: beepImg,
      beepText:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie ultrices non non elementum vel. Varius amet euismod ut tortor...",
      replies: "10",
      rebeeps: "2",
      dislikes: "1",
      likes: "25",
    },
    {
      userDp: avatar,
      userName: "Mark Peter",
      userHandle: "@markpetr",
      beepAge: "1 hour ago",
      beepImg: beepImg,
      beepText:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie ultrices non non elementum vel. Varius amet euismod ut tortor...",
      replies: "10",
      rebeeps: "2",
      dislikes: "1",
      likes: "25",
    },
    {
      userDp: avatar,
      userName: "Mark Peter",
      userHandle: "@markpetr",
      beepAge: "1 hour ago",
      beepImg: beepImg,
      beepText:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie ultrices non non elementum vel. Varius amet euismod ut tortor...",
      replies: "10",
      rebeeps: "2",
      dislikes: "1",
      likes: "25",
    },
  ];
  return homeFeedData.map((data) => <Beep data={data} />);
};
