import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { baseURL } from "../../Context/ContTant";
import "./AdminHeader.scss";
export const AdminHeader = () => {
  const user = useSelector((state) => state.adminReducer.adminInfor);
  console.log(user);
  return (
    <div className="admin__header" >
      <div className="admin__header-user">
        <div className="admin__header-img">
          <img style={{ height: '100%', width: '100%' }} alt="" src={user && `${baseURL}/${user.avatar}`} />
        </div>
        <p className="admin__header-name">{user && user.userName}</p>
        <i class="fa-solid fa-right-from-bracket"></i>
      </div>
      <div className="admin__header-action">
        <ul className="admin__header-list">
          <Link to="/admin/danh-sach-san-pham" className="admin__header-item">
            Danh sách sản phẩm
          </Link>
          <Link to="/admin/danh-sach-khach-hang" className="admin__header-item">
            Danh sách khách hàng
          </Link>
          <Link to="/admin/danh-sach-phan-loai" className="admin__header-item">
            Danh sách danh mục
          </Link>
          <Link to="/" className="admin__header-item">
            Danh sách Order
          </Link>
        </ul>
      </div>
    </div>
  );
};
