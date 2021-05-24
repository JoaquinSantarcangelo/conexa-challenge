import React from "react";
import "./index.sass";
import { signIn } from "../../services/auth.service";
import { useSelector, useDispatch } from "react-redux";
import { user } from "../../features/user/userSlice";
import Form from "./Form";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogin = (email, password) => {
    dispatch(signIn(email, password));
  };

  return (
    <div id="login-screen">
      <div className="card">
        <Form user={user} handleLogin={handleLogin} />
      </div>
    </div>
  );
};

export default LoginScreen;
