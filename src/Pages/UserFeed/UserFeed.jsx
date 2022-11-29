import { useNavigate } from "react-router-dom";

import { Feed } from "../../components/Feed/Feed";
import { Rightbar } from "../../components/Rightbar/Rightbar";
import "./style.css";
import { AddBeep } from "../../components/AddBeep/AddBeep";
import { Layout } from "../../components/Layout/Layout";
import { Home } from "../../components/Home/Home";
export default function UserFeed() {
  const location = useNavigate();
  return (
    <Layout page="home">
      <div className="home__main">
        <Home />
        <Rightbar />
      </div>
    </Layout>
  );
}
