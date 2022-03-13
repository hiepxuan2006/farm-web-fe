import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import ToastCart from "./ToastCart";
function Cart(props) {
  const dispatch = useDispatch()
  const carts = useSelector((state) => state.categoryReducer.cart)
  console.log(carts.lenght);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    carts.forEach((item) => {
      items += item.qty;
      price += item.qty * parseInt(item.price);
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [carts, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  })
  return (
    <CartWrap className="cart">
      <div className="grid wide">
        <div className="row">
          <div className="col l-8">
            <div className="cart__list">
              <div className="row">

                {
                  carts && carts.lenght !== 0 ?
                    (carts.map((cart, index) => (

                      <div className="col l-12" key={index}>
                        <CartItem cart={cart} formatter={formatter} />
                      </div>
                    )))
                    :
                    <div style={{ textAlign: 'center', width: '100%', marginTop: '100px' }}>
                      <h1>Chưa có sản phẩm</h1>
                    </div>
                }
              </div>
            </div>
          </div>
          <div className="col l-4">
            <div className="cart__navbar" style={{
              padding: '10px',
              height: '200px',
              borderRadius: '10px',
              boxShadow: '0 0 10px #ccc'
            }}>
              <h1 style={{ marginTop: '' }}>Cart Summary</h1>
              <h3 style={{ padding: ' 0' }}>Tổng Tiền: {formatter.format(totalPrice)}</h3>
              <p>Tổng số sản phẩm: {totalItems}</p>
            </div>
          </div>
        </div>
      </div>
      <ToastCart />
    </CartWrap >
  );
}

export default Cart;
const CartWrap = styled.div`
  padding: 30px 0;
`;
