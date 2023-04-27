import { useState } from "react";

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

export default function SignUpForm({ setCurrentForm, currentForm }) {
  const updateUserData = useBeeperStore((state) => state.updateUserData);

  const [loading, setloading] = useState(false);
  const [nextPage, setNextPage] = useState(false);

  const navigate = useNavigate();
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
      setloading(true);

      POST("user", JSON.stringify(values))
        .then((res) => res.json())
        .then(
          (res) =>
            res.message ? toast(res.message) : () => updateUserData(res),
          navigate("verifymail")
        )
        .catch((err) => console.log("error:", err))
        .finally(() => setloading(false));
      // registerUser.mutate();
    },
  });

  const page1Error =
    formik.errors.firstname ||
    formik.errors.lastname ||
    formik.errors.username ||
    formik.errors.email ||
    formik.errors.phone;

  return (
    <form onSubmit={formik.handleSubmit} method="post">
      <FormikProvider value={formik}>
        {!nextPage ? (
          <Stack spacing={2} width="90vw" maxWidth="375px">
            <TextField
              onBlur={formik.handleBlur}
              label={"First Name"}
              name="firstname"
              id="firstname"
              type="text"
              value={formik.values.firstname}
              error={
                formik.touched.firstname && formik.errors.firstname && true
              }
              helperText={formik.touched.firstname && formik.errors.firstname}
              onChange={formik.handleChange}
            />
            <TextField
              onBlur={formik.handleBlur}
              label="Last Name"
              name="lastname"
              id="lastname"
              type="text"
              error={formik.touched.lastname && formik.errors.lastname && true}
              helperText={formik.touched.lastname && formik.errors.lastname}
              value={formik.values.lastname}
              onChange={formik.handleChange}
            />
            <FormControl fullWidth variant="contained">
              <OutlinedInput
                id="username"
                error={
                  formik.touched.lastname && formik.errors.username && true
                }
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

            <MuiTelInput
              value={formik.values.phone}
              id="phone"
              label="Phone"
              defaultCountry="NG"
              onChange={(value, i) => {
                formik.setFieldValue("phone", value);
              }}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && formik.errors.phone && true}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            <StyledButton
              variant="contained"
              onClick={() => setNextPage(true)}
              disabled={page1Error ? true : false}
            >
              Continue
            </StyledButton>
          </Stack>
        ) : (
          <Stack spacing={2} width="90vw" maxWidth="375px">
            <DateInput
              error={formik.touched.dob && formik.errors.dob && true}
              helperText={formik.touched.dob && formik.errors.dob}
              name="dob"
              label="Date of Birth"
              value={formik.values.dob}
              onChange={(value) => formik.setFieldValue("dob", value, true)}
            />

            <Box>
              <Stack direction="row" gap={1} width="100%">
                <GenderSelect
                  icon={ManIcon}
                  value="male"
                  id="male"
                  label="Male"
                  formikValue={formik.values.gender}
                  setFieldValue={setFieldValue}
                  fieldValue={fieldValue}
                />
                <GenderSelect
                  formikValue={formik.values.gender}
                  icon={WomanIcon}
                  value="female"
                  id="female"
                  label="Female"
                />
              </Stack>
              {formik.errors.gender && (
                <FormHelperText error id="gender">
                  {" "}
                  {formik.errors.gender}
                </FormHelperText>
              )}
            </Box>

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
              disabled={
                Object.values(formik.errors).length !== 0 &&
                Object.values(formik.values).length !== 0
                  ? true
                  : false
              }
            >
              {loading ? (
                <CircularProgress color="secondary" />
              ) : (
                "Create Account"
              )}
            </StyledButton>
          </Stack>
        )}
      </FormikProvider>
    </form>
  );
}