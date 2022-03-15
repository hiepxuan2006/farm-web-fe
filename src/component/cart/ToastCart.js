import React from "react";
import styled from "styled-components";
import { baseURL } from "../../Context/ContTant";
function ToastCart(props) {
  const { cart } = props;
  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  })
  return (
    <ToastCartWrap className="toastcart">
      {cart &&
        cart.map((item, index) => (
          <div className="toastcart__item" key={index}>
            <div className="toastcart__img">
              <img src={`${baseURL}/${item.img1}`} alt="" />
            </div>
            <div className="toastcart__desc">
              <p className="">{item.Name}</p>
              <p style={{
                fontSize: '12px',
                marginTop: '4px',
                color: '#ccc'
              }}>{item.qty} x {formatter.format(item.price)}</p>
            </div>
          </div>
        ))}
      <div className="toastcart__btn">
        <button>Xem giỏ hàng</button>
        {/* <button>Mua hàng</button> */}
      </div>
    </ToastCartWrap>

  );
}

export default ToastCart;
const ToastCartWrap = styled.div`
  padding: 6px;
  z-index: 100;
  top: 60px;
  border-radius: 10px;
  visibility: hidden;
  transition: all 0.3s linear;
  background-color: #fff;
  position: absolute;
  box-shadow: 0 0 10px #ccc;
  width: 250px;
  .toastcart__item {
    margin-top: 4px;
    box-shadow: 0 0 4px #ccc;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .toastcart__img {
      width: 60px;
      height: 60px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    p {
      flex: 1;
      width: 160px;
      font-size: 14px;
      font-weight: 400;
    }
  }
  .toastcart__btn {
    width: 100%;
    text-align: center;
    button {
      padding: 4px;
      margin: 10px auto;
      width: 120px;
      display: block;
    }
  }
`;
