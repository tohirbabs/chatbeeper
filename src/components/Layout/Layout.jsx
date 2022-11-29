import { Children } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { Header } from "../Header/Header";
import "./style.css";
import { FooterMenu } from "../FooterMenu/FooterMenu";

export const Layout = ({ children, page }) => {
  return (
    <div className="layout">
      <Header nav={page} />
      <main>
        <Sidebar />
        {children}
      </main>
      <FooterMenu nav={page} />
    </div>
  );
};
