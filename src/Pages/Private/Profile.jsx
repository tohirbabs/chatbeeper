import { useNavigate } from "react-router-dom";
import { HomeFeed } from "./HomeFeed";
import { FiEdit } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiLinksFill } from "react-icons/ri";

import banner from "../../assets/banner.png";
import checkmark from "../../assets/checkmark.png";

import "./style.css";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
// import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { auth, db } from "../../utilities/firebase";
import { getAuth } from "firebase/auth";

export default function Profile() {
  const location = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  console.log(user.uid);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));

      const doc = await getDocs(q);
      // const data = doc.docs[0].data();
      console.log(doc.data());
      // setName(data.firstname + " " + data.lastname);
      // setUsername(data.username);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

  getAuth()
    .getUser(user?.uid)
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
    })
    .catch((error) => {
      console.log("Error fetching user data:", error);
    });

  return (
    <div className="profile">
      <div className="profile__wrapper">
        <div className="profile__display-imgs">
          <img src={banner} className="profile__banner" alt="chatbeeper logo" />
          <img
            src={`https://api.dicebear.com/5.x/adventurer/svg?seed=name`}
            alt="user dp"
            className="profile__dp"
          />
        </div>

        <div className="profile__info">
          <h1>{name}</h1>
          <h2>
            <p>@{username}</p>

            <img src={checkmark} className="checkmark" alt="checkmark" />
          </h2>
          <p>
            Hi there, I'm a product design who loves solving real life problems
            with my superpower 😁
          </p>
          <div className="user_info">
            <div className="info">
              <p>0</p>
              <p>Following</p>
            </div>
            <div className="divider"></div>
            <div className="info">
              <p>0</p>
              <p>Followers</p>
            </div>
            <div className="divider"></div>
            <div className="info">
              <p>
                <HiOutlineLocationMarker />
              </p>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
          <p className="link">
            <RiLinksFill />
            <a href="/">https://behance.net/janedoe</a>
          </p>
          <div className="user_action">
            <div className="action">
              <p>Edit profile</p>
              <FiEdit />
            </div>
            {/* <img src={sms} className="msg" alt="chatbeeper logo" /> */}
          </div>
          <div className="sections">
            <div className="section active_section">Beeps</div>
            <div className="section">Pictures</div>
            <div className="section">Videos</div>
          </div>
        </div>
        <div className="profile__feed"></div>
      </div>
      <HomeFeed />
    </div>
  );
}
