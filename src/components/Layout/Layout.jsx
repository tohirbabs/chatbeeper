import { Children, useState } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { Header } from "../Header/Header";
import "./style.css";
import { FooterMenu } from "../FooterMenu/FooterMenu";

export const Layout = ({ children, page }) => {
  const [sidebar, setSidebar] = useState("");
  // const [sidebarClose, setsidebarClose] = useState(false);
  return (
    <div className="layout">
      <Header nav={page} sidebar={sidebar} setSidebar={setSidebar} />
      <main
        className={
          sidebar == "open"
            ? "activateSidebar"
            : sidebar == "close"
            ? "deactivateSidebar"
            : ""
        }
      >
        <Sidebar />
        <section>{children}</section>
      </main>
      <FooterMenu nav={page} />
    </div>
  );
};
