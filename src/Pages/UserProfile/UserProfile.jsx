import "./style.css";

import { useNavigate } from "react-router-dom";

import { Profile } from "../../components/Profile/Profile";
import { Rightbar } from "../../components/Rightbar/Rightbar";
import "./style.css";
import { Layout } from "../../components/Layout/Layout";
export default function UserProfile() {
  const location = useNavigate();
  return (
    <div className="user-profile__main">
      <Profile />
      <Rightbar />
    </div>
  );
}
