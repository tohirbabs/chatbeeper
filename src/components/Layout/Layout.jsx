import { useState } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { Header } from "../Header/Header";
import "./style.css";
import { FooterMenu } from "../FooterMenu/FooterMenu";
import { Overlay } from "../Overlay/Overlay";
import { BeepPrompt } from "../BeepPrompt/BeepPrompt";
import { useLocation } from "react-router-dom";

export const Layout = ({ children, setHomeFeedData, homeFeedData }) => {
  const [sidebar, setSidebar] = useState("");
  const [overlay, setOverlay] = useState("");

  const location = useLocation();
  console.log(location);

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
        setOverlay={setOverlay}
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
        setOverlay={setOverlay}
        overlay={overlay}
      />
    </div>
  );
};
