// Form related libraries
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";

// MUI components
import Button from "@mui/material/Button";
import PasswordInput from "./PasswordInput";

import { Stack, TextField } from "@mui/material";
import { roundedInput, button } from "./style";

export default function LoginForm() {
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
    onChange: () => {
      console.log(Object.values(formik.values).length);
    },
    onSubmit: (values) => {},
  });

  return (
    <form onSubmit={formik.handleSubmit} method="post">
      <Stack spacing={3} width="90vw" maxWidth="375px">
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

        <PasswordInput
          label="Password"
          id="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={formik.touched.password && formik.errors.password}
          error={formik.touched.password && formik.errors.password && true}
        />
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
      </Stack>
    </form>
  );
}
