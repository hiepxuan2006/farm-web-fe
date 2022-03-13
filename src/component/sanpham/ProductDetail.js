import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { baseURL } from "../../Context/ContTant";
import {
  addcart,
  getALLCategory,
  getAllProduct,
  getProductId,
} from "../../store/action/categoryAction";
import ProductItem from "../shop/shopContent/ProductItem";
import "./sanpham.scss";
function ProductDetail(props) {
  const slug = useParams();
  console.log(slug);
  const dispatch = useDispatch();

  const productitem = useSelector((state) => state.categoryReducer.productId);
  const products = useSelector((state) => state.categoryReducer.product);
  const categories = useSelector((state) => state.categoryReducer.category);
  useEffect(() => {
    dispatch(getProductId(slug.idsp));
    dispatch(getAllProduct());
    dispatch(getALLCategory());
    window.scrollTo(0, 0)

  }, [dispatch, slug]);
  const [quantity, setQuantity] = useState(1);
  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else if (type === "minus") {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };
  const addToCart = () => {
    const result = dispatch(addcart({ ...productitem, qty: quantity }))
    if (result)
      alert('Thêm vào giỏ hàng thành công')
  }
  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  })
  return (
    <div className="productdetail">
      <div className="grid wide">
        <div className="productdetail__wrap">
          <div className="row">
            <div className="col l-6">
              <div className="productdetail__img">
                <img src={`${baseURL}/${productitem.img1}`} alt="" />
              </div>
            </div>
            <div className="col l-6">
              <div className="productdetail__info">
                <h1>{productitem.Name}</h1>
                <p className="productdetail__info-price">{formatter.format(productitem.price)}</p>
                <div className="productdetail__desc">
                  <i className="fa-solid fa-square-check"></i>
                  <span>Gọi để đặt hàng: 1900 000</span>
                </div>
                <div className="productdetail__desc">
                  <i className="fa-solid fa-square-check"></i>
                  <span>Gọi để đặt hàng: 1900 000</span>
                </div>
                <div className="productdetail__desc">
                  <i className="fa-solid fa-square-check"></i>
                  <span>Gọi để đặt hàng: 1900 000</span>
                </div>

                <div className="buttons__quantity">
                  <div
                    className="minus"
                    onClick={() => updateQuantity("minus")}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </div>
                  <div className="quantity">{quantity}</div>
                  <div className="plus" onClick={() => updateQuantity("plus")}>
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>

                <button
                  onClick={() => addToCart()}
                  className="productdetail__btn"
                >
                  Thêm vào giỏ hàng
                </button>

                <ul className="productdetail_category">
                  <li>Danh mục</li>
                  {categories &&
                    categories.map((category, index) => (
                      <Link to={`/cua-hang/${category.path}`} key={index}>
                        {category.Name}
                      </Link>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="productdetail__text">
          <div
            style={{ marginLeft: "20px", paddingTop: "30px" }}
            className="productdetail__text-heading"
          >
            <h1>Chi tiết sản phẩm</h1>
          </div>
          <div className="row">
            <div className="col l-12">
              <p
                style={{ padding: "20px" }}
                dangerouslySetInnerHTML={{ __html: productitem.description }}
              ></p>
            </div>
          </div>
        </div>
        <div className="listProduct">
          <div className="grid wide">
            <div className="listProduct__heading">
              <h1>Có thể bạn thích</h1>
            </div>
            <div className="row">
              {products &&
                products.slice(0, 5).map((product, index) => (
                  <div className="col l-2-5" key={index}>
                    <ProductItem quantity={quantity} product={product} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
const ProductDetailWrap = styled.div``;
