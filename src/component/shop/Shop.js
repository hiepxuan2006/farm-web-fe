import React from "react";
import { Outlet } from "react-router-dom";
import "./Shop.scss";
function Shop(props) {
  return (
    <div className="shop">
      <div className="shop__wrap">
        <div className="grid wide">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Shop;
