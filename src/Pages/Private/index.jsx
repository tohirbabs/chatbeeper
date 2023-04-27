import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { Box } from "@mui/material";

export const AppLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
