import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { baseURL } from "../../Context/ContTant";
import ToastCart from "../cart/ToastCart";
import "./Header.scss";
function Header(props) {
  const isLogin = useSelector((state) => state.authReducer.isLogin);
  const isAdmin = useSelector((state) => state.adminReducer.isAdmin);
  const userInfo = useSelector((state) => state.authReducer.userInfo);
  const cart = useSelector((state) => state.categoryReducer.cart);
  const [scrollY, setScrollY] = useState("");
  useEffect(() => {
    const setScrolly = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", setScrolly);
  }, [scrollY]);
  const location = useLocation();
  console.log(isAdmin);
  return (
    <div
      className={`header ${location.pathname === "/login" || location.pathname === "/register"
        ? "hidden"
        : ""
        }`}
    >
      <div className="grid wide">
        <div
          className={` header-wrap  ${scrollY > 250 ? "header__fixed" : ""}`}
        >
          <div className="header__left ">
            <div className="header__logo">
              <img src={`${baseURL}/logo-farm.png`} alt="" />
              ``
            </div>
            <ul className="header__navbar">
              <li className="header__navbar-item">
                <Link to="/">Trang chủ</Link>
              </li>
              <li className="header__navbar-item">
                <Link to="/cua-hang">Cửa hàng</Link>
              </li>
              <li className="header__navbar-item">
                <Link to="/danh-ba-nha-nong">Danh bạ nhà nông</Link>
              </li>
              <Link to="/chia-se-kien-thuc" className="header__navbar-item">
                <a>Chia sẻ</a>
                <div className="navbar-list">
                  <a className="navbar-item">
                    <span>Kiến Thức</span>
                  </a>
                  <a className="navbar-item">
                    <span>Món ngon mỗi ngày</span>
                  </a>
                </div>
              </Link>
            </ul>
          </div>
          <div className="header__right">
            <Link to="/cart" className="header__cart ">
              <i className="fa-brands fa-opencart"></i>
              <span>{cart && cart.length}</span>
              <ToastCart cart={cart} />
            </Link>
            <div className="header__user">
              {isLogin ? (
                <div className="header__user-info">
                  <div className="header__user-img">
                    <img src={`${baseURL}/${userInfo.avatar}`} alt="" />
                  </div>
                  <span>{userInfo.userName}</span>
                  <ul className="user__navbar">
                    {isAdmin ? (
                      <Link to='/admin' className="user__navbar-item">Manage</Link>
                    ) : (
                      ""
                    )}
                    <li className="user__navbar-item">Cài đặt tài khoản</li>
                    <li className="user__navbar-item">Đăng xuất</li>
                  </ul>
                </div>
              ) : (
                <div>
                  <Link to="/login" className="fa-solid fa-circle-user"></Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
