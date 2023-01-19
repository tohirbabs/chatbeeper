import { useState } from "react";

import Box from "@mui/material/Box";
import { MdDone } from "react-icons/md";

import { multistepContainer, circle, line } from "./style";

export default function MultiStep({ currentForm, setCurrentForm }) {
  const handleClick = (num) => {
    setCurrentForm(num);
  };
  const multistepContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  };
  const circle = {
    minWidth: "22px",
    minHeight: "22px",
    borderRadius: "50%",
    display: "grid",
    placeItems: "center",
    padding: "4px",
    // cursor: 'pointer'
  };
  const line = {
    width: "100%",
    maxWidth: "158px",
    height: "3px",
  };
  return (
    <Box sx={multistepContainer}>
      <Box
        // onClick={() => setCurrentForm(0)}
        sx={{
          ...circle,
          backgroundColor: currentForm >= 0 ? "primary.main" : "#D1E1EF",
        }}
      >
        {currentForm > 0 && <MdDone color="white" width={7} height={4.81} />}
      </Box>
      <Box
        sx={{
          ...line,
          backgroundColor: currentForm >= 1 ? "primary.main" : "#D8D8D8",
        }}
      ></Box>
      <Box
        // onClick={() => setCurrentForm(1)}
        sx={{
          ...circle,
          backgroundColor: currentForm >= 1 ? "primary.main" : "#D1E1EF",
        }}
      >
        {currentForm > 1 && <MdDone color="white" width={7} height={4.81} />}
      </Box>
      <Box
        sx={{
          ...line,
          backgroundColor: currentForm >= 2 ? "primary.main" : "#D8D8D8",
        }}
      ></Box>
      <Box
        // onClick={() => setCurrentForm(2)}
        sx={{
          ...circle,
          backgroundColor: currentForm >= 2 ? "primary.main" : "#D1E1EF",
          padding: "5px",
        }}
      >
        {currentForm > 2 && <MdDone color="white" width={7} height={4.81} />}
      </Box>
    </Box>
  );
}
