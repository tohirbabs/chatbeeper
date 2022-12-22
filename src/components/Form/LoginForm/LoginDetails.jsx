import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PasswordInput from "../PasswordInput/PasswordInput";

import { useStore } from "../../../store";
import { pageAnimation } from "../../../animations";
import Input from "../Input/Input";
import { form, formComp, button } from "./style";

import { useCookies } from "react-cookie";

export default function LoginDetails({ setCurrentForm }) {
  const initialValues = useStore((state) => state.userReg.data);
  const updateValues = useStore((state) => state.updateRegValues);
  const fetchPost = useStore((state) => state.fetchPost);

  const [cookies, setCookie, removeCookie] = useCookies(["user-data"]);
  // console.log(cookies);
  // Formik
  const formik = useFormik({
    initialValues: { email: "", password: "" },
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
      // setCookie("user-data", { ...values }, { path: "/" });

      updateValues({ ...values });
      fetchPost("auth/login", { ...formik.values });
      // console.log(initialValues.username);
    },
  });

  return (
    <motion.form
      onSubmit={formik.handleSubmit}
      method="post"
      variants={pageAnimation}
      animate="animate"
      initial="initial"
      transition={pageAnimation.transition}
      style={form}
    >
      <Box sx={formComp}>
        <Input
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
        Login
      </Button>
    </motion.form>
  );
}
