import * as Yup from "yup";
import {
  INVALID_EMAIL_ERROR,
  EMPTY_EMAIL_ERROR,
  EMPTY_PASSWORD_ERROR,
} from "../../consts/loginScreen";
export const initialValues = {
  email: "",
  password: "",
};

export const validationSchema = Yup.object({
  email: Yup.string()
    .email("Email must be a valid email")
    .required("Email is a required field"),
  password: Yup.string().required("Password is a required field"),
});
