import "./style.css";
import rebeep from "../../assets/rebeep-icon.png";
import dislike from "../../assets/dislike-icon.png";
import like from "../../assets/like-icon.png";
import avatar from "../../assets/mark-avatar.png";
import { FaChevronLeft } from "react-icons/fa";

import { useState } from "react";

export const FollowerRequests = () => {
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
    <section className="follower_requests__section">
      <header>
        <FaChevronLeft
          style={{
            cursor: "pointer",
            position: "absolute",
            left: "2rem",
            // fontSize: "2rem",
          }}
        />

        <h2>follower_requests</h2>
      </header>
      <section className="follower_requests__list">
        <div className="follower_request">
          <div className="follower_request__info">
            <img src={avatar} alt="" className="follower_request__avatar" />
            <div className="follower_request__text">
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
      </section>
    </section>
  );
};
