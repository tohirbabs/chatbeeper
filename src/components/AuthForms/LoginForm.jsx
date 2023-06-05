// Form related libraries
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";
import React from "react";

// MUI components
import PasswordInput from "./PasswordInput";

import {
  CircularProgress,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { StyledButton } from "../StyledButton";
import { POST } from "../../utilities/request";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { useBeeperStore } from "../../utilities/store";
// import { auth, signInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, logInWithEmailAndPassword } from "../../utilities/firebase";
import ChatBeeperLogo from "../../components/Logo";

export default function LoginForm({ open, handleClose }) {
  const userInfo = useBeeperStore((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const authenticate = useBeeperStore((state) => state.authenticateUser);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  console.log(user);
  React.useEffect(() => {
    if (user) navigate(`/${user.displayName}/explore`);
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
    <Modal open={open} onClose={handleClose}>
      <Stack
        width="95vw"
        maxWidth="500px"
        spacing={3}
        py={3}
        alignItems="center"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "#0A151E",
          borderRadius: "1.5rem",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <ChatBeeperLogo />

        <form
          onSubmit={formik.handleSubmit}
          method="post"
          style={{ width: "90%" }}
        >
          <Stack spacing={3} width="100%">
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

        <Typography variant="body1">
          Don't have a beeper account?{" "}
          <Link to="/auth/signup">
            <Typography variant="link">Sign up</Typography>
          </Link>
        </Typography>
      </Stack>
    </Modal>
  );
}
