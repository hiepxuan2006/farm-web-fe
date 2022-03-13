import React from "react";
import Login from "./login/Login";
import "./Auth.scss";
import Register from "./register.js/Register";

function Auth(props) {
  const { authRoute } = props
  return (
    <div className="auth__content">
      <div className="modal">

        {(authRoute === 'login') && < Login />}
        {(authRoute === 'register' && <Register />)}

      </div>

    </div>
  );
}

export default Auth;
