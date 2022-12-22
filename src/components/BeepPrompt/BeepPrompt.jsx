import avatar from "../../assets/mark-avatar.png";
import sendbeep from "../../assets/send.png";
import gallery from "../../assets/galleryicon.png";
import lock from "../../assets/lock-slash.png";
import "./style.css";

import { useState } from "react";

export const BeepPrompt = ({ setHomeFeedData, homeFeedData }) => {
  const [beepText, setBeepText] = useState("");
  const feedData = homeFeedData;
  const handleBeepText = (event) => {
    setBeepText(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmitBeep = () => {
    feedData.unshift({
      userDp: avatar,
      userName: "Jason Bourne",
      userHandle: "@jb",
      beepAge: "1 hour ago",
      beepImg: false,
      beepText: beepText,
      replies: "10",
      rebeeps: "2",
      dislikes: "1",
      likes: "25",
    });
    setHomeFeedData(feedData);
  };
  return (
    <div
      className="beep_prompt"
      // style={{ backgroundColor: "backgound.default" }}
    >
      <header>
        <img src={avatar} width={"35px"} />
      </header>
      <textarea
        name=""
        id=""
        // cols="65"
        rows="10"
        placeholder="What's going on?"
        onChange={handleBeepText}
      ></textarea>
      <div className="prompt_actions">
        <div className="prompt_extras">
          <img src={gallery} />
          <img src={lock} />
        </div>
        <button type="submit" onClick={handleSubmitBeep}>
          <p>Beep</p>
          <img src={sendbeep} />
        </button>
      </div>
    </div>
  );
};
