import avatar from "../../assets/mark-avatar.png";
import sendbeep from "../../assets/send.png";
import gallery from "../../assets/galleryicon.png";
import lock from "../../assets/lock-slash.png";
import "./style.css";

import { useState } from "react";
import { Fab, Modal } from "@mui/material";
import toast from "react-hot-toast";
import { POST } from "../../utils/request";
import { useStore } from "../../store";

export const BeepPrompt = ({
  setHomeFeedData,
  homeFeedData,
  open,
  setAddBeep,
}) => {
  const [beepText, setBeepText] = useState("");
  const feed = useStore((state) => state.feeds);
  const addToFeed = useStore((state) => state.addToFeed);

  const handleBeepText = (event) => {
    setBeepText(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmitBeep = () => {
    addToFeed({
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
    setAddBeep(false);
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
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="add-image-button"
              multiple
              type="file"
              // onChange={handleUploadClick}
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
          <button type="submit" onClick={() => handleSubmitBeep()}>
            <p>Beep</p>
            <img src={sendbeep} />
          </button>
        </div>
      </div>
    </Modal>
  );
};
