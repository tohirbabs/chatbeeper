import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { Box } from "@mui/material";
import PageLayout from "../../components/Layout/indexes";

export const AppLayout = () => {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
};
