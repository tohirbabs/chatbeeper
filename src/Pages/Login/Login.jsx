import React from "react";
import { FormLayout } from "../../components/Form";
import LoginDetails from "../../components/Form/LoginForm/LoginDetails";

export const Login = () => {
  const login = true;

  return (
    <FormLayout login={login}>
      <LoginDetails />
    </FormLayout>
  );
};
