import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getAllPost } from "../../store/action/categoryAction";
import Post from "../home/post/Post";
import ListPost from "../listPost/ListPost";
import PostItem from "./PostItem";

function ListPostHome(props) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.categoryReducer.post);
  useEffect(() => {
    const getPost = () => {
      dispatch(getAllPost());
    };
    getPost();
  }, [dispatch]);
  return (
    <div className="lisposthome">
      <div className="grid wide">
        <Heading className="danhbanhanong__heading">
          <h1 style={{ fontSize: '24px', color: '#777' }}>Bài viết chia sẻ</h1>
        </Heading>
        <div className="row">
          <div className="col l-3">
            <ListPost />
          </div>
          <div className="col l-9">
            <div className="row">
              {posts &&
                posts.map((post, index) => (
                  <div
                    style={{ marginTop: '20px' }}
                    className="col l-4"
                    key={index}
                  >
                    <Link to={`/chia-se-kien-thuc/${post._id}`}>
                      <PostItem post={post} />
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListPostHome;
const Heading = styled.div`
  padding: 40px 0;
  text-align: center;
  corlor: #777;
`;
