import { useState } from "react";

import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";

import { MuiTelInput } from "mui-tel-input";

import { useStore } from "../../store";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormHelperText,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  Box,
} from "@mui/material";
import { StyledButton } from "../StyledButton";
import { gender, roundedInput } from "./style";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiAtSign } from "react-icons/fi";
import PasswordInput from "./PasswordInput";
import GenderSelect from "./GenderSelect";

import { ManIcon, WomanIcon } from "../../assets/icons";
import DateInput from "./DateInput";
import { POST } from "../../utils/request";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function SignUpForm({ setCurrentForm, currentForm }) {
  const initialValues = useStore((state) => state.userReg.data);
  const updateValues = useStore((state) => state.updateRegValues);

  const store = useStore();
  const navigate = useNavigate();
  const [fieldValue, setFieldValue] = useState("");

  const formik = useFormik({
    initialValues: initialValues,
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
      updateValues({ ...values });
      POST("user", JSON.stringify(values))
        .then((res) => res.json())
        .then((res) => (res.message ? toast(res.message) : navigate("/verify")))
        .catch((err) => console.log("error:", err));
      // registerUser.mutate();
    },
  });

  // const registerUser = useMutation(
  //   POST("user", JSON.stringify(formik.values)),
  //   {
  //     onMutate(variables) {
  //       store.setRequestLoading(true);
  //     },
  //     onSuccess(data) {
  //       store.setRequestLoading(false);
  //       toast.success(data?.message);
  //     },
  //     onError(error) {
  //       store.setRequestLoading(false);
  //       if (Array.isArray(error.response.data.error)) {
  //         error.response.data.error.forEach((el) =>
  //           toast.error(el.message, {
  //             position: "top-right",
  //           })
  //         );
  //       } else {
  //         toast.error(error.response.data.message, {
  //           position: "top-right",
  //         });
  //       }
  //     },
  //   }
  // );

  const page1Error =
    formik.errors.firstname ||
    formik.errors.lastname ||
    formik.errors.username ||
    formik.errors.email ||
    formik.errors.phone;

  return (
    <form onSubmit={formik.handleSubmit} method="post">
      <FormikProvider value={formik}>
        {currentForm === 0 ? (
          <Stack spacing={1.5} width="90vw" maxWidth="375px">
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
              sx={roundedInput}
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
              sx={roundedInput}
            />
            {/* <InputLabel htmlFor="username">Username</InputLabel> */}
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
                sx={roundedInput}
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
              sx={roundedInput}
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
              sx={roundedInput}
            />
            <StyledButton
              variant="contained"
              onClick={() => setCurrentForm(1)}
              disabled={page1Error ? true : false}
            >
              Continue <AiOutlineArrowRight />
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
              <Box sx={gender.container}>
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
              </Box>
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
              Create Account
            </StyledButton>
          </Stack>
        )}
      </FormikProvider>
    </form>
  );
}
