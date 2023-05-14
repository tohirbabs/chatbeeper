import avatar from "../../assets/mark-avatar.png";
import sendbeep from "../../assets/send.png";
import gallery from "../../assets/galleryicon.png";
import lock from "../../assets/lock-slash.png";
import "./style.css";

import { useState } from "react";
import { Avatar, Box, Fab, Modal } from "@mui/material";
import toast from "react-hot-toast";
import { useBeeperStore } from "../../utilities/store";
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

export const BeepPrompt = ({
  setHomeFeedData,
  homeFeedData,
  open,
  setAddBeep,
}) => {
  const userInfo = useBeeperStore((state) => state.userData);

  const [beepText, setBeepText] = useState("");
  const [imgUpload, setImgUpload] = useState(null);
  const feed = useBeeperStore((state) => state.feeds);
  const addToFeed = useBeeperStore((state) => state.addToFeed);

  const handleBeepText = (event) => {
    setBeepText(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmitBeep = () => {
    addToFeed({
      userDp: `https://api.dicebear.com/5.x/adventurer/svg?seed=${userInfo?.username}`,
      userName: userInfo?.username,
      userHandle: `@${userInfo?.username}`,
      beepAge: "1 hour ago",
      beepImg: imgUpload || false,
      beepText: beepText,
      replies: 2,
      rebeeps: 10,
      dislikes: 0,
      likes: 5,
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

  return (
    <Modal open={open} onClose={() => setAddBeep(false)}>
      <div
        className="beep_prompt"
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
          name=""
          id=""
          class="autoExpand"
          rows="3"
          data-min-rows="3"
          autoFocus
          autosize
          placeholder="What's going on?"
          onChange={handleBeepText}
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
          <button type="submit" onClick={() => handleSubmitBeep()}>
            <p>Beep</p>
            <img src={sendbeep} />
          </button>
        </div>
      </div>
    </Modal>
  );
};
