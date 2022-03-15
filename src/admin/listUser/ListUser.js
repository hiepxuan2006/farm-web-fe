import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../Context/ContTant";
import { getUser } from "../../store/action/adminAction";
import "./ListUser.scss";
export const ListUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.adminReducer.users);
  useEffect(() => {
    const getCategory = () => {
      dispatch(getUser());
    };
    getCategory();
  }, [dispatch]);
  console.log(users);
  return (
    <div>
      <table id="customers">
        <tbody>
          <tr>
            <th>STT</th>
            <th>Username</th>
            <th>email</th>
            <th>role</th>
            <th>Ngày tạo</th>
            <th>Action</th>
          </tr>
          {users &&
            users.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.userName}</td>
                <td>{item.email}</td>
                <td>{item.isAdmin ? "admin" : "client"}</td>
                <td>
                  <img
                    style={{
                      height: "50px",
                      marginRight: "20px",
                      width: "50px",
                    }}
                    src={`${baseURL}/${item.avatar}`}
                    alt=""
                  />
                </td>
                <td>
                  <button>del</button>
                  <button>Add</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
