import { useState } from "react";

import { motion } from "framer-motion";
import { useFormik, FormikProvider } from "formik";
import * as Yup from "yup";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";

import { pageAnimation } from "../../../animations";
import { useStore } from "../../../store";
import { ManIcon, WomanIcon } from "../../../assets/icons";
import { form, formComp, button, gender } from "../PersonalDetailsForm/style";
import PasswordInput from "../PasswordInput/PasswordInput";
import DateInput from "../DateInput";
import GenderSelect from "../GenderSelect";

import { useCookies } from "react-cookie";

export default function OtherDetails({ setCurrentForm }) {
  const [fieldValue, setFieldValue] = useState("");
  const initialValues = useStore((state) => state.userReg.data);
  const updateValues = useStore((state) => state.updateRegValues);

  const [cookies, setCookie, removeCookie] = useCookies();
  // console.log(cookies);
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
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
      setCookie("userData", { ...values }, { path: "/" });
      updateValues({ ...values });
      setCurrentForm(2);
    },
  });

  return (
    <FormikProvider value={formik}>
      <motion.form
        method="post"
        animate="animate"
        variants={pageAnimation}
        exit="exit"
        initial="initial"
        transition={pageAnimation.transition}
        style={form}
        onSubmit={formik.handleSubmit}
      >
        <Box style={{ display: "grid", gap: "1rem" }}>
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
        </Box>
        <Button
          variant="contained"
          type="submit"
          sx={button}
          disabled={
            Object.values(formik.errors).length !== 0 &&
            Object.values(formik.values).length !== 0
              ? true
              : false
          }
        >
          Continue
        </Button>
      </motion.form>
    </FormikProvider>
  );
}
