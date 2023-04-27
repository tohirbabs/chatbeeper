// Form related libraries
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";

// MUI components
import PasswordInput from "./PasswordInput";

import { CircularProgress, Stack, TextField } from "@mui/material";

import { StyledButton } from "../StyledButton";
import { POST } from "../../utilities/request";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { useBeeperStore } from "../../utilities/store";

export default function LoginForm() {
  const initialValues = useBeeperStore((state) => state.userData);
  const userInfo = useBeeperStore((state) => state.auth);

  const authenticate = useBeeperStore((state) => state.authenticateUser);

  const navigate = useNavigate();

  const [loading, setloading] = useState(false);
  console.log(initialValues);
  console.log(userInfo);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
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
        // .then((res) => setToken(res))
        .then(
          (res) =>
            (res.data && authenticate(res.data)) ||
            (res.message && toast(res.message))
        )
        // .then((res) => console.log(res))

        .catch((err) => console.log("error:", err))
        .finally(() => {
          setloading(false);
          console.log("nav to home");
          // navigateHome();
        });
    },
  });
  function navigateHome(params) {
    console.log("go to home");
    if (userInfo) {
      navigate("/home");
    }
  }

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
          {loading ? <CircularProgress size={30} color="secondary" /> : "Login"}
        </StyledButton>
      </Stack>
    </form>
  );
}
