import "./style.css";

import { useNavigate } from "react-router-dom";

import { Profile } from "../../components/Profile/Profile";
import { Rightbar } from "../../components/Rightbar/Rightbar";
import "./style.css";
import { Layout } from "../../components/Layout/Layout";
import { FollowerRequests } from "../../components/FollowerRequests/FollowerRequests";
export default function FollowerRequest() {
  const location = useNavigate();
  return (
    <Layout page="follower_requests">
      <div className="follower_requests__main">
        <FollowerRequests />
        <Rightbar />
      </div>
    </Layout>
  );
}
