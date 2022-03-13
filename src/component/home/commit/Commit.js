import React from "react";
import { baseURL } from "../../../Context/ContTant";

function Commit(props) {
  return (
    <div
      className="commit"
      style={{
        marginTop: "40px",
        backgroundImage: `url(${baseURL}/banner-san-pham.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "400px",
      }}
    >

      <div className="commit_sesc" style={{ paddingTop: '50px' }}>
        <div className="grid wide">
          <div className="row">
            <div
              style={{
                textAlign: "center",
                height: "300px",
                width: "100%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="col l-3"
            >
              <img
                style={{ hight: "200px ", width: "200px" }}
                src={`${baseURL}/huu-co.png`}
                alt=""
              />
            </div>
            <div
              style={{
                textAlign: "center",
                height: "300px",
                width: "100%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
              className="col l-3"
            >
              <img
                style={{ hight: "200px ", width: "200px" }}
                src={`${baseURL}/tieu-chuan-vn.png`}
                alt=""
              />
            </div>
            <div
              style={{
                textAlign: "center",
                height: "300px",
                width: "100%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="col l-3"
            >
              <img
                style={{ hight: "200px ", width: "200px" }}
                src={`${baseURL}/tieu-chuan.png`}
                alt=""
              />
            </div>
            <div
              style={{
                textAlign: "center",
                height: "300px",
                width: "100%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="col l-3"
            >
              <img
                style={{ hight: "200px ", width: "200px" }}
                src={`${baseURL}/my.png`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Commit;
