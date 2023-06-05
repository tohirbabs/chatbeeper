import { useState } from "react";
import React from "react";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";

import { MuiTelInput } from "mui-tel-input";

import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormHelperText,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  Box,
  CircularProgress,
  InputLabel,
} from "@mui/material";
import { StyledButton } from "../StyledButton";
import { FiAtSign } from "react-icons/fi";
import PasswordInput from "./PasswordInput";
import GenderSelect from "./GenderSelect";

import { ManIcon, WomanIcon } from "../../assets/icons";
import DateInput from "./DateInput";
import { POST } from "../../utilities/request";

import toast from "react-hot-toast";
import { useBeeperStore } from "../../utilities/store";
import { Link, useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, registerWithEmailAndPassword } from "../../utilities/firebase";

export default function CreateAccountForm({ setCurrentForm, currentForm }) {
  const updateUserData = useBeeperStore((state) => state.updateUserData);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = (values) => {
    if (!values.username) alert("Please enter name");
    console.log("registering");
    registerWithEmailAndPassword(values);
  };
  React.useEffect(() => {
    if (loading) return;
    if (user) navigate(`/${user.displayName}/explore`);
  }, [user, loading]);

  const [nextPage, setNextPage] = useState(false);

  const [fieldValue, setFieldValue] = useState("");

  const formik = useFormik({
    initialValues: {
      username: "",

      email: "",

      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      email: Yup.string().email("Email address not valid").required("Required"),

      password: Yup.string()
        .required("Required")
        .matches(
          /[a-zA-Z0-9]/,
          "Your password must be strong. We advise a combination of letters and numbers"
        ),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);

      try {
        register(values);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        toast(err.message);
      }
    },
  });

  const page1Error =
    formik.errors.firstname ||
    formik.errors.lastname ||
    formik.errors.username ||
    formik.errors.email ||
    formik.errors.phone;

  return (
    <form onSubmit={formik.handleSubmit} method="post" style={{ width: "96%" }}>
      <Stack spacing={3} width="100%" maxWidth="500px">
        <FormControl fullWidth variant="contained">
          <OutlinedInput
            id="username"
            error={formik.touched.lastname && formik.errors.username && true}
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            startAdornment={
              <InputAdornment position="start">
                <FiAtSign />
              </InputAdornment>
            }
            placeholder="Username"
          />
          {formik.touched.username && formik.errors.username && (
            <FormHelperText error id="username">
              {formik.touched.username && formik.errors.username}
            </FormHelperText>
          )}
        </FormControl>
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
        <PasswordInput
          label="Confirm Password"
          id="confirmPassword"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.confirmPassword &&
            formik.errors.confirmPassword &&
            true
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />
        <StyledButton
          variant="contained"
          type="submit"
          // disabled={
          //   Object.values(formik.errors).length !== 0 &&
          //   Object.values(formik.values).length !== 0
          //     ? true
          //     : false
          // }
        >
          {isLoading ? (
            <CircularProgress size={30} color="secondary" />
          ) : (
            "Create account"
          )}
        </StyledButton>
      </Stack>
    </form>
  );
}
