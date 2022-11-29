import "./style.css";
import docicon from "../../assets/docicon.png";
import moonrider from "../../assets/moonrider.png";
import wakanda from "../../assets/wakanda-img.png";
import playboy from "../../assets/playboy-img.png";
import minaj from "../../assets/minaj-img.png";
import depp from "../../assets/depp-img.png";
import church from "../../assets/church-img.png";

export const Rightbar = () => {
  return (
    <div className="right-bar">
      <div className="trending">
        <p>Now Trending</p>
        <div className="trend-class">
          <p>Worldwide</p>
          <p>Entertainment</p>
          <p>Sports</p>
        </div>
        <img src={moonrider} alt="" />
        <p>
          <span>1.</span> <img src={wakanda} alt="" />
          <span>Wakanda Forever</span>
        </p>
        <p>
          <span>2.</span> <img src={depp} alt="" />
          <span>Johnny Depp</span>
        </p>
        <p>
          <span>3</span> <img src={minaj} alt="" />
          <span>Nicki Minaj</span>
        </p>
        <p>
          <span>4</span> <img src={church} alt="" />
          <span>Church Girl</span>
        </p>
        <p>
          <span>5</span> <img src={playboy} alt="" />
          <span>Playboy</span>
        </p>
      </div>
      <div className="recent">
        <p>Recent Activities</p>
        <div className="activity">
          <img src={docicon} alt="" />
          <div className="activity-text">
            <h3>How to let go of your past</h3>
            <p>beeped by you</p>
            <p>1 week ago</p>
          </div>
        </div>
        <div className="activity">
          <img src={docicon} alt="" />
          <div className="activity-text">
            <h3>How to let go of your past</h3>
            <p>beeped by you</p>
            <p>1 week ago</p>
          </div>
        </div>
        <div className="activity">
          <img src={docicon} alt="" />
          <div className="activity-text">
            <h3>How to let go of your past</h3>
            <p>beeped by you</p>
            <p>1 week ago</p>
          </div>
        </div>
        <div className="activity">
          <img src={docicon} alt="" />
          <div className="activity-text">
            <h3>How to let go of your past</h3>
            <p>beeped by you</p>
            <p>1 week ago</p>
          </div>
        </div>
        <div className="activity">
          <img src={docicon} alt="" />
          <div className="activity-text">
            <h3>How to let go of your past</h3>
            <p>beeped by you</p>
            <p>1 week ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};
