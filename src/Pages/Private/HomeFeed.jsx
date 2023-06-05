import {
  Avatar,
  Box,
  CircularProgress,
  Fab,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Beep from "../../components/Beep/Beep";
import { useBeeperStore } from "../../utilities/store";
import BeepCard from "../../components/Beep/BeepCard";
import { auth, getBeeps } from "../../utilities/firebase";
import { FeedTwoTone } from "@mui/icons-material";
import { useAuthState } from "react-firebase-hooks/auth";
import gallery from "../../assets/galleryicon.png";
import sendbeep from "../../assets/send.png";
import lock from "../../assets/lock-slash.png";

export const HomeFeed = () => {
  const navigate = useNavigate();
  const [imgUpload, setImgUpload] = useState(null);

  // const feed = useBeeperStore((state) => state.feeds);
  const addToFeed = useBeeperStore((state) => state.addToFeed);
  const [user, loading, error] = useAuthState(auth);
  const [beepText, setbeepText] = useState("");

  const [isLoading, setisLoading] = useState(false);
  const [feed, setFeed] = useState([]);

  const location = useNavigate();

  const fetchData = async () => {
    setisLoading(true);

    const res = await getBeeps();

    setFeed(res);
    setisLoading(false);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  console.log(loading);
  React.useEffect(() => {
    if (user) navigate("/username/explore");
  }, [user, loading]);

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
          {user && (
            <div
              className="reply_prompt"
              style={{
                maxHeight: "80vh",
                overflowX: "hidden",
                overflowY: "auto",
                borderRadius: "1rem",
                border: "1px white solid",
                maxWidth: "600px",
              }}
            >
              <header>
                <Avatar
                  aria-label="recipe"
                  src={`https://api.dicebear.com/5.x/adventurer/svg?seed=${user?.displayName}`}
                  alt="user dp"
                />
              </header>
              <textarea
                name="beep"
                value={beepText}
                class="autoExpand"
                rows="3"
                data-min-rows="3"
                autoFocus
                autosize
                placeholder="add a beep"
                // onChange={handlebeepText}
              ></textarea>
              {/* <span
          class="textarea"
          role="textbox"
          contenteditable
          // onChange={handleBeepText}
        ></span> */}
              {imgUpload && (
                <Box
                  component="img"
                  width="100%"
                  sx={{ borderRadius: "1rem", maxWidth: "450px" }}
                  src={imgUpload}
                />
              )}

              <div className="prompt_actions">
                <div className="prompt_extras">
                  <input
                    accept="image/*"
                    style={{ display: "none" }}
                    id="add-image-button"
                    multiple
                    type="file"
                    // onChange={handleUploadClick}
                  />
                  <label htmlFor="add-image-button">
                    <Fab
                      component="span"
                      sx={{ width: "36px", height: "36px" }}
                    >
                      {/* <AddPhotoAlternateRounded /> */}
                      <img src={gallery} />
                    </Fab>
                  </label>
                  <input
                    accept="image/*"
                    style={{ display: "none" }}
                    id="lock-draft"
                    multiple
                    type="file"
                    // onChange={handleUploadClick}
                  />
                  <label htmlFor="lock-draft">
                    <Fab
                      component="span"
                      sx={{ width: "36px", height: "36px" }}
                    >
                      {/* <AddPhotoAlternateRounded /> */}
                      <img src={lock} />
                    </Fab>
                  </label>
                </div>
                <button type="submit">
                  <p>Beep</p>
                  <img src={sendbeep} />
                </button>
              </div>
            </div>
          )}

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
