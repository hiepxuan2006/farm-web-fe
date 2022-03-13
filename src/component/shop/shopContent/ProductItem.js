import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { baseURL } from "../../../Context/ContTant";
import { addcart } from "../../../store/action/categoryAction";
function ProductItem(props) {

  const { product, className } = props
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.categoryReducer.cart);
  const addtoCart = (product) => {
    dispatch(addcart({ ...product, qty: 1 }))
    alert('Thêm vào giỏ hàng thành công')
  }
  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  })
  return (
    <ProductItemWrap>
      <Link to={`/san-pham/${product._id}`} className={`product__img ${className ? className : ''}`}>
        <img
          src={`${baseURL}/${product.img1}`}
          alt=""
        />
      </Link>
      <div className="product__info">
        <h3 className="product__name">{product.Name}</h3>
        <span style={{ display: "block" }} className="product__price">
          {formatter.format(product.price)}
        </span>
        <button onClick={() => addtoCart(product)}>Thêm vào giỏ hàng</button>
      </div>
    </ProductItemWrap>
  );
}

export default ProductItem;
const ProductItemWrap = styled.div`
  margin-top: 20px;
  box-shadow: 0 0 10px #ccc;
  padding-bottom: 16px;
  // height:340px;
  
  &:hover .product__img img {
    transform: scale(1.09);
  }
  .product__img {
    display:block;
    &.home{
      height: 180px;
      width: 100%;
  }
    height: 180px;
    width: 100%;
    overflow: hidden;
    img {
      transition: all 0.2s linear;
      height: 100%;
      width: 100%;
      transform: scale(1);
    }
  }
  .product__info {
    text-align: center;
    h3 {
      margin-top: 16px;
      font-size: 16px;
      // text-align: justify;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      line-height: 16px;
      height: 16px;
      overflow: hidden;
    }
    span {
      padding: 16px 0;
    }
    button {
      padding: 8px 4px;
      border: none;
      background-color: #6abd45;
      cursor: pointer;
    }
  }
`;
