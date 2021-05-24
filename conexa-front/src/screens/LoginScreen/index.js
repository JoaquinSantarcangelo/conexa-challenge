import React from "react";
import "./index.sass";
import { motion } from "framer-motion";
import { variantsTransition } from "../../consts/variants";

// Redux Imports
import { signIn } from "../../services/auth.service";
import { useSelector, useDispatch } from "react-redux";

// Components
import Form from "./Form";

const LoginScreen = () => {
  // Hooks - Redux
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  // -- Functions -- //
  // Handle Login
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
