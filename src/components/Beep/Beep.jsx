import "./style.css";
import Container from "@mui/material/Container";
import { HiDotsHorizontal, HiDotsVertical } from "react-icons/hi";

import { motion } from "framer-motion";
import { pageAnimation } from "../../animations";

import { container } from "./style";

import beepImg from "../../assets/display-img.png";
import avatar from "../../assets/mark-avatar.png";
import checkmark from "../../assets/checkmark.png";
import reply from "../../assets/reply-icon.png";
import rebeep from "../../assets/rebeep-icon.png";
import dislike from "../../assets/dislike-icon.png";
import like from "../../assets/like-icon.png";
import share from "../../assets/share-icon.png";

export default function Beep({ data }) {
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
        <HiDotsHorizontal />
      </header>

      <img src={data.beepImg} className="beep__img" alt="" />
      <p>
        {data.beepText}
        <span>see more</span>
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
          <button>
            <img src={dislike} alt="" width={20} />
            <p>{data.dislikes}</p>
          </button>
          <button>
            <img src={like} alt="" width={20} />
            <p>{data.likes}</p>
          </button>
        </div>
        <img src={share} alt="" width={20} />
      </div>
    </motion.div>
  );
}
