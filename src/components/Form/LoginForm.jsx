// Form related libraries
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";

// MUI components
import PasswordInput from "./PasswordInput";

import { CircularProgress, Stack, TextField } from "@mui/material";
import { roundedInput, button } from "./style";
import { StyledButton } from "../StyledButton";
import { POST } from "../../utils/request";
import { useStore } from "../../store";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginForm() {
  const initialValues = useStore((state) => state.userReg.data);
  const navigate = useNavigate();

  const [loading, setloading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: initialValues.email,
      password: initialValues.password,
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required("Required")
        .matches(
          /[a-zA-Z0-9]/,
          "Your password must be strong. We advise a combination of letters and numbers"
        ),
      email: Yup.string().email("Email address not valid").required("Required"),
    }),

    onSubmit: (values) => {
      setloading(true);
      POST("auth/login", JSON.stringify(values))
        .then((res) => res.json())
        .then((res) => {
          navigate("/home");
        })
        .catch((err) => console.log("error:", err))
        .finally(() => setloading(false));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} method="post">
      <Stack spacing={3} width="90vw" maxWidth="375px">
        <TextField
          onBlur={formik.handleBlur}
          label="Email"
          name="email"
          id="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && formik.errors.email && true}
          helperText={formik.touched.email && formik.errors.email}
          sx={roundedInput}
        />

        <PasswordInput
          label="Password"
          id="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={formik.touched.password && formik.errors.password}
          error={formik.touched.password && formik.errors.password && true}
        />
        <StyledButton
          variant="contained"
          type="submit"
          disabled={
            Object.values(formik.errors).length !== 0 &&
            Object.values(formik.values).length !== 0
              ? true
              : false
          }
        >
          {loading ? <CircularProgress color="secondary" /> : "Login"}
        </StyledButton>
      </Stack>
    </form>
  );
}
