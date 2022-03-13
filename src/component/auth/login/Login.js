import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { TOKEN_NAME } from "../../../Context/ContTant";
import { loginUser, userSetAuth } from "../../../store/action/authAction";
function Login(props) {
  const navigate = useNavigate()
  const [errMess, setErrMess] = useState('')
  const isLogin = useSelector((state) => state.authReducer.isLogin);
  if (isLogin)
    navigate('/')
  const [isHiddenPass, setIsHiddenPass] = useState(true);
  const handleHiddenPassword = () => {
    setIsHiddenPass(!isHiddenPass);
  };
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  })
  const { email, password } = loginForm
  const handleChangLogin = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value })
  }
  const dispatch = useDispatch()
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const result = await loginUser(loginForm)
      if (result.data.success) {
        dispatch(userSetAuth(result.data.info))
        // if (result.data.isAdmin)
        localStorage.setItem(TOKEN_NAME, result.data.accessToken)
        navigate('/')
      }
    } catch (error) {

    }


  }
  return (

    <div className="auth login" >
      <div className="auth-wrap">
        <div className="auth__heading">
          <h1>Login</h1>
        </div>
        <form className="auth__form" onSubmit={handleLogin} >
          <div className="auth__form-input">
            <i className="fa-solid fa-envelope"></i>
            <input placeholder="Vui lòng nhập email" name="email" value={email} onChange={handleChangLogin} autoFocus required type="email" />
          </div>
          <div className="auth__form-input">
            <i className="fa-solid fa-key"></i>
            <input
              name="password" value={password} onChange={handleChangLogin}
              placeholder="Vui lòng nhập password"
              type={`${isHiddenPass ? "password" : "text"}`}
            />
            <i
              onClick={handleHiddenPassword}
              style={{ cursor: "pointer" }}
              className={`${isHiddenPass ? "fas fa-eye-slash" : "fas fa-eye"}`}
            ></i>
          </div>
          <button type="submit">Login</button>
        </form>
        <div>
          <span
            style={{
              display: "block",
              marginTop: "20px",
              fontSize: "18px",
              color: "#fff",
            }}
          >
            Bạn chưa có tài khoản?{" "}
            <Link style={{ color: "red" }} to={"/register"}>
              Đăng ký ngay
            </Link>
          </span>
          <Link to='/' style={{
            display: 'block',
            paddingTop: '20px',
            fontSize: '20px',
            color: '#fff',
            cursor: 'pointer'
          }}>Quay lại trang chủ</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
