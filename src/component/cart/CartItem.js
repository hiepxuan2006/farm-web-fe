import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { baseURL } from "../../Context/ContTant";
import { addQuantity, removeCart } from "../../store/action/categoryAction";

function CartItem(props) {
  const { cart } = props;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const updateQuantity = (type) => {
    if (type === "minus") {
      // dispatch(addQuantity({type,cart}))
      const data = { type, cart };
      dispatch(addQuantity({ cart, type }));
    } else if (type === "plus") {
      dispatch(addQuantity(cart._id));
    }
  };
  const removeForCart = () => {
    dispatch(removeCart(cart._id));
  };
  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img src={`${baseURL}/${cart.img1}`} alt="" />
      </div>
      <div className="cart__item-desc">
        <h3 className="">{cart.Name}</h3>
        <p className="">{props.formatter.format(cart.price)}</p>
      </div>
      <div className="buttons__quantity">
        <div
          className="minus cart__btn"
          onClick={() => updateQuantity("minus")}
        >
          <i className="fa-solid fa-minus"></i>
        </div>
        <div className="quantity">{cart.qty}</div>
        <div className="plus cart__btn" onClick={() => updateQuantity("plus")}>
          <i className="fa-solid fa-plus"></i>
        </div>
      </div>
      <div className="sumPrice" style={{ marginLeft: "10px" }}>
        <h4>Thành tiền:{props.formatter.format(cart.price * cart.qty)}</h4>
      </div>
      <div className="cart__remove" onClick={() => removeForCart()}>
        <i className="fa-solid fa-trash-can"></i>
      </div>
    </div>
  );
}

export default CartItem;
