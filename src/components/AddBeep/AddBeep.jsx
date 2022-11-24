import "./style.css";
import avatar from "../../assets/mark-avatar.png";
import imageIcon from "../../assets/image-icon.png";
import clipIcon from "../../assets/clip-icon.png";

export const AddBeep = () => {
  return (
    <div className="addbeep">
      <div className="beeper-info">
        <img src={avatar} alt="" />
        <div className="beeper_input">
          <input type="text" name="" id="" placeholder="What's going on?" />
        </div>
        <img src={imageIcon} alt="" />
        <img src={clipIcon} alt="" />
      </div>
    </div>
  );
};
