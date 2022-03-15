import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { TOKEN_NAME } from "../../../Context/ContTant";
import { loginUser, userSetAuth } from "../../../store/action/authAction";
import { setAdmin } from '../../../store/action/adminAction'
function Login(props) {
  const [errMess, setErrMess] = useState("");

  const isLogin = useSelector((state) => state.authReducer.isLogin);
  const [isHiddenPass, setIsHiddenPass] = useState(true);
  const handleHiddenPassword = () => {
    setIsHiddenPass(!isHiddenPass);
  };
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = loginForm;
  const handleChangLogin = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await loginUser(loginForm);
      console.log(result);
      if (result.data.success) {
        dispatch(userSetAuth(result.data.info));
        dispatch(setAdmin())
        localStorage.setItem(TOKEN_NAME, result.data.accessToken);
        navigate("/");
      }
    } catch (error) {
      setErrMess(error);
    }
  };
  if (isLogin) navigate("/");

  return (
    <div className=" auth__content">
      <div className="auth-wrap login">
        <div className="auth__heading">
          <h1>Login</h1>
        </div>
        <form className="auth__form" onSubmit={handleLogin}>
          <div className="auth__form-input">
            <i className="fa-solid fa-envelope"></i>
            <input
              placeholder="Vui lòng nhập email"
              name="email"
              value={email}
              onChange={handleChangLogin}
              autoFocus
              required
              type="email"
            />
          </div>
          <div className="auth__form-input">
            <i className="fa-solid fa-key"></i>
            <input
              placeholder="Vui lòng nhập password"
              name="password"
              value={password}
              onChange={handleChangLogin}
              autoFocus
              required
              type={`${isHiddenPass ? "password" : "text"}`}
            />
            <i
              onClick={handleHiddenPassword}
              style={{ cursor: "pointer", position: "absolute", right: "20px" }}
              className={`${isHiddenPass ? "fas fa-eye-slash" : "fas fa-eye"}`}
            ></i>
          </div>
          <p
            style={{
              float: "left",
              marginTop: "20px",
              paddingLeft: "24px",
              color: "red",
            }}
          >
            {errMess}
          </p>
          <button type="submit">Login</button>
        </form>
        <div style={{ marginTop: "20px", fontSize: "20px" }}>
          <p>Bạn chưa có tài khoản ?</p>
          <Link
            style={{ color: "red", marginTop: "20px", display: "block" }}
            to="/register"
          >
            Đăng ký ngay
          </Link>
        </div>
        <div>
          <span
            style={{
              display: "block",
              marginTop: "20px",
              fontSize: "18px",
              color: "#fff",
            }}
          ></span>
          <Link
            to="/"
            style={{
              display: "block",
              paddingTop: "20px",
              fontSize: "20px",
              color: "#000",
              cursor: "pointer",
            }}
          >
            Quay lại trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
