import React from "react";
import { Outlet } from "react-router-dom";
import { AdminHeader } from "./adminHeader/AdminHeader";
import { ListProduct } from "./listProduct/ListProduct";
import "./Admin.scss";
export const Admin = () => {
  return (
    <div className="admin">
      <div className="grid">
        <div className="row   ">
          <div className="col l-3">
            <AdminHeader />
          </div>
          <div className="col l-9">
            <div className="admin__content">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
