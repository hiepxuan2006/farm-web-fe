import React from "react";
import { baseURL } from "../../../Context/ContTant";
import "./Sales.scss";
function Sales(props) {
  return (
    <div className="sales">
      <div className="sales__heading">
        <h1>Chương trình khuyến mại</h1>
      </div>
      <div className="grid wide">
        <div className="row">
          <div className="col l-3">
            <div className="sales__content">
              <div className="sales__img">
                <img src={`${baseURL}/sales1.png`} alt="" />
              </div>
            </div>
          </div>
          <div className="col l-3">
            <div className="sales__content">
              <div className="sales__img">
                <img src={`${baseURL}/sales2.jpg`} alt="" />
              </div>
            </div>
          </div>
          <div className="col l-3">
            <div className="sales__content">
              <div className="sales__img">
                <img src={`${baseURL}/sales3.png`} alt="" />
              </div>
            </div>
          </div>
          <div className="col l-3">
            <div className="sales__content">
              <div className="sales__img">
                <img src={`${baseURL}/sales4.jpg`} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sales;
