import avatar from "../../assets/mark-avatar.png";
import sendbeep from "../../assets/send.png";
import gallery from "../../assets/galleryicon.png";
import lock from "../../assets/lock-slash.png";
import "./style.css";

import { useState } from "react";
import { Modal } from "@mui/material";
import toast from "react-hot-toast";
import { POST } from "../../utils/request";

export const BeepPrompt = ({
  setHomeFeedData,
  homeFeedData,
  open,
  setAddBeep,
}) => {
  const [beepText, setBeepText] = useState("");
  const feedData = homeFeedData;
  const handleBeepText = (event) => {
    setBeepText(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmitBeep = () => {
    let body = new FormData();
    body.append("text", beepText);
    body.append("file", null);

    POST("beep", body)
      .then((res) => res.json())
      // .then((res) => setToken(res))
      .then(
        (res) =>
          (res.text && console.log(res)) ||
          (res.message && console.log(res.message))
      )
      // .then((res) => console.log(res))

      .catch((err) => console.log("error:", err));
    // .finally(() => setloading(false));}
  };

  return (
    <Modal open={open} onClose={() => setAddBeep(false)}>
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
          <button type="submit" onClick={() => setAddBeep(false)}>
            <p>Beep</p>
            <img src={sendbeep} />
          </button>
        </div>
      </div>
    </Modal>
  );
};
