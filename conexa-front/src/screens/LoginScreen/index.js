import React from "react";
import "./index.sass";
import { signIn } from "../../services/auth.service";
import { useSelector, useDispatch } from "react-redux";
import { user } from "../../features/user/userSlice";
import Form from "./Form";
import { motion } from "framer-motion";
import { variantsTransition } from "../../consts/variants";
const LoginScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogin = (email, password) => {
    dispatch(signIn(email, password));
  };

  return (
    <motion.div
      variants={variantsTransition}
      initial="hidden"
      animate="visible"
      exit="hidden"
      id="login-screen"
    >
      <div className="card">
        <Form user={user} handleLogin={handleLogin} />
      </div>
    </motion.div>
  );
};

export default LoginScreen;
