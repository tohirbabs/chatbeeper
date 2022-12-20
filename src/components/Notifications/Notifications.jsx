import "./style.css";
import rebeep from "../../assets/rebeep-icon.png";
import dislike from "../../assets/dislike-icon.png";
import like from "../../assets/like-icon.png";
import avatar from "../../assets/mark-avatar.png";
import { FaChevronLeft } from "react-icons/fa";

import { HiDotsHorizontal, HiDotsVertical } from "react-icons/hi";

import { motion } from "framer-motion";
import { pageAnimation } from "../../animations";

import checkmark from "../../assets/checkmark.png";
import reply from "../../assets/reply-icon.png";

import share from "../../assets/share-icon.png";
import { useState } from "react";

export const Notifications = () => {
  function likeBeep() {
    setliked(!liked);
    liked ? setlikes(likes - 1) : setlikes(likes + 1);
  }

  function dislikeBeep() {
    setdisliked(!disliked);
    disliked ? setdislikes(dislikes - 1) : setdislikes(dislikes + 1);
  }
  const data = {
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
  };

  const [liked, setliked] = useState(false);
  const [likes, setlikes] = useState(parseInt(data.likes));
  const [disliked, setdisliked] = useState(false);
  const [dislikes, setdislikes] = useState(parseInt(data.dislikes));

  return (
    <section className="notifications__section">
      <header>
        <FaChevronLeft
          style={{
            cursor: "pointer",
            position: "absolute",
            left: "2rem",
            // fontSize: "2rem",
          }}
        />

        <h2>Notifications</h2>
      </header>
      <section className="notifications__list">
        <div className="notification">
          <div className="notification__info">
            <img src={avatar} alt="" className="notification__avatar" />
            <div className="notification__text">
              <p>
                <span>Amber Lexy</span>
                <span>and 4 others liked your beep</span>
              </p>
              <div className="duration">
                <img src={like} alt="" width={20} />
                <p>1 minute ago</p>
              </div>
            </div>
          </div>
          {/* <HiDotsHorizontal style={{ cursor: "pointer" }} /> */}
        </div>
        <div className="notification">
          <div className="notification__info">
            <img src={avatar} alt="" className="notification__avatar" />
            <div className="notification__text">
              <p>
                <span>Jesse Phillip</span>
                <span>and 10+ others rebeebed your beep</span>
              </p>
              <div className="duration">
                <img src={rebeep} alt="" width={20} />

                <p>6 minutes ago</p>
              </div>
            </div>
          </div>
          {/* <HiDotsHorizontal style={{ cursor: "pointer" }} /> */}
        </div>
        <div className="notification">
          <div className="notification__header">
            <div className="notification__info">
              <img src={avatar} alt="" className="notification__avatar" />
              <div className="notification__text">
                <p>
                  <span>Chi Chi</span>
                  <span>showed interest in you</span>
                </p>
                <div className="duration">
                  <img src={like} alt="" width={20} />
                  <p>1 minute ago</p>
                </div>
              </div>
            </div>
            <button className="notification__reaction">Follow Back</button>
          </div>
          <div className="notification__extra">
            <div className="interested">
              <p>Are you interested in her?</p>
              <button>No</button>
              <button>Yes</button>
            </div>
          </div>
        </div>
        <div className="notification">
          <div className="notification__info">
            <img src={avatar} alt="" className="notification__avatar" />
            <div className="notification__text">
              <p>
                <span>Amber Lexy</span>
                <span>and 6 others disliked your beep</span>
              </p>
              <div className="duration">
                <img src={dislike} alt="" width={20} />

                <p>1 hour ago</p>
              </div>
            </div>
          </div>
          {/* <HiDotsHorizontal style={{ cursor: "pointer" }} /> */}
        </div>
        <div className="notification">
          <div className="notification__header">
            <div className="notification__info">
              <img src={avatar} alt="" className="notification__avatar" />
              <div className="notification__text">
                <p>
                  <span>Chi Chi</span>
                  <span>echoed your beep</span>
                </p>
                <div className="duration">
                  {/* <img src={like} alt="" width={20} /> */}
                  <p>30 minutes ago</p>
                </div>
              </div>
            </div>
            <button className="notification__reaction">Follow Back</button>
          </div>
          <div className="notification__extra">
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
                        <img
                          src={checkmark}
                          className="check"
                          alt="chatbeeper logo"
                        />
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
          </div>
        </div>
      </section>
    </section>
  );
};
