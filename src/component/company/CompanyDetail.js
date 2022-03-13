import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCompanyFindId } from "../../store/action/categoryAction";
import ListPost from "../listPost/ListPost";
import moment from "moment";
import { baseURL } from "../../Context/ContTant";
import styled from "styled-components";
function CompanyDetail(props) {
  const slug = useParams();
  const dispatch = useDispatch();
  const companyId = useSelector((state) => state.categoryReducer.companyId);
  useEffect(() => {
    const getCategory = () => {
      dispatch(getCompanyFindId(slug.tencty));
    };
    getCategory();
  }, [dispatch]);
  console.log(companyId);
  return (
    <div className="companydetail">
      <div className="grid wide">
        <div className="row">
          <div className="col l-3">
            <ListPost />
          </div>
          <div className="col l-9">
            <InfoCompany className="companyDetail__info">
              <h4>Danh bạ nhà nông</h4>
              <h1>{companyId && companyId.Name}</h1>
              <span className="companyDetail__time">
                Posted on: {moment(companyId.createAt).format("DD/MM/YYYY")}
              </span>
              <div className="companyDetail_img">
                <img src={`${baseURL}/${companyId.img}`} alt="" />
              </div>
              <p
                className="companyDetail__desc"
                dangerouslySetInnerHTML={{ __html: companyId.description }}
              ></p>
            </InfoCompany>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyDetail;
const InfoCompany = styled.div`
  padding: 20px;
  box-shadow: 0 0 10px #ccc;
  h4 {
    padding-top: 10px;
  }
  h1 {
    padding-top: 40px;
  }
  .companyDetail__time {
    display: block;
    padding-top: 10px;
  }
  .companyDetail_img {
    margin-top: 20px;
    border: 1px solid #f6f6f6;
    width: 100%;
    img {
      width: 100%;
      height: 450px;
    }
  }
  .companyDetail__desc {
    margin-top: 20px;
    line-height: 1.6;
    font-size: 30px !important;
    p {
    }
  }
`;
