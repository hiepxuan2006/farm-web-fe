import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getALLCategory } from "../../../store/action/categoryAction";
import ListPost from "../../listPost/ListPost";
import ProductItem from "./ProductItem";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
function ShopContent(props) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoryReducer.category);
  const { products } = props;
  useEffect(() => {
    const getCategory = () => {
      dispatch(getALLCategory());
    };
    getCategory();
  }, [dispatch]);
  const slug = useParams();
  const setPrevPage = () => {
    if (props.page - 1 > 1) {
      props.setPage(props.page - 1);
    } else {
      props.setPage(1);
    }
  };
  const setNextPage = () => {
    if (props.totalPage > props.page + 1) {
      props.setPage(props.page + 1);
    } else {
      props.setPage(props.totalPage);
    }
  };
  return (
    <div className="row">
      <div className="col l-3">
        <Listcategory className="listcategory">
          <Link to="/cua-hang" style={{ display: "block" }}>
            <h3 className="listcategory__header">Danh mục sản phẩm</h3>
          </Link>
          <ul className="listcategory__list">
            {categories &&
              categories.map((category, index) => (
                <Link
                  to={`/cua-hang/${category.path}`}
                  className="listcategory__item"
                  key={index}
                >
                  <span className="listcategory__name">{category.Name}</span>
                </Link>
              ))}
          </ul>
        </Listcategory>
        <ListPost />
      </div>
      <div className="col l-9">
        <ListProductItem className="row">
          {products &&
            products.map((product, index) => (
              <div className="col l-2-4" key={index}>
                <ProductItem product={product} />
              </div>
            ))}
        </ListProductItem>
        <NavigationPage className="navigation__page">
          <p class="fa-solid fa-angle-left" onClick={() => setPrevPage()}></p>
          <p className="navigation__page-item" onClick={() => props.setPage(1)}>
            1
          </p>
          <p className="navigation__page-item" onClick={() => props.setPage(2)}>2</p>
          <p className="navigation__page-item" onClick={() => props.setPage(3)}>3</p>
          <p class="fa-solid fa-angle-right" onClick={() => setNextPage()}></p>
        </NavigationPage>
      </div>
    </div>
  );
}

export default ShopContent;
const ListProductItem = styled.div`
  height: 660px;
  width: 100%;
`;
const NavigationPage = styled.div`
  // position: absolute;
  width: 100%;

  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  p {
    font-size: 24px;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
    border-radius: 10px;
  }
`;
const Listcategory = styled.div`
  border-left: 1px solid rgb(12, 179, 12);
  border-bottom: 1px solid rgb(12, 179, 12);
  border-right: 1px solid #f5f5f5;
  border-top: 1px solid #f5f5f5;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  overflow: hidden;
  margin-top: 20px;

  .listcategory__header {
    font-size: 20px;
    padding: 20px 10px;
    border-bottom: 1px solid #444;
    background-color: #6abd45;
    text-align: center;
    color: #fff;
  }

  .listcategory__list {
    .listcategory__item {
      display: flex;
      border-bottom: 1px solid #dbdbdb;
      font-size: 16px;
      padding: 10px 20px;
      font-weight: 400;
      gap: 10px;
      color: #000;

      .listcategory__img {
        height: 50px;
        width: 60px;
        overflow: hidden;

        img {
          height: 100%;
          width: 100%;
        }
      }

      .listcategory__info {
        .listcategory__category {
          font-size: 12px;
          font-style: italic;
          color: #ccc;
        }
      }

      &:last-child {
        border: none;
      }
    }
  }
`;
