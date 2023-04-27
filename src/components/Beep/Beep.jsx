import "./style.css";
import Container from "@mui/material/Container";
import { HiDotsHorizontal, HiDotsVertical } from "react-icons/hi";

import { motion } from "framer-motion";

import checkmark from "../../assets/checkmark.png";
import reply from "../../assets/reply-icon.png";
import rebeep from "../../assets/rebeep-icon.png";
import dislike from "../../assets/dislike-icon.png";
import like from "../../assets/like-icon.png";
import share from "../../assets/share-icon.png";
import { useState } from "react";
import { pageAnimation } from "../../utilities/animations";

export default function Beep({ data }) {
  const [liked, setliked] = useState(false);
  const [likes, setlikes] = useState(parseInt(data.likes));
  const [disliked, setdisliked] = useState(false);
  const [dislikes, setdislikes] = useState(parseInt(data.dislikes));

  function likeBeep() {
    setliked(!liked);
    liked ? setlikes(likes - 1) : setlikes(likes + 1);
  }

  function dislikeBeep() {
    setdisliked(!disliked);
    disliked ? setdislikes(dislikes - 1) : setdislikes(dislikes + 1);
  }
  return (
    <motion.div
      variants={pageAnimation}
      animate="animate"
      initial="initial"
      transition={pageAnimation.transition}
      className="beep"
    >
      <header className="beep__header">
        <div className="beeper__info">
          <img src={data.userDp} alt="" className="beeper__avatar" />
          <div className="beeper__name">
            <p>
              <span>{data.userName}</span>
              <span>
                <span>{data.userHandle}</span>
                <img src={checkmark} className="check" alt="chatbeeper logo" />
              </span>
            </p>
            <p>{data.beepAge}</p>
          </div>
        </div>
        <HiDotsHorizontal style={{ cursor: "pointer" }} />
      </header>
      {data.beepImg ? (
        <img src={data.beepImg} className="beep__img" alt="" />
      ) : null}
      <p>
        {data.beepText}
        {/* <span>see more</span> */}
      </p>
      <div className="beep__engage">
        <div className="engage_btns">
          <button>
            <img src={reply} alt="" width={20} />
            <p>{data.replies}</p>
          </button>
          <button>
            <img src={rebeep} alt="" width={20} />
            <p>{data.rebeeps}</p>
          </button>
          <button onClick={() => dislikeBeep()}>
            <img src={dislike} alt="" width={20} />
            <p>{dislikes}</p>
          </button>
          <button onClick={() => likeBeep()}>
            <img src={like} alt="" width={20} />
            <p>{likes}</p>
          </button>
        </div>
        <img src={share} alt="" width={20} />
      </div>
    </motion.div>
  );
}
