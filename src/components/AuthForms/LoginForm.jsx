// Form related libraries
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";
import React from "react";

// MUI components
import PasswordInput from "./PasswordInput";

import { CircularProgress, Stack, TextField } from "@mui/material";

import { StyledButton } from "../StyledButton";
import { POST } from "../../utilities/request";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { useBeeperStore } from "../../utilities/store";
// import { auth, signInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, logInWithEmailAndPassword } from "../../utilities/firebase";

export default function LoginForm() {
  const userInfo = useBeeperStore((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const authenticate = useBeeperStore((state) => state.authenticateUser);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  console.log(loading);
  React.useEffect(() => {
    if (user) navigate("/username/home");
  }, [user, loading]);

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

    onSubmit: async (values) => {
      setIsLoading(true);

      try {
        await signInWithEmailAndPassword(auth, values.email, values.password);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        toast(err.message);
      }
    },
  });
  function navigateHome(params) {
    console.log("go to home");
    if (userInfo) {
      navigate("/home");
    }
  }
  console.log(isLoading);
  return (
    <form onSubmit={formik.handleSubmit} method="post">
      <Stack spacing={4} width="90vw" maxWidth="375px">
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
          {isLoading ? (
            <CircularProgress size={30} color="secondary" />
          ) : (
            "Login"
          )}
        </StyledButton>
      </Stack>
    </form>
  );
}
