import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Rightbar } from "../../components/Rightbar/Rightbar";
import "./style.css";
import { Layout } from "../../components/Layout/Layout";
import { Home } from "../../components/Home/Home";

export default function UserFeed() {
  return (
    <div className="home__main">
      <Home />
      <Rightbar />
    </div>
  );
}
