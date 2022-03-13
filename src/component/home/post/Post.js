import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseURL } from "../../../Context/ContTant";
import { getAllPost } from "../../../store/action/categoryAction";
import styled from 'styled-components'
import { Link } from "react-router-dom";
function Post(props) {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.categoryReducer.post)
  useEffect(() => {
    const getPost = () => {
      dispatch(getAllPost());
    };
    getPost();
  }, [dispatch]);
  return (
    <PostWrap className="post">
      <div className="post__heading">
        <h1>Chia sẽ kiến thức kỹ năng cùng bạn</h1>
      </div>
      <div className="grid wide">
        <div className="row">
          {
            posts && posts.map((post, index) => (
              <div className="col l-3" key={index}>
                <Link to={`chia-se-kien-thuc/${post._id}`} className="post__item">
                  <div className="post__img">
                    <img
                      src={`${baseURL}/${post.img1}`}
                      alt=""
                    />
                  </div>
                  <div className="post__desc">
                    <p>{(post.category === 'kien-thuc') ? 'Kiến Thức' : 'Công thức nấu ăn'
                    }</p>
                    <h3 className="post__name">{post.Name}</h3>
                  </div>
                </Link>
              </div>

            ))
          }
        </div>
      </div>
    </PostWrap>
  );
}

export default Post;
const PostWrap = styled.div`
margin: 40px 0;

.post__heading {
    width     : 100%;
    text-align: center;

    font-size: 20px;

    h1 {
        color  : #777;
        padding: 24px;
    }
}

.post__item {
  height:300px;
  display:block;
  padding-top: 20px;

    cursor: pointer;
 
&:hover .post__img img {
  transform: scale(1.09);
}
&:hover {
  box-shadow: 0 0 10px #ccc;
}

.post__img {
  height  : 200px;
  width   : 100%;
  overflow: hidden;
  
  img {
    transform: scale(1);
    
    transition: all .2s linear;
      height   : 100%;
      width    : 100%;
  }
}
    .post__desc {
        height:100%;
      margin-left:4px;
        .post__name {
            font-size: 20px;
            padding  : 10px 0;
            height   : 24px;
        }

        p {
            margin-top: 10px;
            font-size : 14px;
            font-style: italic;
            color     : #777;
        }
    }
}
`