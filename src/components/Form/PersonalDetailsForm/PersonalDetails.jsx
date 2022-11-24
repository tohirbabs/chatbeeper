import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { MuiTelInput } from "mui-tel-input";

import { useStore } from "../../../store";
import { pageAnimation } from "../../../animations";
import Input from "../Input/Input";
import { form, formComp, button } from "./style";

import { useCookies } from "react-cookie";

export default function PersonalDetails({ setCurrentForm }) {
  const initialValues = useStore((state) => state.userReg.data);
  const updateValues = useStore((state) => state.updateRegValues);

  const [cookies, setCookie, removeCookie] = useCookies(["user-data"]);
  // console.log(cookies);
  // Formik
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      firstname: Yup.string().required("Required"),
      lastname: Yup.string().required("Required"),
      email: Yup.string().email("Email address not valid").required("Required"),
      phone: Yup.string().phone("Phone number not valid").required("Required"),
    }),
    onSubmit: (values) => {
      setCookie("userData", { ...values }, { path: "/" });
      updateValues({ ...values });
      setCurrentForm(1);
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
          label={"First Name"}
          name="firstname"
          id="firstname"
          type="text"
          value={formik.values.firstname}
          error={formik.touched.firstname && formik.errors.firstname && true}
          helperText={formik.touched.firstname && formik.errors.firstname}
          onChange={formik.handleChange}
        />
        <Input
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

        <MuiTelInput
          value={formik.values.phone}
          id="phone"
          label="Phone"
          onChange={(value, i) => {
            formik.setFieldValue("phone", value);
          }}
          onBlur={formik.handleBlur}
          error={formik.touched.phone && formik.errors.phone && true}
          helperText={formik.touched.phone && formik.errors.phone}
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
  );
}
