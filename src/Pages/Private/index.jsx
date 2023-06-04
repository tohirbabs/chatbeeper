import React from "react";
import { Outlet } from "react-router-dom";
import PageLayout from "../../components/Layout";

export const AppLayout = () => {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
};
