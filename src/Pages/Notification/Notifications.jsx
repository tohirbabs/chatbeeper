import "./style.css";

import { useNavigate } from "react-router-dom";

import { Profile } from "../../components/Profile/Profile";
import { Rightbar } from "../../components/Rightbar/Rightbar";
import "./style.css";
import { Layout } from "../../components/Layout/Layout";
import { Notifications } from "../../components/Notifications/Notifications";
export default function Notification() {
  const location = useNavigate();
  return (
    <div className="notification__main">
      <Notifications />
      <Rightbar />
    </div>
  );
}
