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
import { Badge, Chip } from "@mui/material";
import { useStore } from "../../store";

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
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const userInfo = useStore((state) => state.userData);

  return (
    <Card sx={{ maxWidth: "95%", margin: "auto", mt: 1, borderRadius: "1rem" }}>
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
      <CardActions disableSpacing sx={{ gap: "2rem" }}>
        <IconButton size="small" aria-label="reply beep" mr="1rem">
          <StyledBadge badgeContent={data.replies} color="primary">
            <MessageIcon />
          </StyledBadge>
        </IconButton>
        <IconButton aria-label="rebeep">
          <StyledBadge badgeContent={data.rebeeps} color="primary">
            <RebeepIcon />
          </StyledBadge>
        </IconButton>
        <IconButton aria-label="like beep">
          <StyledBadge badgeContent={44} color="primary">
            <LikeIcon />
          </StyledBadge>
        </IconButton>
        <IconButton aria-label="dislike beep">
          <StyledBadge badgeContent={2} color="error">
            <DislikeIcon />
          </StyledBadge>
        </IconButton>
        <IconButton aria-label="share beep">
          <ExportIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
