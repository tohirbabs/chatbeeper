import "./style.css";
import { SmsIcon } from "../../assets/icons/nav/SmsIcon";
import { FollowersIcon } from "../../assets/icons/nav/FollowersIcon";
import { TrendIcon } from "../../assets/icons/nav/TrendIcon";
import { LogoutIcon } from "../../assets/icons/nav/LogoutIcon";
import { SponsoredIcon } from "../../assets/icons/nav/SponsoredIcon";
import { VerificationIcon } from "../../assets/icons/nav/VerificationIcon";
import { BriefcaseIcon } from "../../assets/icons/nav/BriefcaseIcon";
import { BookmarkIcon } from "../../assets/icons/nav/BookmarkIcon";

import chatbeeper from "../../assets/chatbeeper.png";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="side-nav">
        <SmsIcon />
        <p>Messages</p>
      </div>
      <div className="side-nav">
        <FollowersIcon />
        <p>Follower Requests</p>
      </div>
      <div className="side-nav">
        <TrendIcon />
        <p>Trending</p>
      </div>
      <div className="side-nav">
        <BookmarkIcon />
        <p>Saved Beeps</p>
      </div>
      <div className="side-nav">
        <BriefcaseIcon />
        <p>Business Account</p>
      </div>
      <div className="side-nav">
        <VerificationIcon />
        <p>Request Verification</p>
      </div>
      <div className="side-nav">
        <SponsoredIcon />
        <p>Sponsored Beeps</p>
      </div>
      <div className="side-nav">
        <LogoutIcon />
        <p>Logout</p>
      </div>
      <img alt="chatbeeper logo" src={chatbeeper} width="170px" />
    </div>
  );
};
