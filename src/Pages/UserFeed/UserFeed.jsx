import "./style.css";

import { useNavigate } from "react-router-dom";

import { Feed } from "../../components/Feed/Feed";
import { FooterMenu } from "../../components/FooterMenu/FooterMenu";
import { Topbar } from "../../components/Topbar/Topbar";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Profile } from "../../components/Profile/Profile";
import { Rightbar } from "../../components/Rightbar/Rightbar";
import "./style.css";
import { AddBeep } from "../../components/AddBeep/AddBeep";
export default function UserFeed() {
  const location = useNavigate();
  return (
    <>
      <Topbar />
      <div className="feed-body">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
      <FooterMenu />
    </>
  );
}
