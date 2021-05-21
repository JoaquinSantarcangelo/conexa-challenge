import React from "react";
import { Box, ButtonGroup } from "@chakra-ui/react";
import { Formik } from "formik";
import { InputControl, SubmitButton } from "formik-chakra-ui";

//Utils
import { initialValues, validationSchema } from "../utils";

//Functions
import { handleLogin } from "../functions";

const Form = () => {
  return (
    <div className="form">
      <Formik
        initialValues={initialValues}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, values, errors }) => (
          <Box as="form" onSubmit={handleSubmit}>
            <InputControl
              name="email"
              label="Email"
              placeholder="Enter your email adress"
              type=""
            />
            <InputControl name="password" label="Password" />

            <ButtonGroup>
              <SubmitButton>Log in</SubmitButton>
            </ButtonGroup>
          </Box>
        )}
      </Formik>
    </div>
  );
};

export default Form;
