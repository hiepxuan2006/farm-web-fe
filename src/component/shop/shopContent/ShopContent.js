import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getALLCategory } from "../../../store/action/categoryAction";
import ListPost from "../../listPost/ListPost";
import ProductItem from "./ProductItem";
import styled from 'styled-components'
import { Link, useParams } from "react-router-dom";
function ShopContent(props) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoryReducer.category);
  const { products } = props
  useEffect(() => {
    const getCategory = () => {
      dispatch(getALLCategory());
    };
    getCategory();
  }, [dispatch]);
  const slug = useParams()

  return (
    <div className="row">
      <div className="col l-3">
        <Listcategory className="listcategory">
          <Link to='/cua-hang' style={{ display: 'block' }}>
            <h3 className="listcategory__header">Danh mục sản phẩm</h3>
          </Link>
          <ul className="listcategory__list">
            {
              categories && categories.map((category, index) => (
                <Link to={`/cua-hang/${category.path}`} className="listcategory__item" key={index}>
                  <span className="listcategory__name">{category.Name}</span>
                </Link>

              ))
            }
          </ul>
        </Listcategory>
        <ListPost />
      </div>
      <div className="col l-9">
        <div className="row">
          {
            products && products.map((product, index) => (
              <div className="col l-2-4" key={index}>
                <ProductItem product={product} />
              </div>

            ))
          }

        </div>
      </div>
    </div >
  );
}

export default ShopContent;
const Listcategory = styled.div`
  border-left            : 1px solid rgb(12, 179, 12);
  border-bottom          : 1px solid rgb(12, 179, 12);
  border-right           : 1px solid #f5f5f5;
  border-top             : 1px solid #f5f5f5;
  border-top-right-radius: 12px;
  border-top-left-radius : 12px;
  overflow               : hidden;
  margin-top             : 20px;

  .listcategory__header {
      font-size       : 20px;
      padding         : 20px 10px;
      border-bottom   : 1px solid #444;
      background-color: #6abd45;
      text-align      : center;
      color           : #fff;
  }

  .listcategory__list {


      .listcategory__item {
          display      : flex;
          border-bottom: 1px solid #dbdbdb;
          font-size    : 16px;
          padding      : 10px 20px;
          font-weight  : 400;
          gap          : 10px;
          color:#000;

          .listcategory__img {
              height  : 50px;
              width   : 60px;
              overflow: hidden;

              img {
                  height: 100%;
                  width : 100%;
              }
          }

          .listcategory__info {
              .listcategory__category {
                  font-size : 12px;
                  font-style: italic;
                  color     : #ccc;
              }
          }

          &:last-child {
              border: none;
          }
      }
  }
`