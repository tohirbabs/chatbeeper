import React from "react";
import TextField from "@mui/material/TextField";
import { container } from "./style";
export default function Input({
  name,
  type,
  label,
  id,
  onChange,
  value,
  helperText,
  error,
  onBlur,
}) {
  return (
    <TextField
      error={error}
      name={name}
      onBlur={onBlur}
      type={type}
      helperText={helperText}
      label={label}
      id={id}
      value={value}
      onChange={onChange}
      fullwidth
      sx={container}
    ></TextField>
  );
}
