import { useState } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { Header } from "../Header/Header";
import "./style.css";
import { FooterMenu } from "../FooterMenu/FooterMenu";
import { Overlay } from "../Overlay/Overlay";
import { BeepPrompt } from "../BeepPrompt/BeepPrompt";
import { useLocation } from "react-router-dom";
import { useStore } from "../../store";

import { AddBeep } from "../AddBeep/AddBeep";

export const Layout = ({ children, setHomeFeedData, homeFeedData }) => {
  const [sidebar, setSidebar] = useState("");
  const [overlay, setOverlay] = useState("");
  const [addBeep, setAddBeep] = useState(false);
  console.log(addBeep);
  const userInfo = useStore((state) => state.userReg.auth);

  const location = useLocation();
  if (!userInfo) {
    location("/ceate-account");
  }

  return (
    <div className="layout">
      {overlay ? (
        <Overlay>
          {overlay === "beepPrompt" ? (
            <BeepPrompt
              setHomeFeedData={setHomeFeedData}
              homeFeedData={homeFeedData}
            />
          ) : null}
        </Overlay>
      ) : null}

      <Header
        nav={location.pathname}
        sidebar={sidebar}
        setSidebar={setSidebar}
        setAddBeep={setAddBeep}
        overlay={overlay}
      />
      <main
        className={
          sidebar === "open"
            ? "activateSidebar"
            : sidebar === "close"
            ? "deactivateSidebar"
            : ""
        }
      >
        <Sidebar />
        <section>{children}</section>
      </main>
      <FooterMenu
        nav={location.pathname}
        setAddBeep={setAddBeep}
        overlay={overlay}
      />
      <BeepPrompt open={addBeep} setAddBeep={setAddBeep} />
    </div>
  );
};
