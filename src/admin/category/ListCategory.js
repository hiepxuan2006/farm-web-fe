import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../Context/ContTant";
import { getALLCategory } from "../../store/action/categoryAction";
import "./ListCategoy.scss";
export const ListCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector((state) => state.categoryReducer.category);
  useEffect(() => {
    const getCategory = () => {
      dispatch(getALLCategory());
    };
    getCategory();
  }, [dispatch]);
  return (
    <div>
      <table id="customers">
        <tbody>
          <tr>
            <th>STT</th>
            <th>Tên loại hàng</th>
            <th>path</th>
            <th>image</th>
            <th>Ngày tạo</th>
            <th>Action</th>
          </tr>
          {categories &&
            categories.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.Name} </td>
                <td>{item.path}</td>
                <td>
                  <img
                    style={{
                      height: "30px",
                      marginRight: "20px",
                      width: "30px",
                    }}
                    src={`${baseURL}/${item.img}`}
                    alt=""
                  />

                  <img
                    style={{ height: "30px", width: "30px" }}
                    src={`${baseURL}/${item.imghover}`}
                    alt=""
                  />
                </td>
                <td>{moment(item.createAt).format("DD/MM/YYYY")}</td>
                <td>
                  <button>Xóa</button>
                  <button>Thêm</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
