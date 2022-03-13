import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostFindId } from "../../store/action/categoryAction";
import ListPost from "../listPost/ListPost";
import styled from "styled-components";
import moment from "moment";
import { baseURL } from "../../Context/ContTant";

function PostDetail(props) {
  const slug = useParams();
  const dispatch = useDispatch();
  const postId = useSelector((state) => state.categoryReducer.postId);
  useEffect(() => {
    const getCategory = () => {
      dispatch(getPostFindId(slug.ten));
    };
    getCategory();
    window.scrollTo(0, 0)

  }, [dispatch, slug.ten]);
  console.log(postId);
  return (
    <div className="postdetail">
      <div className="grid wide">
        <div className="row">
          <div className="col l-3">
            <ListPost />
          </div>
          <div className="col l-9">
            <InfoPost className="companyDetail__info">
              <h4>
                {postId.category === "kien-thuc"
                  ? "Kiến thức"
                  : "Công thức nấu ăn"}
              </h4>
              <h1>{postId && postId.Name}</h1>
              <span className="companyDetail__time">
                Posted on: {moment(postId.createAt).format("DD/MM/YYYY")}
              </span>
              <div className="companyDetail_img">
                <img src={`${baseURL}/${postId.img1}`} alt="" />
              </div>
              <p
                className="companyDetail__desc"
                dangerouslySetInnerHTML={{ __html: postId.description }}
              ></p>
              <ul className="social__media">
                <li
                  className="social__media-item"
                  style={{
                    background: "#4769A5",
                    borderBottom: "6px solid #314b83",
                  }}
                >
                  <i class="fa-brands fa-facebook-square"></i>
                  <span>Facebook</span>
                </li>
                <li
                  className="social__media-item"
                  style={{
                    background: "#65CCEF",
                    borderBottom: "6px solid #0092ba",
                  }}
                >
                  <i class="fa-brands fa-twitter"></i>
                  <span>Twitter</span>
                </li>
                <li
                  className="social__media-item"
                  style={{
                    background: "#EA4335",
                    borderBottom: "6px solid #ab2b1d",
                  }}
                >
                  <i class="fa-brands fa-google-plus-square"></i>
                  <span>Google</span>
                </li>
                <li
                  className="social__media-item"
                  style={{
                    background: "#cd252b",
                    borderBottom: "6px solid #ae1319",
                  }}
                >
                  <i class="fa-brands fa-pinterest-square"></i>
                  <span>Printerest</span>
                </li>
                <li
                  className="social__media-item"
                  style={{
                    background: "#2ba3e1",
                    borderBottom: "6px solid #278cc0",
                  }}
                >
                  <i class="fa-brands fa-linkedin"></i>
                  <span>Linkedin</span>
                </li>
              </ul>
            </InfoPost>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
const InfoPost = styled.div`
  margin-top: 20px;
  padding: 20px;
  box-shadow: 0 0 10px #dbdbdb;
  transition: all 0.2s linear;

  &:hover{
  box-shadow: 0 0 20px #777;
  border-radius:12px;

  }
  h4 {
    padding-top: 10px;
    color: #777;
  }
  h1 {
    padding-top: 20px;
    font-size: 28px;
  }
  .companyDetail__time {
    display: block;
    padding-top: 10px;
    font-size: 14px;
    color: #ccc;
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
  .social__media {
    display: flex;
    gap: 10px;
    margin-top: 20px;
    filter: brightness(1);
    &:hover .social__media-item{
      filter: brightness(0.7);
    }
    .social__media-item {
      padding: 8px;
      min-width: 100px;
      color: #fff;
      border-radius: 6px;
      cursor: pointer;
      &:hover  {
        filter: brightness(1) ;
    }
    i {
      font-size: 18px;
      margin-right: 4px;
    }
    }
  }
`;
