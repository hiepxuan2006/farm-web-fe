import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProduct } from "../../../store/action/categoryAction";
import ProductItem from "../../shop/shopContent/ProductItem";
import styled from 'styled-components'
function Product(props) {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.categoryReducer.product)
  useEffect(() => {
    const getProduct = () => {
      dispatch(getAllProduct())
    }
    getProduct()
  }, [dispatch])
  return (
    <ProductWrap className="product">
      <div className="product__heading">
        <h1>Sản phẩm nổi bật</h1>
      </div>
      <div className="product__content">
        <div className="grid wide">
          <div className="row">
            {
              products && products.map((product, index) => (
                <div className="col l-2" key={index}>

                  <ProductItem product={product} className='home' />
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="product__btn">
        <button>
          <Link to='/cua-hang'>Xem thêm</Link>
        </button>
      </div>
    </ProductWrap >
  );
}

export default Product;
const ProductWrap = styled.div`
      padding: 50px 0;
    .product__heading {
        font-size : 20px;
        color     : #777;
        width     : 100%;
        text-align: center;
    }
    .product__btn {
      padding-top: 40px;
      width      : 100%;
      text-align : center;

      button {
          padding         : 10px;
          background-color: #75cf4e;
          border-radius   : 12px;
          border          : none;
          text-align      : center;
          min-width       : 100px;
          cursor          : pointer;
          filter          : brightness(0.8);
          transition      : all .2s linear;

          &:hover {
              filter: brightness(1);
          }
          a{
            color:#fff;
            font-size:18px;
          }
      }

  }
`

