import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { baseURL } from "../../Context/ContTant";
import { getAllPost } from "../../store/action/categoryAction";
import "./ListPost.scss";
function ListPost(props) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.categoryReducer.post);
  useEffect(() => {
    const getPost = () => {
      dispatch(getAllPost());
    };
    getPost();
  }, [dispatch]);
  return (
    <div className="listpost">
      <h3 className="lispost__header">Bài Viết Mới</h3>
      <ul className="listpost__list">
        {posts &&
          posts.map((post, index) => (
            <Link
              to={`/chia-se-kien-thuc/${post._id}`}
              key={index}
              className="listpost__item"
            >
              <div className="listpost__img">
                <img src={`${baseURL}/${post.img1}`} alt="" />
              </div>
              <div className="lispost__info">
                <p>{post.Name}</p>
                <span className="listpost__category">
                  {post.category === "kien-thuc"
                    ? "Kiến thức"
                    : "Công thức nấu ăn"}
                </span>
              </div>
            </Link>
          ))}
      </ul>
    </div>
  );
}

export default ListPost;
