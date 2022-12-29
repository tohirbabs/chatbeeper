import React, { useState, useEffect } from "react";
import { Axios } from "axios";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

import { FiAtSign } from "react-icons/fi";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";

import { useStore } from "../../store";
import { button, form, formComp } from "./PersonalDetailsForm/style";
import { pageAnimation } from "../../animations";
import { useNavigate } from "react-router-dom";

import { useCookies } from "react-cookie";
import { POST } from "../../utils/request";
import { ThreeDots } from "react-loader-spinner";

import toast from "react-hot-toast";
import { useQuery } from "react-query";

export default function Username() {
  const initialValues = useStore((state) => state.userReg.data);
  const updateValues = useStore((state) => state.updateRegValues);
  const fetchPost = useStore((state) => state.fetchPost);
  const location = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const [cookies, setCookie, removeCookie] = useCookies(["user-data"]);

  // const { data, isLoading } = useQuery(["register"], () => {
  //   return Axios.post(
  //     "https://beeperchat.herokuapp.com/user",
  //     initialValues
  //   ).then((res) => res.data);
  // });

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      // setCookie("user-data", { ...values }, { path: "/" });

      updateValues({ ...values });
      fetchPost("user", { ...initialValues, ...formik.values });
      console.log(formik.values);
      // console.log(initialValues.username);
    },
  });

  // const postSignup = async (values) => {
  //   setIsLoading(true);

  //   try {
  //     const body = JSON.stringify({
  //       dob: cookies.userData.dob,
  //       email: cookies.userData.email,
  //       firstname: cookies.userData.firstname,
  //       gender: cookies.userData.gender,
  //       lastname: cookies.userData.lastname,
  //       password: cookies.userData.password,
  //       phone: cookies.userData.phone,
  //       username: formik.values.username,
  //     });

  //     const response = await POST("user", body);

  //     if (response.ok) {
  //       const result = await response.json();
  //       location(`/home`);
  //       console.log("result is: ", JSON.stringify(result));
  //     }

  //     response.json().then((text) => {
  //       console.log(text);
  //       toast.error(`${text.message}`, {
  //         style: {
  //           backgroundColor: "#386fa4",
  //           color: "white",
  //         },
  //       });
  //     });
  //   } catch (err) {
  //     setErr(err.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <motion.form
      onSubmit={formik.handleSubmit}
      method="post"
      variants={pageAnimation}
      exit="exit"
      animate="animate"
      initial="initial"
      transition={pageAnimation.transition}
      style={form}
    >
      <Box sx={{ display: "grid", gap: "1rem" }}>
        <InputLabel htmlFor="username">Choose your username</InputLabel>
        <FormControl fullWidth variant="contained">
          <OutlinedInput
            id="username"
            error={formik.errors.username && true}
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            startAdornment={
              <InputAdornment position="start">
                <FiAtSign />
              </InputAdornment>
            }
          />

          {formik.errors.username && (
            <FormHelperText>{formik.errors.username}</FormHelperText>
          )}
        </FormControl>

        <Button
          variant="contained"
          type="submit"
          // onClick={() => {
          //   // postSignup();
          //   setCookie("userData", formik.values, { path: "/" });
          // }}
          sx={button}
          disabled={
            Object.values(formik.errors).length !== 0 &&
            Object.values(formik.values).length !== 0
              ? true
              : false
          }
        >
          {isLoading ? (
            <ThreeDots
              height="18"
              width="100"
              color="white"
              ariaLabel="loading"
            />
          ) : (
            "Create Account"
          )}
        </Button>
      </Box>
    </motion.form>
  );
}
