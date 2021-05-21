import React from "react";
import "./index.sass";

import Form from "./Form";

const LoginScreen = () => {
  return (
    <div id="login-screen">
      <div className="card">
        <Form />
      </div>
    </div>
  );
};

export default LoginScreen;
