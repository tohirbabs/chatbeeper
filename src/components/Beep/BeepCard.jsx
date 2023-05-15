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
          <StyledBadge badgeContent={data.replies} color="primary">
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
        {feed.map((data, i) => (
          <BeepCard data={data} key={i} />
        ))}
      </Collapse>
    </Card>
  );
}
