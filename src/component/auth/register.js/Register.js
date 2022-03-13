import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../../store/action/authAction";

function Register(props) {
  const [isHiddenPass, setIsHiddenPass] = useState(true);
  // const [fileImage, setFileImage] = useState('')
  const [valueForm, setValueForm] = useState({
    userName: "",
    email: "",
    password: "",
    fileImage: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const { email, password, userName, fileImage } = valueForm;

  const handleHiddenPassword = () => {
    setIsHiddenPass(!isHiddenPass);
  };

  const [urlImage, setUrlImage] = useState("");

  const onChangeRegister = (e) => {
    setValueForm({ ...valueForm, [e.target.name]: e.target.value });
  };

  const onchangeFileImage = (e) => {
    setValueForm({ ...valueForm, fileImage: e.target.files[0] });
  };
  useEffect(() => {
    if (!fileImage) {
      setUrlImage(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(fileImage);
    setUrlImage(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [fileImage]);
  const data = new FormData()
  data.append('fileImage', fileImage)
  data.append('email', email)
  data.append('password', password)
  data.append('userName', userName)

  const handleRegister = async (e) => {
    e.preventDefault()
    const result = await registerUser(data)
      .then(res => {
        console.log(`Success`);
      })
      .catch(err => {
        console.log(err);
      })
    console.log(result);

  }
  console.log(data);
  return (
    <div className="auth">
      <div className="auth-wrap">
        <div className="auth__heading">
          <h1>Register</h1>
        </div>
        <form className="auth__form" onSubmit={handleRegister} enctype="multipart/form-data">
          <div className="group__input" >
            <div className="auth__form-input">
              <i className="fa-solid fa-circle-user"></i>
              <input
                required
                value={userName}
                autoFocus
                name="userName"
                onChange={onChangeRegister}
                placeholder="Vui lòng nhập username"
                type="text"
              />
            </div>
            <div className="auth__form-input">
              <i className="fa-solid fa-envelope"></i>
              <input
                required
                value={email}
                name="email"
                onChange={onChangeRegister}
                placeholder="Vui lòng nhập email"
                type="email"
              />
            </div>
          </div>
          <div className="group__input">
            <div className="auth__form-input">
              <i className="fa-solid fa-key"></i>
              <input
                required
                value={password}
                name="password"
                onChange={onChangeRegister}
                placeholder="Vui lòng nhập password"
                type={`${isHiddenPass ? "password" : "text"}`}
              />
              <i
                onClick={handleHiddenPassword}
                style={{ cursor: "pointer" }}
                className={`${isHiddenPass ? "fas fa-eye-slash" : "fas fa-eye"}`}
              ></i>
            </div>
            <div className="auth__form-input">
              <i className="fa-solid fa-user-lock"></i>
              <input
                required
                value={confirmPassword}
                name="confirmpassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Vui lòng confirm password"
                type={`${isHiddenPass ? "password" : "text"}`}
              />
              <i
                onClick={handleHiddenPassword}
                style={{ cursor: "pointer" }}
                className={`${isHiddenPass ? "fas fa-eye-slash" : "fas fa-eye"}`}
              ></i>
            </div>
          </div>
          <div className="auth__form-input">
            <input onChange={onchangeFileImage} name="fileImage" multiple='' type="file" />
          </div>
          {fileImage && (
            <img
              accept="image/*"
              style={{ height: "50%", width: "50%", marginTop: "20px" }}
              src={urlImage}
              alt=""
            />
          )}
          <button type="submit">Register</button>
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
            Bạn đã có tài khoản:
            <> </>
            <Link style={{ color: "red" }} to="/login">
              Đăng nhập ngay
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
