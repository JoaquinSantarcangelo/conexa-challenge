import React from "react";
import "./index.sass";
import { Box, ButtonGroup, Alert, AlertIcon } from "@chakra-ui/react";
import { Formik } from "formik";
import { InputControl, SubmitButton } from "formik-chakra-ui";

//Utils
import { initialValues, validationSchema } from "../utils";

//Consts
import { FORM_TITLE, SUBMIT_TEXT } from "../../../consts/loginScreen";
import { userSlice } from "../../../features/user/userSlice";

const Form = ({ user, handleLogin }) => {
  return (
    <div className="form">
      <h1>{FORM_TITLE}</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, values, errors }) => (
          <Box width="100%" as="form" onSubmit={handleSubmit}>
            <InputControl
              name="email"
              label="Email"
              inputProps={{ type: "email" }}
            />
            <InputControl
              mt="1em"
              name="password"
              label="Password"
              inputProps={{ type: "password" }}
            />
            <SubmitButton
              isLoading={user.loading}
              width="100%"
              size="lg"
              mt="2em"
            >
              {SUBMIT_TEXT}
            </SubmitButton>
          </Box>
        )}
      </Formik>
    </div>
  );
};

export default Form;
