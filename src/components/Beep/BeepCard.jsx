import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import "./style.css";

import bikiniGirl from "../../assets/display_imgs/bikini_girl.png";
import {
  DislikeIcon,
  ExportIcon,
  LikeIcon,
  MessageIcon,
  RebeepIcon,
} from "../icons";
import { Badge, Chip, Divider } from "@mui/material";
import { useBeeperStore } from "../../utilities/store";

import avatar from "../../assets/mark-avatar.png";
import sendbeep from "../../assets/send.png";
import gallery from "../../assets/galleryicon.png";
import lock from "../../assets/lock-slash.png";
import "./style.css";

import { useState } from "react";
import { Box, Fab, Modal } from "@mui/material";
import toast from "react-hot-toast";
// import { POST } from "../../utils/request";

function getScrollHeight(elm) {
  var savedValue = elm.value;
  elm.value = "";
  elm._baseScrollHeight = elm.scrollHeight;
  elm.value = savedValue;
}

function onExpandableTextareaInput({ target: elm }) {
  // make sure the input event originated from a textarea and it's desired to be auto-expandable
  if (!elm.classList.contains("autoExpand") || !elm.nodeName == "TEXTAREA")
    return;

  var minRows = elm.getAttribute("data-min-rows") | 0,
    rows;
  !elm._baseScrollHeight && getScrollHeight(elm);

  elm.rows = minRows;
  rows = Math.ceil((elm.scrollHeight - elm._baseScrollHeight) / 16);
  elm.rows = minRows + rows;
}

// global delegated event listener
document.addEventListener("input", onExpandableTextareaInput);

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -7,
    top: 13,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: "0 6px",
  },
}));

export default function BeepCard({ data }) {
  const feed = useBeeperStore((state) => state.feeds);

  const [expanded, setExpanded] = React.useState(false);
  const [liked, setliked] = React.useState(false);
  const [likes, setlikes] = React.useState(parseInt(data.likes));
  const [replies, setReplies] = React.useState(data.replies);
  const [disliked, setdisliked] = React.useState(false);
  const [dislikes, setdislikes] = React.useState(parseInt(data.dislikes));

  function likeBeep() {
    setliked(!liked);
    liked ? setlikes(likes - 1) : setlikes(likes + 1);
  }

  function dislikeBeep() {
    setdisliked(!disliked);
    disliked ? setdislikes(dislikes - 1) : setdislikes(dislikes + 1);
  }
  console.log(data);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const userInfo = useBeeperStore((state) => state.userData);

  const [replyText, setReplyText] = useState("");
  const [imgUpload, setImgUpload] = useState(null);
  const addToFeed = useBeeperStore((state) => state.addToFeed);

  const handleReplyText = (event) => {
    setReplyText(event.target.value);
  };

  const handleSubmitReply = () => {
    setReplies((reply) => [
      ...reply,
      {
        userDp: `https://api.dicebear.com/5.x/adventurer/svg?seed=${userInfo?.username}`,
        userName: userInfo?.username,
        userHandle: `@${userInfo?.username}`,
        beepAge: "1 hour ago",
        beepImg: imgUpload || false,
        beepText: replyText,
        replies: [],
        rebeeps: 0,
        dislikes: 0,
        likes: 0,
      },
    ]);
    setImgUpload(null);
    setReplyText("");
    // let body = new FormData();
    // body.append("text", beepText);
    // body.append("file", null);

    // POST("beep", body)
    //   .then((res) => res.json())
    // .then((res) => setToken(res))
    // .then(
    //   (res) =>
    //     (res.text && console.log(res)) ||
    //     (res.message && console.log(res.message))
    // )
    // .then((res) => console.log(res))

    // .catch((err) => console.log("error:", err));
    // .finally(() => setloading(false));}
  };

  const handleUploadClick = (event) => {
    console.log("upload clicked");
    var file = event.target.files[0];
    const reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      setImgUpload([reader.result]);
      console.log([reader.result]);
    };
    console.log(url); // Would see a path?

    setImgUpload(file);
  };
  console.log(replies);

  return (
    <Card
      variant="outlined"
      sx={{ maxWidth: "95%", margin: "auto", mt: 1, borderRadius: "1rem" }}
    >
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            src={`https://api.dicebear.com/5.x/adventurer/svg?seed=${userInfo?.username}`}
            alt="user dp"
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.userName}
        subheader={data.beepAge}
      />
      {data.beepImg ? (
        <CardMedia
          component="img"
          // height=""
          image={data.beepImg}
          alt="Paella dish"
        />
      ) : null}

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data.beepText}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions disableSpacing sx={{ gap: { xs: "2rem", sm: "3rem" } }}>
        <IconButton
          size="small"
          aria-label="reply beep"
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
        >
          <StyledBadge badgeContent={data.replies.length} color="primary">
            <MessageIcon />
          </StyledBadge>
        </IconButton>
        <IconButton aria-label="rebeep">
          <StyledBadge badgeContent={data.rebeeps} color="primary">
            <RebeepIcon />
          </StyledBadge>
        </IconButton>
        <IconButton aria-label="like beep" onClick={() => likeBeep()}>
          <StyledBadge badgeContent={likes} color="primary">
            <LikeIcon />
          </StyledBadge>
        </IconButton>
        <IconButton aria-label="dislike beep" onClick={() => dislikeBeep()}>
          <StyledBadge badgeContent={dislikes} color="error">
            <DislikeIcon />
          </StyledBadge>
        </IconButton>
        <IconButton aria-label="share beep" sx={{ marginLeft: "auto" }}>
          <ExportIcon />
        </IconButton>
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit sx={{ pb: 2 }}>
        <Divider />
        <div
          className="reply_prompt"
          style={{
            maxHeight: "80vh",
            overflowX: "hidden",
            overflowY: "auto",
            borderRadius: "1rem",
            maxWidth: "600px",
          }}
        >
          <header>
            <Avatar
              aria-label="recipe"
              src={`https://api.dicebear.com/5.x/adventurer/svg?seed=${userInfo?.username}`}
              alt="user dp"
            />
          </header>
          <textarea
            name="reply"
            value={replyText}
            class="autoExpand"
            rows="3"
            data-min-rows="3"
            autoFocus
            autosize
            placeholder="Beep your Reply"
            onChange={handleReplyText}
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
                onChange={handleUploadClick}
              />
              <label htmlFor="add-image-button">
                <Fab component="span" sx={{ width: "36px", height: "36px" }}>
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
                <Fab component="span" sx={{ width: "36px", height: "36px" }}>
                  {/* <AddPhotoAlternateRounded /> */}
                  <img src={lock} />
                </Fab>
              </label>
            </div>
            <button type="submit" onClick={() => handleSubmitReply()}>
              <p>Reply</p>
              <img src={sendbeep} />
            </button>
          </div>
        </div>
        <Divider />

        {Array.isArray(replies) &&
          replies.map((data, i) => <BeepCard data={data} key={i} />)}
      </Collapse>
    </Card>
  );
}
