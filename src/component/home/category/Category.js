import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseURL } from "../../../Context/ContTant";
import { getALLCategory } from "../../../store/action/categoryAction";
import styled from 'styled-components'
import { Link } from "react-router-dom";
function Category(props) {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.categoryReducer.category)
  useEffect(() => {
    const getCategory = () => {
      dispatch(getALLCategory())
    }
    getCategory()
  }, [dispatch])
  return (
    <CategoryWrap className="category">
      <div className="category__heading">
        <h1>Mua sản phẩm được lựa chọn từ vườn</h1>
        <div className="grid wide">
          <div className="row">
            {
              categories && categories.map((category, index) => (
                <div className="col l-2" key={index}>
                  <Link to={`/cua-hang/${category.path}`} className="category__item">
                    <img
                      className="category__img"
                      src={`${baseURL}/${category.img}`}
                      alt=""
                    />
                    <img
                      className="category__img-hover"
                      src={`${baseURL}/${category.imghover}`}
                      alt=""
                    />
                    <h3>{category.Name}</h3>
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </CategoryWrap>
  );
}


export default Category;
const CategoryWrap = styled.div`
padding: 40px 0;

.category__heading {
    font-size : 20px;
    width     : 100%;
    text-align: center;
    color     : #777;
}

.category__item {
    margin     : 40px 0;
    display    : block;
    cursor     : pointer;
    user-select: none;
    position   : relative;

    &:hover .category__img-hover {

        visibility: visible;
    }

    .category__img {
        width   : 100%;
        height  : 100%;
        display : block;
        position: relative;
    }

    .category__img-hover {
        position  : absolute;
        top       : 0;
        bottom    : 0;
        left      : 0;
        right     : 0;
        width     : 100%;
        visibility: hidden;
        transition: all .1s ease-in-out;
    }

    h3 {
        padding-top: 20px;
        color      : #000;
    }
}
`