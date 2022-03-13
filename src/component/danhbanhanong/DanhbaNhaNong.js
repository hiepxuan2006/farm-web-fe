import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../header/Header";
function DanhbaNhaNong(props) {
  return (
    <DanhBaNhaNongWrap className="danhbanhanong">
      {/* <Header /> */}
      <Outlet />
    </DanhBaNhaNongWrap>
  );
}

export default DanhbaNhaNong;

const DanhBaNhaNongWrap = styled.div`
  margin: 40px 0;
`;
