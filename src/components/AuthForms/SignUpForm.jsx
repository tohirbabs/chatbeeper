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
  Modal,
  Typography,
} from "@mui/material";
import PasswordInput from "./PasswordInput";

import { StyledButton } from "../StyledButton";
import { POST } from "../../utilities/request";

import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useBeeperStore } from "../../utilities/store";
// import { auth, signInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatBeeperLogo from "../../components/Logo";
import { FiAtSign } from "react-icons/fi";

import GenderSelect from "./GenderSelect";

import { ManIcon, WomanIcon } from "../../assets/icons";
import DateInput from "./DateInput";

import { auth, registerWithEmailAndPassword } from "../../utilities/firebase";
import CreateAccountForm from "./CreateAccountForm";

export default function SignUpForm({
  setCurrentForm,
  currentForm,
  open,
  handleClose,
}) {
  const updateUserData = useBeeperStore((state) => state.updateUserData);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = (values) => {
    if (!values.username) alert("Please enter name");
    registerWithEmailAndPassword(values);
  };
  React.useEffect(() => {
    if (loading) return;
    if (user) navigate("/username/explore");
  }, [user, loading]);

  const [nextPage, setNextPage] = useState(false);

  const [fieldValue, setFieldValue] = useState("");

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      username: "",
      phone: "",
      email: "",
      dob: new Date().now,
      gender: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("Required"),
      lastname: Yup.string().required("Required"),
      username: Yup.string().required("Required"),
      email: Yup.string().email("Email address not valid").required("Required"),
      phone: Yup.string().phone("Phone number not valid").required("Required"),
      gender: Yup.string().required("Required"),
      dob: Yup.date("Date is invalid").required("Required"),
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
    onSubmit: (values) => {
      // setloading(true);

      // POST("user", JSON.stringify(values))
      //   .then((res) => res.json())
      //   .then(
      //     (res) =>
      //       res.message ? toast(res.message) : () => updateUserData(res),
      //     navigate("verifymail")
      //   )
      //   .catch((err) => console.log("error:", err))
      //   .finally(() => setloading(false));
      // registerUser.mutate();
      register(values);
    },
  });

  const page1Error =
    formik.errors.firstname ||
    formik.errors.lastname ||
    formik.errors.username ||
    formik.errors.email ||
    formik.errors.phone;

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

        <CreateAccountForm />
        {/* <SignUpForm /> */}

        <Typography variant="body" my={2}>
          Already have a beeper account?{" "}
          <Link to="/auth/login">
            <Typography variant="link">Log in</Typography>
          </Link>
        </Typography>
      </Stack>
    </Modal>
  );
}
