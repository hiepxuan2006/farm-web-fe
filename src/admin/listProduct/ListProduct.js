import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../store/action/categoryAction";
import "./ListProduct.scss";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import { baseURL } from "../../Context/ContTant";
export const ListProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.categoryReducer.product);
  useEffect(() => {
    const getProduct = async () => {
      await dispatch(getAllProduct());
    };
    getProduct();
  }, [dispatch]);
  return (
    <div className="listproduct">
      <table id="customers">
        <tbody>
          <tr>
            <th>STT</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Danh mục</th>
            <th>Ngày tạo</th>
            <th>Anh</th>
            <th>Action</th>
          </tr>
          {products &&
            products.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.Name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>{moment(item.createAt).format("DD/MM/YYYY")}</td>
                <td>
                  <img
                    style={{
                      height: "50px",
                      marginRight: "20px",
                      width: "50px",
                    }}
                    src={`${baseURL}/${item.img1}`}
                    alt=""
                  />
                </td>
                <td>
                  <button>xóa</button>
                  <button onClick={() => navigate("/admin/them-san-pham")}>
                    Thêm
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
