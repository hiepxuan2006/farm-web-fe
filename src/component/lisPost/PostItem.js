import React from "react";
import styled from "styled-components";
import { baseURL } from "../../Context/ContTant";

function PostItem(props) {
  const { post } = props;
  return (
    <PostItemWrap className="postitem">
      <div className="postitem__img">
        <img src={`${baseURL}/${post.img1}`} alt="" />
      </div>
      <div className="postitem__desc">
        <h3>{post.Name}</h3>
        <p dangerouslySetInnerHTML={{ __html: post.description }}></p>
      </div>
    </PostItemWrap>
  );
}

export default PostItem;
const PostItemWrap = styled.div`
  width: 100%;
  height: 100%;
  box-shadow:0 0 10px #dbdbdb;
  overflow:hidden;

  transition: all 0.2s linear;
  &:hover {
    box-shadow: 0 0 20px #777;
    border-radius:12px;
  }
  &:hover .postitem__img img {
    transform: scale(1.09);
  }

  .postitem__img {
    height: 250px;
    width: 100%;
    text-align: center;
    border: 1px solid #777;
    overflow: hidden;

    img {
      transition: all 0.2s linear;
      transform: scale(1);
      height: 100%;
      width: 100%;
    }
  }

  .postitem__desc {
    padding: 0 10px;

    h3 {
      font-size: 24px;
      height: 80px;
      padding: 10px 0;
    }

    p {
      color: #777;
      width: 100%;
      text-align: justify;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      font-size: 14px !important;
      line-height: 18px;
      height: 58px;
      overflow: hidden;
      font-weight: 300;
      font-family: Arial, Helvetica, sans-serif !important;
    }
  }
`;
