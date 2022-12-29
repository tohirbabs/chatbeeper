import { useState } from "react";

import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { roundedInput } from "./style";

export default function PasswordInput({
  onChange,
  value,
  label,
  id,
  helperText,
  onBlur,
  error,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        id={id}
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        error={error}
        onBlur={onBlur}
        margin="none"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
        sx={roundedInput}
      />
      {helperText && (
        <FormHelperText error id={id}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
}
