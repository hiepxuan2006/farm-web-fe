import React from "react";
import { useLocation, useParams } from "react-router-dom";
import "./Auth.scss";
import Login from "./login/Login";
import Register from "./register.js/Register";

function Auth(props) {

  const location = useLocation()

  return (
    <div className={`auth login`}>
      {
        location.pathname === '/login' && <Login />
      }
      {
        location.pathname === '/register' && <Register />
      }
    </div>
  );
}

export default Auth;
